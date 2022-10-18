import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
export declare function buildLambdaFunction(scope: Construct, name: string, props?: cdk.aws_lambda_nodejs.NodejsFunctionProps): lambda.Function;
