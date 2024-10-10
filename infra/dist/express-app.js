"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const express_1 = __importDefault(require("express"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const app = (0, express_1.default)();
const dynamoDb = new aws_sdk_1.default.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME || '';
app.get('/', (req, res) => {
    res.status(200).send('Hello from Express on Lambda using Function URLs!');
});
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});
app.get('/get-reviews', async (req, res) => {
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
    }
    catch (error) {
        console.error('Error getting reviews:', error);
        res.status(500).send('Internal Server Error');
    }
});
// app.post('/addReview', async (req: Request, res: Response) => {
//   const { title, author, review, email } = req.body;
//   if (!title || !author || !review || !email) {
//     return res.status(400).send('All fields are required');
//   }
//   const newItem = {
//     id: ++currentId, // idをインクリメント
//     title,
//     author,
//     review,
//     email,
//   };
//   const params = {
//     TableName: TABLE_NAME,
//     Item: newItem,
//   };
//   try {
//     await dynamoDb.put(params).promise();
//     res.status(201).send('Review added successfully');
//   } catch (error) {
//     console.error('Error adding review:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
exports.handler = (0, serverless_express_1.default)({ app });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sYW1iZGEvZXhwcmVzcy1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0ZBQTJEO0FBQzNELHNEQUFxRDtBQUNyRCxzREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7QUFFaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQztBQUM1RSxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUVwQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzdDLE9BQU87SUFDVCxDQUFDO0lBRUQsTUFBTSxNQUFNLEdBQUc7UUFDYixTQUFTLEVBQUUsVUFBVTtRQUNyQixzQkFBc0IsRUFBRSxzQkFBc0I7UUFDOUMseUJBQXlCLEVBQUU7WUFDekIsV0FBVyxFQUFFLFFBQVE7U0FDdEI7S0FDRixDQUFDO0lBRUYsSUFBSSxDQUFDO1FBQ0gsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxrRUFBa0U7QUFDbEUsdURBQXVEO0FBRXZELGtEQUFrRDtBQUNsRCw4REFBOEQ7QUFDOUQsTUFBTTtBQUVOLHNCQUFzQjtBQUN0QixxQ0FBcUM7QUFDckMsYUFBYTtBQUNiLGNBQWM7QUFDZCxjQUFjO0FBQ2QsYUFBYTtBQUNiLE9BQU87QUFFUCxxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLHFCQUFxQjtBQUNyQixPQUFPO0FBRVAsVUFBVTtBQUNWLDRDQUE0QztBQUM1Qyx5REFBeUQ7QUFDekQsc0JBQXNCO0FBQ3RCLG9EQUFvRDtBQUNwRCxxREFBcUQ7QUFDckQsTUFBTTtBQUNOLE1BQU07QUFFTyxRQUFBLE9BQU8sR0FBRyxJQUFBLDRCQUFpQixFQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXJ2ZXJsZXNzRXhwcmVzcyBmcm9tICdAdmVuZGlhL3NlcnZlcmxlc3MtZXhwcmVzcyc7XG5pbXBvcnQgZXhwcmVzcywgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5jb25zdCBkeW5hbW9EYiA9IG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcbmNvbnN0IFRBQkxFX05BTUUgPSBwcm9jZXNzLmVudi5UQUJMRV9OQU1FIHx8ICcnO1xuXG5hcHAuZ2V0KCcvJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnSGVsbG8gZnJvbSBFeHByZXNzIG9uIExhbWJkYSB1c2luZyBGdW5jdGlvbiBVUkxzIScpO1xufSk7XG5cbmFwcC5nZXQoJy9oZWFsdGgnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdPSycpO1xufSk7XG5cbmFwcC5nZXQoJy9nZXQtcmV2aWV3cycsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSByZXEucXVlcnkudXNlcm5hbWU7XG5cbiAgaWYgKCF1c2VybmFtZSkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VybmFtZSBpcyByZXF1aXJlZCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBUYWJsZU5hbWU6IFRBQkxFX05BTUUsXG4gICAgS2V5Q29uZGl0aW9uRXhwcmVzc2lvbjogJ3VzZXJuYW1lID0gOnVzZXJuYW1lJyxcbiAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XG4gICAgICAnOnVzZXJuYW1lJzogdXNlcm5hbWUsXG4gICAgfSxcbiAgfTtcblxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkeW5hbW9EYi5xdWVyeShwYXJhbXMpLnByb21pc2UoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhLkl0ZW1zKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHJldmlld3M6JywgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InKTtcbiAgfVxufSk7XG5cbi8vIGFwcC5wb3N0KCcvYWRkUmV2aWV3JywgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuLy8gICBjb25zdCB7IHRpdGxlLCBhdXRob3IsIHJldmlldywgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4vLyAgIGlmICghdGl0bGUgfHwgIWF1dGhvciB8fCAhcmV2aWV3IHx8ICFlbWFpbCkge1xuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnKTtcbi8vICAgfVxuXG4vLyAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4vLyAgICAgaWQ6ICsrY3VycmVudElkLCAvLyBpZOOCkuOCpOODs+OCr+ODquODoeODs+ODiFxuLy8gICAgIHRpdGxlLFxuLy8gICAgIGF1dGhvcixcbi8vICAgICByZXZpZXcsXG4vLyAgICAgZW1haWwsXG4vLyAgIH07XG5cbi8vICAgY29uc3QgcGFyYW1zID0ge1xuLy8gICAgIFRhYmxlTmFtZTogVEFCTEVfTkFNRSxcbi8vICAgICBJdGVtOiBuZXdJdGVtLFxuLy8gICB9O1xuXG4vLyAgIHRyeSB7XG4vLyAgICAgYXdhaXQgZHluYW1vRGIucHV0KHBhcmFtcykucHJvbWlzZSgpO1xuLy8gICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKCdSZXZpZXcgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHJldmlldzonLCBlcnJvcik7XG4vLyAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0ludGVybmFsIFNlcnZlciBFcnJvcicpO1xuLy8gICB9XG4vLyB9KTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBzZXJ2ZXJsZXNzRXhwcmVzcyh7IGFwcCB9KTtcbiJdfQ==