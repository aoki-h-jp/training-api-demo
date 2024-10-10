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
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});
exports.handler = (0, serverless_express_1.default)({ app });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sYW1iZGEvZXhwcmVzcy1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0ZBQTJEO0FBQzNELHNEQUFxRDtBQUVyRCxNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFVSxRQUFBLE9BQU8sR0FBRyxJQUFBLDRCQUFpQixFQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXJ2ZXJsZXNzRXhwcmVzcyBmcm9tICdAdmVuZGlhL3NlcnZlcmxlc3MtZXhwcmVzcyc7XG5pbXBvcnQgZXhwcmVzcywgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC5nZXQoJy8nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdIZWxsbyBmcm9tIEV4cHJlc3Mgb24gTGFtYmRhIHVzaW5nIEZ1bmN0aW9uIFVSTHMhJyk7XG59KTtcblxuYXBwLmdldCgnL2hlYWx0aCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ09LJyk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBzZXJ2ZXJsZXNzRXhwcmVzcyh7IGFwcCB9KTtcbiJdfQ==