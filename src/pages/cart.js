import {useState, useEffect} from "react";
import ProductCard from "@/components/ProductCard";
import cart from "@/mocks/cart.json";
import Button from "@/components/Button";
import { saveCartToLocalStorage, loadCartFromLocalStorage} from '../../utils';

export default function Cart() {
    const [cartContents, setCartContents] = useState([]);

    useEffect(() => {
      const cartData = loadCartFromLocalStorage();
      setCartContents(cartData);
    }, []);

    function removefromCart(productName) {
      const updatedCartContents = cartContents.filter(
        (item) => item.name !==productName
      );

      setCartContents(updatedCartContents);
      saveCartToLocalStorage(updatedCartContents);
            alert("Removed " + productName)
        }

    const cartJSX = cartContents.map((product) => (
        <ProductCard
            key={product._id}
            product={product}
            buttonLabel="Remove from Cart"
            addToCart={() => removefromCart(product.name)}

        />
    ));
    return(
    <div>
      <h1 className="text-4xl font-bold text-center my-6">Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {cartJSX}
      </div> 
      <Button label="Checkout" className="btn btn-primary text-center" handleClick={() => alert("Continue to checkout.")}/>
    </div>
  );
}