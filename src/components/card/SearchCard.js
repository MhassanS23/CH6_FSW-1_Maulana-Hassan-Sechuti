import React from 'react';
import {
    Card,
    CardBody,
    Button,
    Text,
    Image,
    Heading,
    Flex
} from '@chakra-ui/react';

import { BsFillPeopleFill, BsFillGearFill, BsFillCalendarFill } from 'react-icons/bs';


export default function SearchCard({cars}) {
    return (
        <>
            <Card key={cars.id} height={{base:'100%', md:'100%', lg:'42rem'}} width={'100%'} borderRadius={'0.5rem'} boxShadow={'md'}>
                <Image src={cars.image} height={{base:'20rem', md:'20rem', lg:'15rem'}} width={'100%'} borderRadius={'0.5rem'}/>
                <CardBody px={'2rem'}>
                    <Heading size={'sm'} mb={'0.5rem'}>{cars.manufacture} / {cars.model}</Heading>
                    <Heading size={'md'} mb={'1rem'}>{cars.rentPerDay} / Hari</Heading>
                    <Text mb={'1rem'}>{cars.description}</Text>
                    <Flex gap={4} flexDirection={'column'} height={'14rem'}>
                        <Flex gap={3} alignItems={'center'}>
                            <BsFillPeopleFill size={'1.5rem'}/>
                            <Text>{cars.capacity}  Orang</Text>
                        </Flex>
                
                        <Flex gap={3} alignItems={'center'}>
                            <BsFillGearFill size={'1.5rem'}/>
                            <Text>{cars.transmission}</Text>
                        </Flex>

                        <Flex gap={3} alignItems={'center'}>
                            <BsFillCalendarFill size={'1.5rem'}/>
                            <Text>Tahun {cars.year}</Text>
                        </Flex>
                        <Button position={'absolute'} bottom={'1rem'} right={{base:'2rem', md:'2rem', lg:'3rem'}} left={{base:'1rem', md:'1.5rem', lg:'2.5rem'}} width={{base:'90%', md:'90%', lg:'80%'}} bg="greenBn" color="white" px={'2rem'} py={{base:'2rem', md:'2rem', lg:'1.5rem'}}>Pilih Mobil</Button>
                    </Flex>
                </CardBody>
            </Card>
        </>
    );
}
