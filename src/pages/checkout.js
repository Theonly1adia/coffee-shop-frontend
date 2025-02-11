import React from "react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm"

export default function Checkout(){ 

    function handleCheckout(event) {
        alert('Order Submitted!');
    }
    return(
        <div>
            <NavBar/>
            <h1>Checkout Page</h1>
            <CheckoutForm handleCheckout={handleCheckout}/>
            <Footer content= "Adia Holt @2025"/>
        </div>
    )
}