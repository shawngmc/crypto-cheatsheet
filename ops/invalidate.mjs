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
        var cloudfront = new AWS.CloudFront();
        var params = {
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
        cloudfront.createInvalidation(params, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     console.log(data);           // successful response
        });
        console.log(`Done!`);
    } catch (err) {
        console.log("Error", err);
    }
};
run();
