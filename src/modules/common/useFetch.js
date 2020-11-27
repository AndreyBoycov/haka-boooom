import {useEffect, useState} from "react";
import http from "./HttpAdapter";

function isHttpError(err) {
    return !err || err.errorCode !== undefined;
}

export const useFetch = (url, method = 'GET', options, initData) => {
    const [data, setData] = useState(initData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect((): (() => void) => {
        let cancel = false;

        const fetchData = async (): Promise => {
            setError(null);
            setIsLoading(true);

            try {
                const { response } = await http({ url, method, ...options });

                if (!cancel) setData(response);
            } catch (err) {
                if (!cancel && isHttpError(err.response)) setError(err.response);
            }

            !cancel && setIsLoading(false);
        };

        fetchData();

        return (): void => {
            cancel = true;
        };
    }, [url]);

    return { data, isLoading, error };
}