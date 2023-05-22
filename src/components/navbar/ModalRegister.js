import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text
} from '@chakra-ui/react';
import {signInWithGoogle} from '../../firebase.js';
// import { useAuthState } from "react-firebase-hooks/auth";
import {GoogleButton} from 'react-google-button';


export default function ModalRegister (props) {
    const { isOpen, onClose } = props;
    // const [user, loading, error] = useAuthState(auth);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text textAlign={'justify'}>BARU BISA YANG LOGIN GOOGLE BANG, DAH DAPET DATANYA CUMA BELUM DIBUAT PERGANTIAN NAVBARNYA BANG</Text>
                    </ModalBody>
  
                    <ModalFooter>
                        <GoogleButton onClick={signInWithGoogle}/>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}