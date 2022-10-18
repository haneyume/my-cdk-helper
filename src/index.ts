export function test() {
  return 'test';
}

export { buildDynamoDBTable } from './builder/buildDynamoDBTable';
export { buildLambdaFunction } from './builder/buildLambdaFunction';
export { buildS3Bucket } from './builder/buildS3Bucket';
export { buildSNSTopic } from './builder/buildSNSTopic';
export { buildSQSQueue } from './builder/buildSQSQueue';
