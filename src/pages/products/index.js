import { useState, useEffect } from "react";
import productData from "../../mocks/products.json";
import { useRouter } from 'next/router';
import React from "react";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import { saveCartToLocalStorage, loadCartFromLocalStorage } from '../../../utils';
import useAuth from "../../../hooks/auth";
import { useAuthFetch } from "../../../hooks/api";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);

  const { token, isAuthenticated } = useAuth();
  console.log(token);

  /* const [products, setProducts] = useState([]); */
  const [cartContents, setCartContents] = useState([]);

  const [url, setUrl] =useState(`${BACKEND_URL}/products`);
  const [productFetchError, productsLoading, products] = useAuthFetch(url, [], token );

  

  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
    setCartContents(cartData);
    /* setProducts(productData); // Set initial product data */
  }, []);

  /* useEffect(() => {
    if (category) {
      const filteredProductData = productData.filter((product) => {
        return product.category === category;
      });
      setProducts(filteredProductData);
    } else {
      setProducts(productData); // Reset to all products when no category is selected
    }
  }, [category]); // Dependency array includes `category` */

  function addProductToCart(product) {
    const newCartContents = [...cartContents, product];
    setCartContents(newCartContents);
    saveCartToLocalStorage(newCartContents);
  }

  const productsJSX = products.map((product) => {
    function addToCart() {
      alert("Clicked add to cart: " + product.name);
      addProductToCart(product);
    }

    return (
      <ProductCard
        key={product.id}
        product={product}
        buttonLabel={"Add to Cart"}
        addToCart={addToCart}
      />
    );
  });

  return (
    <div>
      <NavBar />
      <h1 className="text-4xl font-bold text-center my-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {
        productFetchError ? (
          <div className="text-red-400 text-lg">
            Error fetching products.
          </div>
        ) : ""
      }
<div className="flex justify-evenly">
        <span onClick={() => setUrl(`${BACKEND_URL}/products?category=beverages`)}>
          Beverages
        </span>
        <span onClick={() => setUrl(`${BACKEND_URL}/products?category=merchandise`)}>
          Merchandise
        </span>
        <span onClick={() => setUrl(`${BACKEND_URL}/products?category=books`)}>
          Books
        </span>
      </div>
      {
        productsLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {
              productsJSX
            }
          </div>
        )
      }
      </div>
    </div>
  );
}
