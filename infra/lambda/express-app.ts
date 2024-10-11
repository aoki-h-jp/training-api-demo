import serverlessExpress from '@vendia/serverless-express';
import express, { Request, Response } from 'express';
import AWS from 'aws-sdk';
import { BookReview } from './types';

const app = express();

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME || '';

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello from Express on Lambda using Function URLs!');
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

app.get('/get-reviews', async (req: Request, res: Response) => {
  const username = req.query.username;

  if (!username) {
    res.status(400).send('Username is required');
    return;
  }

  const params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: 'username = :username',
    ExpressionAttributeValues: {
      ':username': username,
    },
  };

  try {
    const data = await dynamoDb.query(params).promise();
    res.status(200).json(data.Items);
  } catch (error) {
    console.error('Error getting reviews:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/add-review', async (req: Request, res: Response) => {
  const review: BookReview = req.body;

  if (!review || !review.reviewId || !review.username || !review.title || !review.author || !review.review) {
    res.status(400).send('All fields are required');
    return;
  }

  const params = {
    TableName: TABLE_NAME,
    Item: review,
  };

  try {
    await dynamoDb.put(params).promise();
    res.status(201).send('Review added successfully');
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).send('Internal Server Error');
  }
});

export const handler = serverlessExpress({ app });
