import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda関数の定義
    const lambdaFunction = new lambda.Function(this, 'ExpressLambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'express-app.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../dist/lambda')),  // Lambda関数のコード
    });

    // Lambda Function URLを追加
    const functionUrl = lambdaFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,  // 認証なしで公開
    });

    // Function URLをCDK出力に表示
    new cdk.CfnOutput(this, 'FunctionUrl', {
      value: functionUrl.url,
    });

  }
}
