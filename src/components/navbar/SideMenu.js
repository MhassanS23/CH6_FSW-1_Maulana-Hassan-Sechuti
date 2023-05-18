import React from 'react';
import {
    Button,
    Flex,
    Link,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
export default function SideMenu(props) {
    const { isOpen, onClose, btnRef, registerOnOpen } = props
    return (
      <>
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
                            <Button bg="greenBn" color="white" 
                            onClick={function(){
                                registerOnOpen();
                                onClose();
                            }}>Register</Button> 
                    </Flex>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
      </>
    )
  }