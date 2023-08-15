import { useState, useEffect } from "react";

import apiClient from '@services/api-client'
import { CanceledError } from "axios";

interface Game {
    id: number,
    name: string
}

interface APIResponse {
    amount: number,
    results: Game[]
}

export default () => {

    const [ games, setGames ] = useState<Game[]>([]);
    const [ error, setError ] = useState('');

    useEffect(() => {

        const controller = new AbortController();

        apiClient
            .get<APIResponse>('/games', { signal: controller.signal })
            .then(response => setGames(response.data.results))
            .catch(error =>  (!(error instanceof CanceledError) && setError(error.message)))

        return () => controller.abort();
    }, []);

    return { games, error };
}