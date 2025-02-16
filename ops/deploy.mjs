import mime from 'mime-types';
import { S3Client} from '@aws-sdk/client-s3';
import { S3SyncClient } from 's3-sync-client';
// import { fromEnv } from "@aws-sdk/credential-providers";
import * as fs from 'fs';

// Read config file
let config = JSON.parse(fs.readFileSync('../config.json', 'utf-8'));

const run = async () => {
    try {
        const s3Client = new S3Client({
            region: config.aws.region
        });
        const { sync } = new S3SyncClient({
            client: s3Client
        });

        console.log(`Syncing files...`);
        await sync('../build/', config.aws.site_bucket, {
            commandInput: (input) => ({
                ACL: "public-read",
                ContentType: mime.lookup(input.Key) || 'text/html'
            }),
            del: true 
        });
        console.log(`Done!`);
    } catch (err) {
        console.log("Error", err);
    }
};
run();
