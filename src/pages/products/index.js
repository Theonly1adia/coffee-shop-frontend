import {useState, useEffect} from "react";
import data from "../../mocks/products.json";
import React from "react";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data)
  }, []);

  const productsJSX = products.map((product) => {
   
    function addToCart() {
      alert("clicked add to cart" + product.name);
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