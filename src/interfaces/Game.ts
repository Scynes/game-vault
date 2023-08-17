import Platform from './Platform';

/**
 * Represents the structure of a game object.
 */
export default interface Game {

    // The unique identifier for the game.
    id: number,

    // The name of the game.
    name: string,

    // The URL to the background image of the game.
    background_image: string,

    // An array of parent platform objects where the game is available.
    // Each object contains information about the platform.
    parent_platforms: { platform: Platform } [],

    // The Metacritic score of the game, representing its overall review rating.
    metacritic: number
}