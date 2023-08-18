import { SimpleGrid } from "@chakra-ui/react";

import GameCard from "@components/GameCard";
import Container from "@components/GameCard/Container";
import Skeleton from "@components/GameCard/Skeleton";
import useGamesCollection from "@hooks/useGamesCollection";

/**
 * Displays a grid of game cards in a gallery format.
 */
const GameGallery = () => {

    // Fetches a collection of games using a custom hook.
    const { collection, isLoading } = useGamesCollection();

    // Temp solution: represents the number of skeletons to render.
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        // A grid layout that adjusts the number of columns based on screen size.
        <SimpleGrid columns={ { sm: 1, md: 2, lg: 3, xl: 4 } } padding={ '1.5rem' } spacing={ '2.25rem' }>
            { isLoading && skeletons.map(skeleton => (
                <Container key={ skeleton }>
                    <Skeleton />
                </Container>
            ))}
            { collection.map( (game) => (
                <Container key={ game.id }>
                    <GameCard game={ game }/>
                </Container>
            )) }
        </SimpleGrid>
    );
}

export default GameGallery;