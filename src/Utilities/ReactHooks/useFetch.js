import { useState, useEffect } from "react";

const useFetch = (url, method, body = null, headers = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (!data) {
      fetchData();
    }
  }, [url, method, body, headers]);

  return { data, error, loading };
};

export default useFetch;
