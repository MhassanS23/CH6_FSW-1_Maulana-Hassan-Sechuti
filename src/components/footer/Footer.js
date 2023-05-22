import React from 'react';
import {
    Box,
    Text,
    Heading,
    Image,
    Flex,
    List,
    ListItem,
    Link,
} from '@chakra-ui/react';




import facebook from '../../asset/icon_facebook.png';
import instagram from '../../asset/icon_instagram.png';
import twitter from '../../asset/icon_twitter.png';
import mail from '../../asset/icon_mail.png';
import twitch from '../../asset/icon_twitch.png';


export default function Footers() {

    return (
        <>
            {/* FOOTER */}
            <Flex flexDirection={{base:'column', md:'column', lg:'row'}} gap={{base:'3rem', md:'3rem', lg:'2rem'}} height={'100%'} py={'6rem'} px={{base:'1rem', md:'1rem', lg:'6rem'}}>
                <Box width={'100%'}>
                    <Text size={'md'} mb={3}>Jl Suroyo No.161 Mayangan Kota Probolinggo 672000</Text>
                    <Text size={'md'} mb={3}>binarcarrental@gmail.com</Text>
                    <Text size={'md'} mb={3}>081-233-334-456</Text>
                </Box>

                <List spacing={6} width={'100%'}>
                    <ListItem>
                        <Link href='#ourservice'>
                            <Heading size={'sm'}>Our Service</Heading>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#whyus'>
                            <Heading size={'sm'}>Why Us</Heading>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#testimonial'>
                            <Heading size={'sm'}>Testimonial</Heading>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#faq'>
                            <Heading size={'sm'}>FAQ</Heading>
                        </Link>
                    </ListItem>
                </List>

                <Box width={'100%'}>
                    <Text mb={4}>Connect with us</Text>
                    <List>
                        <Flex gap={4}>
                            <ListItem>
                                <Link href='https://www.facebook.com'>
                                    <Image width={'100%'} height={'100%'}  src={facebook}/>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='https://www.instagram.com'>
                                    <Image width={'100%'} height={'100%'}  src={instagram}/>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='https://www.twitter.com'>
                                    <Image width={'100%'} height={'100%'}  src={twitter}/>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='https://www.gmail.com'>
                                    <Image width={'100%'} height={'100%'}  src={mail}/>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href='#'>
                                    <Image width={'100%'} height={'100%'} src={twitch}/>
                                </Link>
                            </ListItem>
                        </Flex>
                    </List>
                </Box>

                <Box width={'100%'}>
                    <Text mb={4}>Copyright Binar 2022</Text>
                    <Link href='/'>
                        <Heading size={'md'}>Sewo Mobil</Heading>
                    </Link>
                </Box>

            </Flex>
        </>
    );
}
