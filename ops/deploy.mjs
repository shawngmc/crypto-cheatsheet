import mime from 'mime-types';
import S3SyncClient from 's3-sync-client';
import AWS from "aws-sdk";
import * as fs from 'fs';

// Read config file
let config = JSON.parse(fs.readFileSync('../config.json', 'utf-8'));

AWS.config.getCredentials(function(err) {
  if (err) {
      console.log('credentials not loaded');
      console.log(err.stack);
      process.exit(1);
  } else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});

const run = async () => {
    try {
        const sync = new S3SyncClient({
            region: config.aws.region,
            credentials: {
                accessKeyId: AWS.config.credentials.accessKeyId,
                secretAccessKey: AWS.config.credentials.secretAccessKey,
            }
        });

        console.log(`Copying files with ACL and content-type...`);
        await sync.bucketWithLocal('../build/', config.aws.site_bucket, {
            commandInput: {
                ACL: "public-read",
                ContentType: (syncCommandInput) => (
                    mime.lookup(syncCommandInput.Key) || 'text/html'
                ),
            },
            del: true 
        });
        console.log(`Done!`);
    } catch (err) {
        console.log("Error", err);
    }
};
run();
