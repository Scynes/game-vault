import { IconType } from 'react-icons';
import { BsXbox, BsPlaystation, BsNintendoSwitch, BsWindows, BsPhone, BsAndroid2, BsGlobe, BsApple } from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa';
import { HStack, Icon } from '@chakra-ui/react';

import Platform from "@interfaces/Platform";

interface Properties {
    platforms: Platform[]
}

const GamePlatform = ({ platforms }: Properties) => {

    const platformIcon: { [key: string]: IconType } = {
        xbox: BsXbox,
        playstation: BsPlaystation,
        nintendo: BsNintendoSwitch,
        pc: BsWindows,
        mac: BsApple,
        linux: FaLinux,
        web: BsGlobe,
        ios: BsPhone,
        android: BsAndroid2
    }

    return (
        <HStack>
            { platforms.map((platform, index) => (
                <Icon as={ platformIcon[ platform.slug ] } key={ index } boxSize={ '1.5rem' } marginY={ '1rem' } color={ 'green.300' }/>
            )) }
        </HStack>
    );
}

export default GamePlatform;