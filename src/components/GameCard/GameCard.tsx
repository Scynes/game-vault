import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import GamePlatform from '@components/GamePlatform';
import GameScore from '@components/GameScore/GameScore';
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
        <Card borderRadius={ '1.5rem' } overflow={ 'hidden' }>
            <Image src={ game.background_image } />
            <CardBody>
                <Heading fontSize={ '2xl' }>{ game.name }</Heading>
                <HStack justifyContent={ 'space-between' }>
                    <GamePlatform platforms={ game.parent_platforms.map(p => p.platform) } />
                    <GameScore score={ game.metacritic } />
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;