import { useRouter } from 'next/router';
import products from '../../mocks/products.json';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  // For pages with dynamic routes, you can use the useRouter hook to get the route params
  const router = useRouter();
  const id  = router.query.id; // Get 'id' from the route params
  const product = products[id] || {};
  
  function addToCart() {
    alert(`Add to cart clicked for product #${id}`);
    console.log(`Add to cart clicked for product #${id}`);
  }
  return (
    <ProductCard product={product} addToCart={addToCart}/>
  );
}