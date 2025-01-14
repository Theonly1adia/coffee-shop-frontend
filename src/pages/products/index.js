import {useState, useEffect} from "react";
//import product from "../../mocks/products.json";
import React from "react";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import { saveCartToLocalStorage, loadCartFromLocalStorage} from '../../../utils';


export default function ProductsPage() {

  const [products, setProducts] = useState([]);
  const [cartContents, setCartContents] = useState([]);

  useEffect(() => {

    const cartData = loadCartFromLocalStorage();

     setCartContents(cartData);
     setProducts(product);

  }, []);

  function addProductToCart(product) {
  const newCartContents = [ ...cartContents, product];
  setCartContents(newCartContents);

  saveCartToLocalStorage(newCartContents);


 }
  const productsJSX = products.map((product) => {
   
    function addToCart() {
      alert("clicked add to cart" + product.name);
      addProductToCart(product);
    }
   
    return (<ProductCard
      key={product.id}
      product={product}
      buttonLabel={"Add to Cart"}
      addToCart={() => addToCart(product)} // Pass product to addToCart
    />)
  });

    return (
    <div>
      <NavBar />
      <h1 className="text-4xl font-bold text-center my-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {productsJSX}
      </div>
    </div>
  );
}