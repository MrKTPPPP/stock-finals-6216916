const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};
