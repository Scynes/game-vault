import { Box, HStack, Image, Text } from "@chakra-ui/react";

import logo from '@assets/logo.svg';
import ColorMode from "@components/Switches/ColorMode";

const Navigation = () => {
    return (
        <HStack padding={ '2rem' } justifyContent={ 'space-between' }>
            <HStack>
                <Text>GAME</Text>
                <Image src={ logo } boxSize={'3rem'}/>
                <Text>VAULT</Text>
            </HStack>
            <ColorMode />
        </HStack>
    );
}

export default Navigation;