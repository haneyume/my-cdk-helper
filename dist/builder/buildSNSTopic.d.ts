import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sns from 'aws-cdk-lib/aws-sns';
export declare function buildSNSTopic(scope: Construct, name: string, props?: cdk.aws_sns.TopicProps): sns.Topic;
