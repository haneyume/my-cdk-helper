import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
export declare function buildS3Bucket(scope: Construct, name: string, props?: cdk.aws_s3.BucketProps): s3.Bucket;
