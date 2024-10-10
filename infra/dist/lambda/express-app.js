"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
// ルートハンドリング
app.get('/', (req, res) => {
    res.send('Hello from Express on Lambda using Function URLs!');
});
exports.handler = (0, serverless_http_1.default)(app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9sYW1iZGEvZXhwcmVzcy1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQXFEO0FBQ3JELHNFQUF5QztBQUV6QyxNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUV0QixZQUFZO0FBQ1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxPQUFPLEdBQUcsSUFBQSx5QkFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBzZXJ2ZXJsZXNzIGZyb20gJ3NlcnZlcmxlc3MtaHR0cCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuLy8g44Or44O844OI44OP44Oz44OJ44Oq44Oz44KwXG5hcHAuZ2V0KCcvJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICByZXMuc2VuZCgnSGVsbG8gZnJvbSBFeHByZXNzIG9uIExhbWJkYSB1c2luZyBGdW5jdGlvbiBVUkxzIScpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gc2VydmVybGVzcyhhcHApO1xuIl19