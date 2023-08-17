import { SimpleGrid } from "@chakra-ui/react";

import GameCard from "@components/GameCard";
import useGamesCollection from "@hooks/useGamesCollection";

/**
 * Displays a grid of game cards in a gallery format.
 */
const GameGallery = () => {

    // Fetches a collection of games using a custom hook.
    const { collection } = useGamesCollection();

    return (
        // A grid layout that adjusts the number of columns based on screen size.
        <SimpleGrid columns={ { sm: 1, md: 2, lg: 3, xl: 4 } } padding={ '1.5rem' } spacing={ '2.25rem' }>
            { collection.map( (game) => (
                <GameCard game={ game } key={ game.id }/>
            )) }
        </SimpleGrid>
    );
}

export default GameGallery;