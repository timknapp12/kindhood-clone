import axios from 'axios';

// export const displayProducts = () => axios.get('/api/products')
// .then(res => res.data)
// .catch((res) => res.status(500).send());

export async function displayProducts() {
    const res = await axios.get('/api/products');
    return res.data;
}

export const displayProduct = () => axios.get('/api/products/:id').then(res => res.data)
