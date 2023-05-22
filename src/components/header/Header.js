import React from 'react';
import {
    Box,
    Text,
    Heading,
    Image,
    Flex,
    Grid,
    Button,
    Link,
} from '@chakra-ui/react';




import carImage from '../../asset/img_car.png';


export default function Headers({buttonSewa}) {

    return (
        <>
            {/* HEADER */}
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} 
                transform="auto" 
                translateY={{ base: '4rem', md: '4rem', lg: '5rem' }} 
                bg={'limeGreen'} 
                height={'fit-content'}>
                <Box
                    alignSelf={'center'}
                    justifySelf={'center'}
                    pl={{ base: '1rem', md: '5rem', lg: '6rem' }}
                    pr={{ base: '1rem', md: '2rem', lg: '2rem' }}
                >
                    <Heading pt={{base:'1rem', md:'1rem', lg:'0rem'}} lineHeight={'150%'} size={'lg'} width={'100%'}>Sewa dan Rental Mobil Terbaik di Kawasan (Lokasimu)</Heading>
                    <Text lineHeight={'20px'} textAlign={'justify'} mb={'1rem'} mt={'1rem'} pr={'2rem'}>Selamat datang di Binar Car Rental. Kami Menyediakan mobil berkualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</Text>
    
                    {buttonSewa ? (
                        <></>
                    ):(
                        <Link href='/search'>
                            <Button bg="greenBn" color="white" mb={'1rem'}>Mulai Sewa Mobil</Button>
                        </Link> 
                    )}
                </Box>
                <Flex justifyContent={'flex-end'}>
                    <Image src={carImage} width={{ base: '95%', md: '90%', lg: '100%' }} height={'100%'}
                        pt={{base:'2rem', md: '2rem', lg: '0rem'}}
                    />
                </Flex>
            </Grid>
        </>
    );
}
