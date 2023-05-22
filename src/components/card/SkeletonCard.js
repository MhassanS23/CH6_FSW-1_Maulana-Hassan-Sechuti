import React from 'react';
import {
    Card,
    CardBody,
    Flex, 
    Skeleton, 
    Grid,
    Box
} from '@chakra-ui/react';


export default function SkeletonCard() {
    return (
        <Box width={{ base: '100%', md: '100%', lg: '78vw', xl:'85vw' }} mt={'2rem'}>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)', xl:'repeat(3, 1fr)' }} gap={'2rem'} width="100%">
                <Card height={{base:'100%', md:'100%', lg:'100%'}} width={'100%'} borderRadius={'0.5rem'} boxShadow={'md'}>
                    <Skeleton height={{base:'20rem', md:'20rem', lg:'15rem'}} width={'100%'} borderRadius={'0.5rem'}/>
                    <CardBody px={'2rem'}>
                        <Flex gap={4} flexDirection={'column'} height={'14rem'}>
                            <Skeleton height='20px' width='8rem'/>
                            <Skeleton height='20px' width='10rem'/>
                            <Skeleton height='30px' />
                            <Skeleton height='20px' width='8rem'/>
                            <Skeleton position={'absolute'} bottom={'1rem'} right={{base:'2rem', md:'2rem', lg:'3rem'}} left={{base:'1rem', md:'1.5rem', lg:'2.5rem'}} width={{base:'90%', md:'90%', lg:'80%'}}  px={'2rem'} py={{base:'2rem', md:'2rem', lg:'1.5rem'}} />
                        </Flex>
                    </CardBody>
                </Card>
                <Card height={{base:'100%', md:'100%', lg:'100%'}} width={'100%'} borderRadius={'0.5rem'} boxShadow={'md'}>
                    <Skeleton height={{base:'20rem', md:'20rem', lg:'15rem'}} width={'100%'} borderRadius={'0.5rem'}/>
                    <CardBody px={'2rem'}>
                        <Flex gap={4} flexDirection={'column'} height={'14rem'}>
                            <Skeleton height='20px' width='8rem'/>
                            <Skeleton height='20px' width='10rem'/>
                            <Skeleton height='30px' />
                            <Skeleton height='20px' width='8rem'/>
                            <Skeleton position={'absolute'} bottom={'1rem'} right={{base:'2rem', md:'2rem', lg:'3rem'}} left={{base:'1rem', md:'1.5rem', lg:'2.5rem'}} width={{base:'90%', md:'90%', lg:'80%'}}  px={'2rem'} py={{base:'2rem', md:'2rem', lg:'1.5rem'}} />
                        </Flex>
                    </CardBody>
                </Card>
                <Card height={{base:'100%', md:'100%', lg:'100%'}} width={'100%'} borderRadius={'0.5rem'} boxShadow={'md'}>
                    <Skeleton height={{base:'20rem', md:'20rem', lg:'15rem'}} width={'100%'} borderRadius={'0.5rem'}/>
                    <CardBody px={'2rem'}>
                        <Flex gap={4} flexDirection={'column'} height={'14rem'}>
                            <Skeleton height='20px' width='8rem'/>
                            <Skeleton height='20px' width='10rem'/>
                            <Skeleton height='30px' />
                            <Skeleton height='20px' width='8rem'/>
                            <Skeleton position={'absolute'} bottom={'1rem'} right={{base:'2rem', md:'2rem', lg:'3rem'}} left={{base:'1rem', md:'1.5rem', lg:'2.5rem'}} width={{base:'90%', md:'90%', lg:'80%'}}  px={'2rem'} py={{base:'2rem', md:'2rem', lg:'1.5rem'}} />
                        </Flex>
                    </CardBody>
                </Card>
            </Grid>
        </Box>
    );
}
