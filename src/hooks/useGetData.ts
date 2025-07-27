import { useEffect, useState } from "react";
import { log, logError } from "../utils/logger";

export const useGetData = <T>(apiUrl: string) => {
    const [isFetching, setIsFetching] = useState(false);
    const [apiResult, setApiResult] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const getDataFromAPI = () => {

        const controller = new AbortController();
        const { signal } = controller;

        setIsFetching(true);
        setError(null);

        log(`getting data from ${apiUrl}`)

        fetch(apiUrl, { signal })
            .then((response) => {
                if (!response.ok) throw new Error(`API Error: ${response.status}`);
                return response.json();
            })
            .then((data: T) => {
                setApiResult(data);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    logError(err);
                    setError(err);
                }
            })
            .finally(() => setIsFetching(false));

        return () => controller.abort();
    };

    useEffect(() => {
        const cleanup = getDataFromAPI();
        return cleanup;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiUrl]);

    return { isFetching, apiResult, error, refetch: getDataFromAPI };
};