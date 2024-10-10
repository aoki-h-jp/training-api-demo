"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.status(200).send('Hello from Express on Lambda using Function URLs!');
});
exports.handler = (0, serverless_express_1.default)({ app });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sYW1iZGEvZXhwcmVzcy1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0ZBQTJEO0FBQzNELHNEQUFxRDtBQUVyRCxNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxPQUFPLEdBQUcsSUFBQSw0QkFBaUIsRUFBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VydmVybGVzc0V4cHJlc3MgZnJvbSAnQHZlbmRpYS9zZXJ2ZXJsZXNzLWV4cHJlc3MnO1xuaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAuZ2V0KCcvJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICByZXMuc3RhdHVzKDIwMCkuc2VuZCgnSGVsbG8gZnJvbSBFeHByZXNzIG9uIExhbWJkYSB1c2luZyBGdW5jdGlvbiBVUkxzIScpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gc2VydmVybGVzc0V4cHJlc3MoeyBhcHAgfSk7XG4iXX0=