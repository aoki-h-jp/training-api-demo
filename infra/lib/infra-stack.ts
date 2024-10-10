import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda関数の定義
    const lambdaFunction = new lambda.Function(this, 'training-api-demo-lambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'express-app.handler',
      code: lambda.Code.fromAsset('dist'),
      functionName: 'training-api-demo-lambda',
    });

    // Lambda Function URLを追加
    const functionUrl = lambdaFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,  // 認証なしで公開
    });

    // Function URLをCDK出力に表示
    new cdk.CfnOutput(this, 'FunctionUrl', {
      value: functionUrl.url,
    });

    // DynamoDBテーブルの定義
    const table = new dynamodb.Table(this, 'training-api-demo-table', {
      tableName: 'training-api-demo-table',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'email', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // DynamoDBテーブルをLambda関数に関連付け
    lambdaFunction.addToRolePolicy(new iam.PolicyStatement({
      actions: ['dynamodb:GetItem', 'dynamodb:PutItem', 'dynamodb:DeleteItem'],
      resources: [table.tableArn],
    }));

  }
}
