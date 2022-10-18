import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as sqs from 'aws-cdk-lib/aws-sqs';

export function buildSQSQueue(
  scope: Construct,
  name: string,
  props?: cdk.aws_sqs.QueueProps,
): sqs.Queue {
  const myQueue = new sqs.Queue(scope, name, props);

  new cdk.CfnOutput(scope, `${name}-queueName`, {
    value: myQueue.queueName,
  });

  return myQueue;
}
