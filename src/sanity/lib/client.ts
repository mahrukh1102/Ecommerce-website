// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: "3u1xqp47", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: "skDDEKGEpfKZXRiwhMnlGulzHJk8iKMv5AgYEc1Q55jlUxd6s5I2SAtVclnTFX9GcZnSQ7yNCx2d8TgZPeGcizsHtZZVchURdBXXmfWKrBSRRjeMFbDTOSnIJhRQe2eJdxkp9lGyH62L3IoVoZ6VCKet673s1ZpR84zQWmijH5wye4O4uyg9",
});