import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as path from 'path';


export class CdkProjectStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
   
      // Define the S3 bucket
      const cdk_bucket = new Bucket(this, 'S3Bucket', {
        bucketName: 'cdk-bucket-py123654',
      });
      new s3deploy.BucketDeployment(this, 'DeployEmptyFolder', {
        sources: [s3deploy.Source.asset(path.join(__dirname, 'empty-folder'))], // Empty folder on disk
        destinationBucket: cdk_bucket,
        destinationKeyPrefix: 'empty-folder/', // The folder structure you want
  });
  //     // Define your sources
  //     const source_folders = [
  //       s3deploy.Source.asset('./resources'), //remember to add one more . for windows
  //     ];
  //  
  //     // Deploy a local folder to the S3 bucket
  //     new s3deploy.BucketDeployment(this, 'DeployLocalFolder', {
  //       sources: source_folders,
  //       destinationBucket: cdk_bucket,
  //     });
  // Optionally, deploy an empty folder structure





    }
  }

 

 
 

 
