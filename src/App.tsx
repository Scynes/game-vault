import { Grid, GridItem, Show } from "@chakra-ui/react";

import GameGallery from "@components/GameGallery";
import GameGenre from "@components/GameGenreList";
import Navigation from "@components/Navigation";

const App = () => {
    return (
        <Grid templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}>
            <GridItem area={'nav'}>
                <Navigation />
            </GridItem>
            <Show above="lg">
                <GridItem area={'aside'}>
                    <GameGenre />
                </GridItem>
            </Show>
            <GridItem area={'main'}>
                <GameGallery />
            </GridItem>
        </Grid>
    );
}

export default App
