import { Card, CardBody, Skeleton as ChakraSkeleton, SkeletonText } from "@chakra-ui/react";

import Container from '@components/GameCard/Container';

/**
 * This component displays a skeleton loading state for a game card. It's typically used to provide
 * visual feedback to users while content is being loaded. The skeleton mimics the appearance of a
 * game card, including a placeholder image and text.
 * 
 * @returns {JSX.Element} Skeleton loading state for a game card.
 */
const Skeleton = () => {
    return (
        <Container>
            <Card >
                <ChakraSkeleton width={'800px'} height={ '16rem' } />
                <CardBody>
                    <SkeletonText />
                </CardBody>
            </Card>
        </Container>
    )
}

export default Skeleton;