import { HStack, Image, Text } from "@chakra-ui/react";

import logo from '@assets/logo.svg';

const Navigation = () => {
    return (
        <HStack>
            <Text>Game</Text>
            <Image src={ logo } boxSize={'3rem'}/>
            <Text>Vault</Text>
        </HStack>
    );
}

export default Navigation;