import useAPICollection from "./useAPICollection"

interface Game {
    id: number,
    name: string
}

export default () => useAPICollection<Game>('/games');