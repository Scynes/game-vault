import { Badge } from "@chakra-ui/react";

interface Properties {
    score: number
}

/**
 * Represents a badge component displaying a game score with varying colors based on the score value.
 * 
 * @param {number} score - The game score value.
 */
const GameScore = ({ score }: Properties) => {

    /**
     * Determines the appropriate color for the badge based on the score.
     * 
     * @param {number} score - The game score value.
     * @param {boolean} background - Flag indicating if the background color is needed.
     * @returns {string} - The color value based on the score.
     */
    const ratingColor = (score: number, background: boolean): string => {

        switch (true) {

            case score < 50:
                return !background ? 'grey.600' : 'grey.300';

            case score >= 50 && score < 70:
                return !background ? 'blue.600' : 'blue.300';

            case score >= 70 && score <= 85:
                return !background ? 'yellow.600' : 'yellow.200';

            case score >= 85 && score <= 95:
                return !background ? 'purple.600' : 'purple.200';

            default:
                return !background ? 'orange.700' : 'orange.400';
        }
    }
    
    return (
        <Badge fontSize={ '1rem' } paddingX={ '0.6rem' } borderRadius={ 100 } bgColor={ ratingColor(score, true) } color={ ratingColor(score, false) }>
            { score }
        </Badge>
    );
}

export default GameScore;