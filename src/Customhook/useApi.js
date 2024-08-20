import { useState, useEffect } from 'react';

function useApi(url, method = 'GET', body = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; 
    async function fetchData() {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
      };

      try {
        const response = await fetch(url, options);
        console.log("response" ,response);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        console.log("result" ,result);

        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, body]);

  return { data, loading, error };
}

export default useApi;


