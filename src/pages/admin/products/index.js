import { useState, useEffect } from "react";  
import { useRouter } from 'next/router';
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { saveCartToLocalStorage, loadCartFromLocalStorage } from "../../../../utils";
import useAuth from "../../../../hooks/auth";
import { useAuthFetch } from "../../../../hooks/api";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;
  console.log(category);

  const { token } = useAuth();
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

  async function deleteProduct(product) {
    console.log("delete", product)
    try{
        const response = await fetch (`${BACKEND_URL}/products/${productId}`,{
            method: "DELETE",
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

        if(!response.ok){
            throw new Error("Failed to delete product");
        }

        const data= await response.json();
        console.log(data);

        //Updates product list after deletion
        setUrl(`${BACKEND_URL}/products`);
        } catch(error) {
        console.log("Error deleting product", error);
    }
  }

  const productsJSX = products.map((product) => (
    <ProductCard
      key={product._id}
      product={product}
      buttonLabel="Delete"
      addToCart={() => deleteProduct(product._id)}
    />
  ));
  
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-center my-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {
        productFetchError ? (
          <div className="text-red-400 text-lg">
            Error fetching products.
          </div>
        ) : ""
      }
<div className="flex justify-evenly my-4">
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
