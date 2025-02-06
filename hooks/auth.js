import { useState, useEffect } from "react";

export default function useAuth(){
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

   
    const t= localStorage.getItem("token");
    setToken(t);
    const u =localStorage.getItem("user");

    if (t) {
        setIsAuthenticated(true)
    }
    if(u) {
        setUser(JSON.parse(u));
    }

}, []);

    return { user, token, isAuthenticated}
}