import React from 'react';
import {
  CardBody,
  Card,
  Text,
  Flex,
  Select,
  Box,
  FormLabel,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import Navbar from "./components/navbar/Navbar.js"
import Footers from "./components/footer/Footer.js"
import Headers from "./components/header/Header.js"


function SearchPages() {

  return (
    <>
      <Navbar/>
      <Headers buttonSewa = {true}/>

      {/* FILTER CARS */}
      <Box px={{base:"1rem", md:"1rem", lg:"6rem"}}>
        <Card align='center' mt={{base:"2rem", md:"2rem", lg:"3rem", xl:"1rem"}} width={"100%"} boxShadow={"lg"}>
            <CardBody width={"100%"}>
              <Flex gap={4} flexDirection={{base:"column", md:"column", lg:"row"}}>
                <Box width={"100%"}>
                  <FormLabel>Tipe Driver</FormLabel>
                  <Select placeholder='Pilih Tipe Driver' required>
                    <option value='option1'>Dengan Sopir</option>
                    <option value='option2'>Tanpa Sopir (Lepas Kunci)</option>
                  </Select>
                </Box>

                <Box width={"100%"}>
                  <FormLabel>Tanggal</FormLabel>
                  <Input
                    placeholder="Select Date"
                    size="md"
                    type="date"
                  />
                </Box>

                <Box width={"100%"}>
                  <FormLabel>Waktu Jemput/Ambil</FormLabel>
                  <Input
                    placeholder="Select Time"
                    size="md"
                    type="time"
                  />
                </Box>
                
                <Box width={"100%"}>
                  <FormLabel>Jumlah Penumpang (Optional)</FormLabel>
                  <NumberInput defaultValue={0} max={10} min={0}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>

                <Button width={{base:"100%", md:"100%", lg:"40%"}} bg="greenBn" color="white" type="submit" alignSelf={"flex-end"} mb={"0rem"} >Cari Mobil</Button>
              </Flex>
            </CardBody>
        </Card>
      </Box>

      <Footers/>
    </>
  );
}

export default SearchPages;
