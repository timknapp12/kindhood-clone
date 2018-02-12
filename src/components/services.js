import axios from 'axios';

export const displayProducts = () => axios.get('/api/products').then(res => res.data)
