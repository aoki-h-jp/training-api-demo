import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as iam from 'aws-cdk-lib/aws-iam';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // DynamoDBテーブルの定義
    const table = new dynamodb.Table(this, 'training-api-demo-table', {
      tableName: 'training-api-demo-table',
      partitionKey: { name: 'username', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'title', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // Lambda関数の定義
    const lambdaFunction = new lambda.Function(this, 'training-api-demo-lambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'express-app.handler',
      code: lambda.Code.fromAsset('dist'),
      functionName: 'training-api-demo-lambda',
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // Lambda Function URLを追加
    const functionUrl = lambdaFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,  // 認証なしで公開
      cors: {
        allowedOrigins: ['https://training-api-demo.vercel.app'],
        allowedMethods: [lambda.HttpMethod.GET, lambda.HttpMethod.POST, lambda.HttpMethod.PUT, lambda.HttpMethod.DELETE],
        allowedHeaders: ['*'],
      },
    });

    // Function URLをCDK出力に表示
    new cdk.CfnOutput(this, 'FunctionUrl', {
      value: functionUrl.url,
    });

    // DynamoDBテーブルをLambda関数に関連付け
    lambdaFunction.addToRolePolicy(new iam.PolicyStatement({
      actions: ['dynamodb:GetItem', 'dynamodb:PutItem', 'dynamodb:DeleteItem', 'dynamodb:Query'],
      resources: [table.tableArn],
    }));

  }
}
