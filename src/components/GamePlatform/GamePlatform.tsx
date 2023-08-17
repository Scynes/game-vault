import { IconType } from 'react-icons';
import { BsXbox, BsPlaystation, BsNintendoSwitch, BsWindows, BsPhone, BsAndroid2, BsGlobe, BsApple } from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa';
import { HStack, Icon } from '@chakra-ui/react';

import Platform from "@interfaces/Platform";

/**
 * Interface representing the platforms where a game is available.
 *
 * @param {Properties} props - The properties containing the platforms information.
 */
interface Properties {

    // An array of platform objects containing information about the platforms.
    platforms: Platform[]
}

/**
 * A component that displays icons representing the platforms where a game is available.
 *
 * @param {Properties} props - The properties containing the platforms information.
 */
const GamePlatform = ({ platforms }: Properties) => {

    // Mapping of platform slugs to their corresponding icons.
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
        // A horizontal stack of platform icons.
        <HStack>
            { platforms.map((platform, index) => (
                <Icon as={ platformIcon[ platform.slug ] } key={ index } boxSize={ '1.5rem' } marginY={ '1rem' } color={ 'green.300' }/>
            )) }
        </HStack>
    );
}

export default GamePlatform;