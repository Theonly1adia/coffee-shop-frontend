import { useRouter } from 'next/router';
import products from '../../mocks/products.json';
import Button from '@/components/Button';

export default function ProductPage() {
  // For pages with dynamic routes, you can use the useRouter hook to get the route params
  const router = useRouter();
  const id  = router.query.id; // Get 'id' from the route params
  const product = products[id] || {};
  
  return (
    <div className="card glass w-96">
      <figure>
        <img
        src={product.imageUrl}
        alt={product.name}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}