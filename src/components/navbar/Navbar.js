import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Text,
    Link,
    useDisclosure,
} from '@chakra-ui/react';
import ModalRegister from './ModalRegister.js';
import SideMenu from './SideMenu.js';

import { FiMenu } from 'react-icons/fi';
  
export default function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const btnRef = React.useRef();
    const isDesktop = useBreakpointValue({ base: false, lg: true });

    const {
        isOpen: registerIsOpen,
        onOpen: registerOnOpen,
        onClose: registerOnClose,
    } = useDisclosure();

    const {
        isOpen: sidemenuIsOpen,
        onOpen: sidemenuOnOpen,
        onClose: sidemenuOnClose,
    } = useDisclosure();

    const changeNav = () => {
        window.scrollY >= 30 ? setNavActive(true) : setNavActive(false);
    };

    useEffect(()=> {
        window.addEventListener('scroll', changeNav);

        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    },[]);

    return (
        <Box 
            w="100vw"
            position="fixed"
            zIndex="99"
            h="5rem"
            bg={navActive ? 'darkBlue' : 'limeGreen'}
            color = {navActive ? 'white' : 'black'}
        >
            <Box >
                <Container maxW="var(--chakra-sizes-container-xl)" py={{ base: '4', lg: '5' }}>
                    <HStack spacing="10" justify="space-between">
                        <Link href='/'>
                            <Text fontSize='1.5rem'>Sewo Mobil</Text>
                        </Link>
                        {isDesktop ? (
                            <Flex gap="2rem" justifyContent="flex-end" alignItems="center">
                                <ButtonGroup variant="link" spacing="8">
                                    <Link href='#ourservice'>
                        Our Service
                                    </Link>
                                    <Link href='#whyus'>
                        Why Us
                                    </Link>
                                    <Link href='#testimonial'>
                        Testimonial
                                    </Link>
                                    <Link href='#faq'>
                        FAQ
                                    </Link>
                                </ButtonGroup>
                                <Button bg="greenBn" color="white" onClick={registerOnOpen}>Register</Button>
                            </Flex>
                        ) : (
                            <>
                                <IconButton
                                    variant="ghost"
                                    icon={<FiMenu fontSize="1.25rem" />}
                                    aria-label="Open Menu"
                                    ref={btnRef}
                                    onClick={sidemenuOnOpen}
                                />
                            </>
                        )}
                    </HStack>
                </Container>
            </Box>

            <ModalRegister
                isOpen={registerIsOpen}
                onClose={registerOnClose}
            />
            <SideMenu
                isOpen={sidemenuIsOpen}
                onClose={sidemenuOnClose}
                btnRef = {btnRef}
                registerOnOpen = {registerOnOpen}
            />
        </Box>

      
    );
}