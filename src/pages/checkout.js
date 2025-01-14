import React from "react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm"

export default function Checkout(){ 

    function handleCheckout(name, address, phone) {
        alert('Order Submitted! + name');
    }
    return(
        <div className="flex flex-col min-h-screen bg-purple-900 text-white">
            <NavBar />
            <main className="flex-grow">
            <h1 className="text-3xl font-bold text-center text-white-600 mb-6">Checkout Page</h1>
            <CheckoutForm handleCheckout={handleCheckout}/>
            </main>
            <Footer content= "Adia Holt @2025"/>
        </div>
    )
}