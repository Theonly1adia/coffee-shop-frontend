import { useState, useEffect } from "react";

export function useFetch(url, initialState) {
  const [data, setData] = useState(initialState);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          console.log("fetch failed with " + response.status);
          setFetchError(true);
        } else {
          const productData = await response.json();
          setData(productData);
        }
      } catch (error) {
        console.log(error);
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return [fetchError, loading, data];
}

export function useAuthFetch(url, initialState, token) {
  const [data, setData] = useState(initialState);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!token) {
          console.log("no token provided");
          return;
        }
        setLoading(true);
        const response = await fetch("https://coffee-shop-backend-5fmn.onrender.com/api/v1/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          console.log("fetch failed with " + response.status);
          setFetchError(true);
        } else {
          const productData = await response.json();
          setData(productData);
        }
      } catch (error) {
        console.log(error);
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, token]);

  return [fetchError, loading, data];
}
