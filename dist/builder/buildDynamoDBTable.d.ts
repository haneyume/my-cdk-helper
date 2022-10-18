import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
export declare function buildDynamoDBTable(scope: Construct, name: string, props: cdk.aws_dynamodb.TableProps): dynamodb.Table;
