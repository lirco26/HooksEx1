import React, {useState} from 'react';
import 'regenerator-runtime/runtime.js';

/**
 *
 * @param url
 * @param method
 *
 * return state { result = text / json, error, isLoading, execute = resend the request}
 */
function useFetch(url, method) {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState('false');

    const execute = async function () {
        setIsLoading('true');
        try {
            const response = await fetch(url, {method});
            const data = await response.text();
            if (!response.ok) {
                const errorMessage = `${response.status.toString()} ${response.statusText} - ${data}`;
                setResult(null);
                setError(errorMessage);
                setIsLoading('false');
            } else {
                setResult(data);
                setError(null);
                setIsLoading('false');
            }
        } catch (error) {
            setResult(null);
            setError(error.message);
            setIsLoading('false');
        }
    };

    return [result, error, isLoading, execute];
}

// POC

export default function ShowServerResponse({url, method}) {
    const [result, error, isLoading, execute] = useFetch(url, method);

    return <div>
        <h2> sending {method} method to URL: {url}</h2>

        <div className="response">
            <span>Result: {result}</span>
            <span>Error: {error}</span>
            <span>Is loading: {isLoading}</span>

            <button onClick={execute}>send request</button>
        </div>
    </div>
}