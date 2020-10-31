import axios from 'axios';

export default axios.create({
  baseURL: 'http://8d0a4d1ccf1e.ngrok.io',
  // baseURL: 'http://localhost:3000',
});
