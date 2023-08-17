import { SimpleGrid } from "@chakra-ui/react";

import GameCard from "@components/GameCard";
import useGamesCollection from "@hooks/useGamesCollection";

const GameGallery = () => {

    const { collection } = useGamesCollection();

    return (
        <SimpleGrid columns={ 3 } spacing={ '1rem' }>
            { collection.map( (game) => (
                <GameCard game={ game } key={ game.id }/>
            )) }
        </SimpleGrid>
    );
}

export default GameGallery;