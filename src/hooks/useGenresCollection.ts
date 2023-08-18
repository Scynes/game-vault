import Genre from "src/interfaces/Genre";

import useAPICollection from "./useAPICollection"

/**
 * A custom React hook that fetches a collection of game genres using the collection API.
 *
 * @returns An array of Genre objects representing game genres.
 */
export default () => useAPICollection<Genre>('/genres');