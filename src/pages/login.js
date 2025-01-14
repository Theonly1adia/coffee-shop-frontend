import LoginForm from "@/components/LoginForm";
import {useRouter} from "next/router";

export default function LoginPage() {
    const router = useRouter();

    function handleLogin() {
        alert("Login successful!")
    }

    return (
        <div>
            <LoginForm/>
        </div>
    )
}