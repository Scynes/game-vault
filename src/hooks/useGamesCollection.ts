import Game from "src/interfaces/Game";

import useAPICollection from "./useAPICollection"

/**
 * A custom React hook that fetches a collection of games using the collection API.
 *
 * @returns An array of Game objects representing the collection of games.
 */
export default () => useAPICollection<Game>('/games');