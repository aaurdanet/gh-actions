#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkProjectStack } from '../lib/cdk-project-stack';

const app = new cdk.App();
new CdkProjectStack(app, 'S3DeployStack', {
  env: {
    region: 'us-east-1'
  }
});