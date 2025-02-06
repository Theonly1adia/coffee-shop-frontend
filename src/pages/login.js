import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError ] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(email, password) {
    alert("Login successful! " + email);

    const response = await fetch(
      "https://coffee-shop-backend-5fmn.onrender.com/api/v2" + "/users/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    console.log(data.token);

    if (data.token && data.user) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user))

        setError(false);
        router.push('/products');

    } else {
        setError(true);
        setErrorMessage(data.error);
    }
  };

  return (
    <div
    style={{
      backgroundImage: 'url(Splash-page.jpg)', // Path to your background image
      backgroundSize: 'cover',  // Ensures the image covers the whole container
      backgroundPosition: 'center', // Centers the image
      height: '100vh', // Make the background cover the whole viewport height
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
    }}
    >
      <Navbar />
      {error && (
        <div className="text-red-400 text-sm">
            Error: {errorMessage}
        </div>
      )}
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}
