import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as sns from 'aws-cdk-lib/aws-sns';

export function buildSNSTopic(
  scope: Construct,
  name: string,
  props?: cdk.aws_sns.TopicProps,
): sns.Topic {
  const myTopic = new sns.Topic(scope, name, props);

  new cdk.CfnOutput(scope, `${name}-topicName`, {
    value: myTopic.topicName,
  });

  return myTopic;
}
