import React from 'react'
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
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
      <Box 
      w="100vw"
      position="fixed"
      zIndex="99"
      h="5rem"
      >
        <Box bg="limeGreen">
          <Container maxW="var(--chakra-sizes-container-xl)" py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
            <Link href='/'>
              <Text color="black" fontSize='1.5rem'>Sewo Mobil</Text>
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
                    <Button bg="greenBn" color="white">Register</Button>
                </Flex>
              ) : (
                <>
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                  ref={btnRef}
                  onClick={onOpen}
                />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay/>
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>BCR</DrawerHeader>

                    <DrawerBody>
                    <Flex gap="2rem" flexDirection="column">
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
                            <Button bg="greenBn" color="white">Register</Button>
                    </Flex>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
                </>
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }