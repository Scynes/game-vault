import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import Game from '@interfaces/Game';

/**
 * Describes the expected properties for the GameCard component.
 */
interface Properties {
    // The game object containing information about the game.
    game: Game;
}

/**
 * A component that displays information about a game in a card format.
 *
 * @param {Properties} props - The properties containing the game information.
 * @returns {JSX.Element} - The JSX element representing the GameCard component.
 */
const GameCard = ({ game }: Properties) => {
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