import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as s3 from 'aws-cdk-lib/aws-s3';

export function buildS3Bucket(
  scope: Construct,
  name: string,
  props?: cdk.aws_s3.BucketProps,
): s3.Bucket {
  const myBucket = new s3.Bucket(scope, name, props);

  new cdk.CfnOutput(scope, `${name}-bucketName`, {
    value: myBucket.bucketName,
  });

  return myBucket;
}
