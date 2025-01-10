import products from "../../mocks/products.json";
import React from "react";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
    return (
      <div>
        
        <div>
      <NavBar />
      <h1 className="text-4xl font-bold">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            /* onAddToCart={handleAddToCart} */
          />
        ))}
      </div>
    </div>
        

      </div>
    );
  }