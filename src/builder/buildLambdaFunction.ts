import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export function buildLambdaFunction(
  scope: Construct,
  name: string,
  props?: cdk.aws_lambda_nodejs.NodejsFunctionProps,
): lambda.Function {
  const myFunction = new NodejsFunction(scope, name, props);

  new cdk.CfnOutput(scope, `${name}-functionArn`, {
    value: myFunction.functionArn,
  });

  return myFunction;
}
