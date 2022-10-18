import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
export declare function buildSQSQueue(scope: Construct, name: string, props?: cdk.aws_sqs.QueueProps): sqs.Queue;
