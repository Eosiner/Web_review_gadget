// Import axios
import axios from 'axios';

// Membuat instance axios dengan konfigurasi baseURL
const Api = axios.create({
  // Base URL mengarah ke server Laravel yang berjalan di localhost:8000
  baseURL: 'http://localhost:8000',
});

// Mengekspor instance axios untuk digunakan di seluruh aplikasi
export default Api;
