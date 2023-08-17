import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import Game from '@interfaces/Game';

const GameCard = (game : Game) => {
    return (
        <Card>
            <Image src={ game.background_image } />
            <CardBody>
                <Heading>{ game.name }</Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;