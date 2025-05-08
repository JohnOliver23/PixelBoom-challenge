import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.baserow.io/api/database/rows/table/1/',
});