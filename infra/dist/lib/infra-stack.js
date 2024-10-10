"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfraStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const lambda = __importStar(require("aws-cdk-lib/aws-lambda"));
const path = __importStar(require("path"));
// import * as sqs from 'aws-cdk-lib/aws-sqs';
class InfraStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Lambda関数の定義
        const lambdaFunction = new lambda.Function(this, 'ExpressLambda', {
            runtime: lambda.Runtime.NODEJS_20_X,
            handler: 'express-app.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')), // Lambda関数のコード
        });
        // Lambda Function URLを追加
        const functionUrl = lambdaFunction.addFunctionUrl({
            authType: lambda.FunctionUrlAuthType.NONE, // 認証なしで公開
        });
        // Function URLをCDK出力に表示
        new cdk.CfnOutput(this, 'FunctionUrl', {
            value: functionUrl.url,
        });
    }
}
exports.InfraStack = InfraStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaW5mcmEtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFFbkMsK0RBQWlEO0FBQ2pELDJDQUE2QjtBQUM3Qiw4Q0FBOEM7QUFFOUMsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDdkMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixjQUFjO1FBQ2QsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDaEUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFHLGVBQWU7U0FDakYsQ0FBQyxDQUFDO1FBRUgseUJBQXlCO1FBQ3pCLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUM7WUFDaEQsUUFBUSxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUcsVUFBVTtTQUN2RCxDQUFDLENBQUM7UUFFSCx3QkFBd0I7UUFDeEIsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7WUFDckMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFHO1NBQ3ZCLENBQUMsQ0FBQztJQUVMLENBQUM7Q0FDRjtBQXRCRCxnQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zcXMnO1xuXG5leHBvcnQgY2xhc3MgSW5mcmFTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIExhbWJkYemWouaVsOOBruWumue+qVxuICAgIGNvbnN0IGxhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnRXhwcmVzc0xhbWJkYScsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxuICAgICAgaGFuZGxlcjogJ2V4cHJlc3MtYXBwLmhhbmRsZXInLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9sYW1iZGEnKSksICAvLyBMYW1iZGHplqLmlbDjga7jgrPjg7zjg4lcbiAgICB9KTtcblxuICAgIC8vIExhbWJkYSBGdW5jdGlvbiBVUkzjgpLov73liqBcbiAgICBjb25zdCBmdW5jdGlvblVybCA9IGxhbWJkYUZ1bmN0aW9uLmFkZEZ1bmN0aW9uVXJsKHtcbiAgICAgIGF1dGhUeXBlOiBsYW1iZGEuRnVuY3Rpb25VcmxBdXRoVHlwZS5OT05FLCAgLy8g6KqN6Ki844Gq44GX44Gn5YWs6ZaLXG4gICAgfSk7XG5cbiAgICAvLyBGdW5jdGlvbiBVUkzjgpJDREvlh7rlipvjgavooajnpLpcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnRnVuY3Rpb25VcmwnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb25VcmwudXJsLFxuICAgIH0pO1xuXG4gIH1cbn1cbiJdfQ==