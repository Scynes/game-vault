import { List, ListItem } from "@chakra-ui/react";
import useGenresCollection from "@hooks/useGenresCollection";

const GameGenreList = () => {

    const { collection } = useGenresCollection();

    return (
        <List>
            { collection.map(genre => (
                <ListItem key={ genre.id }>
                    { genre.name }
                </ListItem>
            )) } 
        </List>
    );
}

export default GameGenreList;