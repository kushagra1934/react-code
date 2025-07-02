import { useEffect } from "react";
import { useState } from "react";
// const API_URL = "https://jsonplaceholder.typicode.com/users";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsPending(true);
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
          return;
        }
        setError(error.message);
        setIsPending(false);
      }
    //   finally{
    //     setIsPending(false);
    //   }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data: data, isPending: isPending, error: error };
}

export default useFetch;
