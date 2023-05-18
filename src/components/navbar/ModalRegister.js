import React from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { auth, signInWithGoogle, logout } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import {GoogleButton} from "react-google-button";


export default function ModalRegister (props) {
    const { isOpen, onClose } = props;
    const [user, loading, error] = useAuthState(auth);

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              HHIAHIHIA
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <GoogleButton onClick={signInWithGoogle}/>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }