import { useEffect, useState } from "react";

import apiClient from "../../services/api-client";

interface Game {
    id: number,
    name: string
}

interface APIResponse {
    amount: number,
    results: Game[]
}

const GameGallery = () => {

    const [ games, setGames ] = useState<Game[]>([]);

    const [ error, setError ] = useState('');

    console.log(games)

    useEffect(() => {

        apiClient.get<APIResponse>('/games')
            .then(response => setGames(response.data.results))
            .catch(error => setError(error.message))
    }, [])

    return (
        <ul>
            { games.map((game, index) => (
                <li key={ index }>{ game.name }</li>
            )) }
        </ul>
    );
}

export default GameGallery;