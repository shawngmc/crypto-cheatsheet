import { CloudFrontClient, CreateInvalidationCommand } from '@aws-sdk/client-cloudfront';
import * as fs from 'fs';

// Read config file
let config = JSON.parse(fs.readFileSync('../config.json', 'utf-8'));

const run = async () => {
    try {
        var cloudfront = new CloudFrontClient({
          region: config.aws.region
        });
        var input = {
          DistributionId: config.aws.cloudfront_distribution,
          InvalidationBatch: {
            CallerReference: new Date().toString(),
            Paths: { 
              Quantity: 1, 
              Items: [
                '/*'
              ]
            }
          }
        };

        const command = new CreateInvalidationCommand(input);
        const response = await cloudfront.send(command);
        console.log(response);
        console.log(`Done!`);
    } catch (err) {
        console.log("Error", err);
    }
};
run();
