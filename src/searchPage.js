import React, {useEffect, useState} from 'react';
import {
    CardBody,
    Card,
    Heading,
    Flex,
    Grid,
    Select,
    Box,
    FormLabel,
    Input,
    Button,
    GridItem,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

import { useDispatch, useSelector} from 'react-redux';
import { filteredDataCars } from './features/car/carsSlice.js';

import Navbar from './components/navbar/Navbar.js';
import Footers from './components/footer/Footer.js';
import Headers from './components/header/Header.js';
import SearchCard from './components/card/SearchCard.js';
import SkeletonCard from './components/card/SkeletonCard.js';


function SearchPages() {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const carsData = useSelector(state => state.cars.filterCars);
    const dispatch = useDispatch();

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    const formik = useFormik({
        initialValues: {
            driver: '',
            tanggal: '',
            waktu: '',
            penumpang: '',
        },
        onSubmit: (values) => {
            const datetime = new Date(`${values.tanggal} ${values.waktu}`);
            if(values.driver === 'true'  && values.penumpang !='' && values.tanggal != ''){
                return dispatch(filteredDataCars(data.filter((cars)=>
                    cars.available === true && cars.capacity >= values.penumpang && cars.availableAt <= datetime
                )));
            }else if(values.driver === 'false'  && values.penumpang !='' && values.tanggal != ''){
                return dispatch(filteredDataCars(data.filter((cars)=>
                    cars.available === false && cars.capacity >= values.penumpang && cars.availableAt <= datetime
                )));
            }
        }
    });
    useEffect(()=>{
        const editDate = (params) => {
            return params.map((car) => {
                const isPositive = getRandomInt(0, 1) === 1;
                const timeAt = new Date();
                const mutator = getRandomInt(1000000, 100000000);
                const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));
  
                return {
                    ...car,
                    availableAt,
                };
            });
        };

        fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
            .then(response => response.json())
            .then(res => {
                setData(editDate(res));
                dispatch(filteredDataCars(res));
            });

        setTimeout(()=>{
            setIsloading(false);
        }, 1500);

    },[dispatch]);


    return (
        <>
            <Navbar/>
            <Headers buttonSewa = {true}/>
            {/* FILTER CARS */}
            <Box px={{base:'1rem', md:'1rem', lg:'6rem'}}>
                <Card align='center' mt={{base:'2rem', md:'2rem', lg:'3rem', xl:'1rem'}} width={'100%'} boxShadow={'lg'}>
                    <CardBody width={'100%'}>
                        <form onSubmit={formik.handleSubmit}>
                            <Flex gap={4} flexDirection={{base:'column', md:'column', lg:'row'}}>
                                <Box width={'100%'}>
                                    <FormLabel>Tipe Driver</FormLabel>
                                    <Select 
                                        placeholder='Pilih Tipe Driver' 
                                        name="driver"  
                                        onChange={formik.handleChange}
                                        value={formik.values.driver}
                                        required>
                                        <option value='true'>Dengan Sopir</option>
                                        <option value='false'>Tanpa Sopir (Lepas Kunci)</option>
                                    </Select>
                                </Box>

                                <Box width={'100%'}>
                                    <FormLabel>Tanggal</FormLabel>
                                    <Input
                                        placeholder="Select Date"
                                        size="md"
                                        type="date"
                                        name="tanggal"  
                                        onChange={formik.handleChange}
                                        value={formik.values.tanggal}
                                        required
                                    />
                                </Box>

                                <Box width={'100%'}>
                                    <FormLabel>Waktu Jemput/Ambil</FormLabel>
                                    <Input
                                        placeholder="Select Time"
                                        size="md"
                                        type="time"
                                        name="waktu"  
                                        onChange={formik.handleChange}
                                        value={formik.values.waktu}
                                        required
                                    />
                                </Box>
                
                                <Box width={'100%'}>
                                    <FormLabel>Jumlah Penumpang (Optional)</FormLabel>
                                    <Input
                                        size="md"
                                        type="number"
                                        name="penumpang"  
                                        min={'1'}
                                        max={'7'}
                                        onChange={formik.handleChange}
                                        value={formik.values.penumpang}
                                        required
                                    />
                                </Box>
                                <Button width={{base:'100%', md:'100%', lg:'40%'}} bg="greenBn" color="white" type="submit" alignSelf={'flex-end'} mb={'0rem'} >Cari Mobil</Button>
                            </Flex>
                        </form>
                    </CardBody>
                </Card>
            </Box>

            {/* CARD FILTER RESULT */}
            <Box width={'100%'} px={{base:'1rem', md:'6rem', lg:'6rem'}} mt={'2rem'}>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)', xl:'repeat(3, 1fr)' }} gap={'2rem'}>
                    {isLoading ? (
                        <SkeletonCard/>
                    ) : (carsData.length > 0 ? (carsData.map(car => {
                        return <SearchCard key={car.id} cars={car} />;
                    })) 
                        :(
                            <>
                                <GridItem colSpan={3} >
                                    <Heading size={'md'} textAlign="center" width={'100%'} > HASIL PENCARIAN TIDAK DITEMUKAN :) </Heading>
                                </GridItem>
                            </>
                        ))
                    }

                </Grid>
            </Box>

            <Footers/>
        </>
    );
}

export default SearchPages;
