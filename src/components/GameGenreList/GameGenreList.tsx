import { HStack, Image, List, ListItem, Skeleton as ChakraSkeleton, Text, SkeletonText, CardBody, Card, Skeleton } from "@chakra-ui/react";
import useGenresCollection from "@hooks/useGenresCollection";
import { getCroppedImageURL } from "@services/image";

const GameGenreList = () => {

    const { collection, isLoading } = useGenresCollection();

    const skeletons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

    return (
        <List spacing={ '0.5rem' }>
            { isLoading && skeletons.map(skeleton => (
                <ListItem key={ skeleton }>
                    <Card padding={ '1rem' }>
                        <ChakraSkeleton height={ 2 } />
                    </Card>
                </ListItem>
            )) }
            { !isLoading && collection.map(genre => (
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