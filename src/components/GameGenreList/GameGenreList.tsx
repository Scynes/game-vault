import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenresCollection from "@hooks/useGenresCollection";
import { getCroppedImageURL } from "@services/image";

const GameGenreList = () => {

    const { collection } = useGenresCollection();

    return (
        <List spacing={ '0.5rem' }>
            { collection.map(genre => (
                <ListItem key={ genre.id }>
                    <HStack>
                        <Image src={ getCroppedImageURL(genre.image_background) } boxSize={ '2.5rem' } borderRadius={ '0.5rem' }/>
                        <Text fontSize={ 'lg' }>{ genre.name === 'Massively Multiplayer' ? 'MMO' : genre.name }</Text>
                    </HStack>
                </ListItem>
            )) } 
        </List>
    );
}

export default GameGenreList;