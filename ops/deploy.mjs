import mime from 'mime-types';
import S3SyncClient from 's3-sync-client';
import AWS from "aws-sdk";

// Set the AWS Region.
const REGION = "us-east-1";
const BUCKET = "cryptocheatsheet.ninja";


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
            region: REGION,
            credentials: {
                accessKeyId: AWS.config.credentials.accessKeyId,
                secretAccessKey: AWS.config.credentials.secretAccessKey,
            }
        });

        console.log(`Copying files with ACL and content-type...`);
        await sync.bucketWithLocal('../build/', BUCKET, {
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
