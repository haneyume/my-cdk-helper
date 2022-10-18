import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export function buildDynamoDBTable(
  scope: Construct,
  name: string,
  props: cdk.aws_dynamodb.TableProps,
): dynamodb.Table {
  const myTable = new dynamodb.Table(scope, name, props);

  new cdk.CfnOutput(scope, `${name}-tableName`, {
    value: myTable.tableName,
  });

  return myTable;
}
