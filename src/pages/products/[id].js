import { useRouter } from 'next/router';
import products from '../../mocks/products.json';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  // For pages with dynamic routes, you can use the useRouter hook to get the route params
  const router = useRouter();
  const {id}  = router.query; // Get 'id' from the route params
  const [product, setProduct] = useState({});

  async function fetchProduct(id) {
    console.log("fetching the product");
    const result = await fetch ("https://coffee-shop-backend-5fmn.onrender.com/api/v1/products/67886f4cbe506d91093fa91c")
    const product = await result.json();
    setProduct(product);
  }

  useEffect(() =>{
    console.log("hello from use effect with [id]" + id)
    fetchProduct(id);
  }, [id]
  );
   
  function addToCart() {
    alert(`Add to cart clicked for product #${id}`);
    console.log(`Add to cart clicked for product #${id}`);
  }
  return (
    <ProductCard product={product} addToCart={addToCart}/>
  );
}