import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchProduct(productId) {
    if (!productId) return; // 

    console.log(`Fetching product with ID: ${productId}`);
    try {
      const result = await fetch(`https://coffee-shop-backend-5fmn.onrender.com/api/v1/products/${productId}`);
      if (!result.ok) throw new Error("Failed to fetch product");
      const data = await result.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError("Could not load product.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      fetchProduct(id); 
    }
  }, [id]); 
