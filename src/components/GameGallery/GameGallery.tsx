import { SimpleGrid } from "@chakra-ui/react";

import GameCard from "@components/GameCard";
import useGamesCollection from "@hooks/useGamesCollection";

const GameGallery = () => {

    const { collection } = useGamesCollection();

    return (
        <SimpleGrid columns={ { sm: 1, md: 2, lg: 3, xl: 4 } } padding={ '1.5rem' } spacing={ '2.25rem' }>
            { collection.map( (game) => (
                <GameCard game={ game } key={ game.id }/>
            )) }
        </SimpleGrid>
    );
}

export default GameGallery;