import axios from 'axios';

export default axios.create({
  // baseURL: window.location.origin
  baseURL: "http://localhost:8081"
});