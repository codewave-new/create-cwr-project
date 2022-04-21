import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://api_base_url.com'
    : 'http://localhost:4000';

export default axios.create({
  baseURL,
  withCredentials: true,
  headers: { token: 'Bearer token' },
});
