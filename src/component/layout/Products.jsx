import { useState, useEffect } from 'react';
import baseURLAPI from '../../Helper/BaseUrl';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        handleMenu();
    }, []);

    const handleMenu = async () => {
        await axios.get(baseURLAPI('products'))
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }

    return (
        <div className="container mx-auto p-4 py-16">
            <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden border"
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-72   object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg text-gray-600 font-semibold">{product.name}</h2>
                            <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
                            <p className="text-lg font-bold text-green-600 mb-2">
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}
                            </p>
                            <p className={`text-sm font-medium ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
