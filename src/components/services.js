import axios from 'axios';

export const displayProducts = () => axios.get('/api/products').then(res => res.data)

export const displayProduct = () => axios.get('/api/products/:id').then(res => res.data)
