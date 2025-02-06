import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ProductCard from "@/components/ProductCard";
import useAuth from "../../../../hooks/auth";

export default function AdminProduct() {
    const {token} =useAuth();
  return (
    <>
      <NavBar />
      <Footer content="@Adia 2025"/>
    </>
  );
}
