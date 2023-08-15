import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
    return (
        <Grid templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}>
            <GridItem area={'nav'} bg={'coral'}>
                Navigation
            </GridItem>
            <Show above="lg">
                <GridItem area={'aside'} bg={'crimson'}>
                    Aside
                </GridItem>
            </Show>
            <GridItem area={'main'} bg={'green'}>
                Main
            </GridItem>
        </Grid>
    );
}

export default App
