import { Card, CardBody, Skeleton as ChakraSkeleton, SkeletonText } from "@chakra-ui/react";

const Skeleton = () => {
    return (
        <Card>
            <ChakraSkeleton height={ '20rem' } />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default Skeleton;