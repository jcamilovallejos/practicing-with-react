import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = useCallback(async () => {
        setLoading(true);
        try{
            const res = await fetch(url);
            if(!res.ok){
                throw new Error("HTTP error! status: ${response.status}");
            }
            const data = await res.json();
            setData(data);
        }
        catch(error){
            setError(error.message);
        }
        finally{
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { data, error, loading };
}