"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: "3u1xqp47", // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skDDEKGEpfKZXRiwhMnlGulzHJk8iKMv5AgYEc1Q55jlUxd6s5I2SAtVclnTFX9GcZnSQ7yNCx2d8TgZPeGcizsHtZZVchURdBXXmfWKrBSRRjeMFbDTOSnIJhRQe2eJdxkp9lGyH62L3IoVoZ6VCKet673s1ZpR84zQWmijH5wye4O4uyg9",
});