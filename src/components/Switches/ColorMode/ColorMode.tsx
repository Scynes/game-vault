import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorMode = () => {

    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack>
            <Switch onChange={ toggleColorMode } isChecked={ colorMode === 'dark' } />
            <Text>Dark Mode</Text>
        </HStack>
    );
}

export default ColorMode;