import { Box } from "@chakra-ui/react"
import { ReactNode } from "react";

interface Properties {
    children: ReactNode;
}

/**
 * A reusable wrapper component that provides styling for its child components. It applies
 * a rounded border, enforces maximum width, and handles overflow, making it suitable for containing
 * various types of content.
 * 
 * @returns {JSX.Element} Container component with styled wrapper for child components.
 */
const Container = ({ children }: Properties) => {
    return (
        <Box borderRadius={ '1.5rem' } maxWidth={ '100%' } overflow={ 'hidden' } >
            { children }
        </Box>
    );
}

export default Container;