import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/NavBar";
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
    <div>
      <NavBar />
      {error && (
        <div className="text-red-400 text-sm">
            Error: {errorMessage}
        </div>
      )}
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}
