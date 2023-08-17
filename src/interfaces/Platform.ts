/**
 * Represents a platform where a game can be played.
 */
export default interface Platform {

    // The unique identifier for the platform.
    id: number;

    // The name of the platform.
    name: string;

    // A slug representing the platform in URL-friendly format.
    slug: string;
}
