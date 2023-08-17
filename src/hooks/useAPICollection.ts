import { useState, useEffect } from "react";

import { CanceledError } from "axios";

import apiClient from '@services/api-client';

/**
 * Represents the structure of a generic API response containing an amount and an array of results.
 *
 * @template T The type of data items in the results array.
 */
interface APIResponse<T> {
    // The number of items in the response
    amount: number;
    // An array of data items returned by the API.
    results: T[];
}

/**
 * A custom hook for fetching a collection of data from a given API endpoint.
 *
 * @template T The type of data items in the collection.
 * @param {string} endpoint The API endpoint to fetch data from.
 * @returns {{ collection: T[], error: string }} An object containing the fetched collection of data
 *                                               and an error message if the fetch encounters an issue.
 */
export default <T>(endpoint: string) => {

    const [ collection, setCollection ] = useState<T[]>([]);
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {

        const controller = new AbortController();

        apiClient
            .get<APIResponse<T>>(endpoint, { signal: controller.signal })
            .then(response => setCollection(response.data.results))
            .catch(error => (!(error instanceof CanceledError) && setError(error.message)))
            .finally(() => setIsLoading(false));

        return () => controller.abort();
    }, []);

    return { collection, error, isLoading };
}