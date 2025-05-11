// src/lib/api.ts
import axios from 'axios';

const BASE_URL = 'https://api.baserow.io/api'; // Remova o path específico daqui
const API_TOKEN = 'bcysnx1LNRBvYSxq21kASNvdJ3MTQQkk'; // Nunca exponha tokens em código frontend!

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Token ${API_TOKEN}`,
    'Content-Type': 'application/json'
  }
});