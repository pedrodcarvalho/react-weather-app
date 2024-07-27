import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                const response = await axios.get(url, { ...options, cancelToken: source.token });
                const airQuality = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=${process.env.REACT_APP_API_KEY}`);
                response.data.airQuality = airQuality.data.list[0].main.aqi;

                setData(response.data);
                setError(null);
                setLoading(false);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled: ', err.message);
                } else {
                    setError(err);
                    setLoading(false);
                }
            }
        };

        if (url) {
            fetchData();
        }

        return () => {
            source.cancel('Operation canceled by the user.');
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
