import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

import GamePlatform from '@components/GamePlatform';
import GameScore from '@components/GameScore/GameScore';

import Game from '@interfaces/Game';
import { getCroppedImageURL } from '@services/image';

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
        <Card h={ '100%' }>
            <Image src={ getCroppedImageURL(game.background_image) } />
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