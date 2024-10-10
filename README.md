# training-api-demo

## Frontend 構築手順

以下のコマンドで初期構築を行います。

```bash
npx create-next-app@latest frontend
```

localでの確認・起動は以下で行います。

```bash
npm run dev
```

## infra, backend 構築手順

以下のコマンドで初期構築を行います。

```bash
cd infra
npm install -g aws-cdk
cdk init app --language typescript
npm install express serverless-http @types/express
mkdir lambda
touch lambda/express-app.ts
```
