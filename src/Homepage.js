import React, { useState, useEffect } from 'react';
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {
  Box,
  Text,
  Center,
  Card, 
  CardBody,
  Heading,
  Image,
  Flex,
  Grid,
  Button,
  List,
  ListItem,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from '@chakra-ui/react'

import Navbar from "./components/navbar/Navbar.js";
import Footers from "./components/footer/Footer.js";
import Headers from "./components/header/Header.js";
import gambarAvatar from "./asset/img_photo.png";
import photo from "./asset/avatar.png";
import ourService from "./asset/img_service.png";
import rating from "./asset/Star 1.png";
import check from "./asset/Group 53.png";
import complete from "./asset/icon_complete.png";
import price from "./asset/icon_price.png";
import hours from "./asset/icon_24hrs.png";
import profesional from "./asset/icon_professional.png";

// import axios from 'axios';

function Homepages() {
  // const [post, setPost] = useState([]);

  // useEffect(()=>{
  //   // fetch('https://jsonplaceholder.typicode.com/posts')
  //   // .then((response)=> response.json())
  //   // .then((data)=> console.log(data))
  //   // .catch((err)=> console.log(err))

  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then((response)=>console.log(response))
  // },[])


  return (
    <>
      <Navbar />
      <Headers/>
      {/* OUR SERVICE */}
      <Grid id='ourservice' gap={"2rem"} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} pt={"10rem"} px={{base:"1.5rem",md:"3rem",lg:"6rem"}}>
        <Box alignSelf={"center"} justifySelf={"center"}>
          <Image src={ourService} width={{base:"18rem", md:"20rem", lg:"100%"}}/>
        </Box>
        <Box alignSelf={"center"} justifySelf={"center"}>
          <Heading mb={6}>Best Car Rental for any kind of trip in (Lokasimu)!</Heading>
          <Text mb={4} textAlign={"justify"}>Sewa mobil di (lokasimu) bersama binar car rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta pelayanan yang terbaik untuk perjalan wisata, bisni, wedding, dll.</Text>
          <List spacing={3}>
            <ListItem>
              <Flex gap={4}>
                <Image src={check}/>
                Sewa mobil dengan supir di Bali 12 jam
              </Flex>
            </ListItem>
            <ListItem>
              <Flex gap={4}>
                <Image src={check}/>
                Sewa mobil lepas kunci di Bali 12 jam
              </Flex>
            </ListItem>
            <ListItem>
              <Flex gap={4}>
                <Image src={check}/>
                Sewa mobil jangka panjang bulanan
              </Flex>
            </ListItem>
            <ListItem>
              <Flex gap={4}>
                <Image src={check}/>
                gratis antar jemput mobi di bandara
              </Flex>
            </ListItem>
          </List>
        </Box>
      </Grid>

      {/* WHYUS */}
      <Flex flexDirection={"column"} px={{base:'1rem',md:'1rem',lg:'6rem'}} 
        justifyContent={{base:'center',md:'center',lg:'flex-start'}}
        alignItems={{base:'center',md:'center',lg:'flex-start'}}
        pt={"10rem"}
        id='whyus'
      >
        <Heading mb={3}>Why Us</Heading>
        <Text mb={3}>Mengapa harus Pilih Binar Car Rental</Text>
        <SimpleGrid spacing={4} templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(4,1fr)'}}>
          <Card boxShadow='lg' rounded='md'>
            <CardBody alignSelf={"center"}>
              <Image src={complete} mb={"0.8rem"}/>
              <Heading size={"sm"} mb={"0.8rem"}>Mobil Lengkap</Heading>
              <Text>Tersedia banyak pilhan mobil, kodisi masih baru, bersih, dan terawa</Text>
            </CardBody>
          </Card>
          <Card boxShadow='lg' rounded='md'>
            <CardBody alignSelf={"center"}>
              <Image src={price} mb={"0.8rem"}/>
              <Heading size={"sm"} mb={"0.8rem"}>Harga Murah</Heading>
              <Text>Harga murah dan bersaing. Bisa bandingkan harga kami dengan rental mobol lain</Text>
            </CardBody>
          </Card>
          <Card boxShadow='lg' rounded='md'>
            <CardBody alignSelf={"center"}>
              <Image src={hours} mb={"0.8rem"}/>
              <Heading size={"sm"} mb={"0.8rem"}>Layanan 24 Jam</Heading>
              <Text>Siap melayani kebutuhan anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.</Text>
            </CardBody>
          </Card>
          <Card boxShadow='lg' rounded='md'>
            <CardBody alignSelf={"center"}>
              <Image src={profesional} mb={"0.8rem"}/>
              <Heading size={"sm"} mb={"0.8rem"}>Sopir Profesional</Heading>
              <Text>Sopir yang profesional berpengalaman, jujur, ramah, dan selalu tepat waktu</Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>

      {/* TESTIMONIAL */}
      <Flex
      flexDirection={"column"}
      alignItems={"center"} 
      justifyContent={"center"}
      mb={4}
      pt={"10rem"}
      id='testimonial'
      >
        <Box 
        width={{ base: '90%', md: '90%', lg: '100%' }}
        >
          <Center>
          <Heading size='lg' mb={4} mt={6}> Testimonials</Heading>
          </Center>
          <Center>
            <Text mb={3}>Berbagai review positif dari pelanggan kami</Text>
          </Center>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation = {true}
            initialSlide = {1}
            modules={[Navigation]}
            breakpoints={{
              769: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 30,
              }
            }}
          >
          <div className='swiper-wrapper' id='mySwiper'>
            <SwiperSlide>
              <Card align='center' bg="grey" p={"1rem"} borderRadius={"1rem"}>
                <CardBody>
                <Flex 
                gap={8} 
                flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
                alignItems={"center"} 
                justifyContent={"center"}
                >
                  <Image
                      src={photo}
                      boxSize='80px'
                      objectFit='cover'
                    />
                  <Flex
                  flexDirection={"column"}
                  alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }} 
                  justifyContent={"center"}
                  >
                    <Flex mb={2}>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    </Flex>
                    <Text 
                    mb={2} 
                    textAlign={{ base: 'center', md: 'center', lg: 'start'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus vero voluptate, sit officia necessitatibus ratione provident minima tenetur debitis. Hic quisquam illo et animi debitis rerum ipsam accusamus impedit.</Text>
                    <Heading size={"sm"}>John Dee 32, Bromo</Heading>
                  </Flex>
                </Flex>
                </CardBody>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card align='center' bg="grey" p={"1rem"} borderRadius={"1rem"}>
                <CardBody>
                <Flex 
                gap={8} 
                flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
                alignItems={"center"} 
                justifyContent={"center"}
                >
                  <Image
                      src={gambarAvatar}
                      boxSize='80px'
                      objectFit='cover'
                    />
                  <Flex
                  flexDirection={"column"}
                  alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }} 
                  justifyContent={"center"}
                  >
                    <Flex mb={2}>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    </Flex>
                    <Text 
                    mb={2} 
                    textAlign={{ base: 'center', md: 'center', lg: 'start'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus vero voluptate, sit officia necessitatibus ratione provident minima tenetur debitis. Hic quisquam illo et animi debitis rerum ipsam accusamus impedit.</Text>
                    <Heading size={"sm"}>John Dee 32, Bromo</Heading>
                  </Flex>
                </Flex>
                </CardBody>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card align='center' bg="grey" p={"1rem"} borderRadius={"1rem"}>
                <CardBody>
                <Flex 
                gap={8} 
                flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
                alignItems={"center"} 
                justifyContent={"center"}
                >
                  <Image
                      src={photo}
                      boxSize='80px'
                      objectFit='cover'
                    />
                  <Flex
                  flexDirection={"column"}
                  alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }} 
                  justifyContent={"center"}
                  >
                    <Flex mb={2}>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    </Flex>
                    <Text 
                    mb={2} 
                    textAlign={{ base: 'center', md: 'center', lg: 'start'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus vero voluptate, sit officia necessitatibus ratione provident minima tenetur debitis. Hic quisquam illo et animi debitis rerum ipsam accusamus impedit.</Text>
                    <Heading size={"sm"}>John Dee 32, Bromo</Heading>
                  </Flex>
                </Flex>
                </CardBody>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card align='center' bg="grey" p={"1rem"} borderRadius={"1rem"}>
                <CardBody>
                <Flex 
                gap={8} 
                flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
                alignItems={"center"} 
                justifyContent={"center"}
                >
                  <Image
                      src={gambarAvatar}
                      boxSize='80px'
                      objectFit='cover'
                    />
                  <Flex
                  flexDirection={"column"}
                  alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }} 
                  justifyContent={"center"}
                  >
                    <Flex mb={2}>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    </Flex>
                    <Text 
                    mb={2} 
                    textAlign={{ base: 'center', md: 'center', lg: 'start'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus vero voluptate, sit officia necessitatibus ratione provident minima tenetur debitis. Hic quisquam illo et animi debitis rerum ipsam accusamus impedit.</Text>
                    <Heading size={"sm"}>John Dee 32, Bromo</Heading>
                  </Flex>
                </Flex>
                </CardBody>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card align='center' bg="grey" p={"1rem"} borderRadius={"1rem"}>
                <CardBody>
                <Flex 
                gap={8} 
                flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
                alignItems={"center"} 
                justifyContent={"center"}
                >
                  <Image
                      src={photo}
                      boxSize='80px'
                      objectFit='cover'
                    />
                  <Flex
                  flexDirection={"column"}
                  alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }} 
                  justifyContent={"center"}
                  >
                    <Flex mb={2}>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    </Flex>
                    <Text 
                    mb={2} 
                    textAlign={{ base: 'center', md: 'center', lg: 'start'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus vero voluptate, sit officia necessitatibus ratione provident minima tenetur debitis. Hic quisquam illo et animi debitis rerum ipsam accusamus impedit.</Text>
                    <Heading size={"sm"}>John Dee 32, Bromo</Heading>
                  </Flex>
                </Flex>
                </CardBody>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card align='center' bg="grey" p={"1rem"} borderRadius={"1rem"}>
                <CardBody>
                <Flex 
                gap={8} 
                flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
                alignItems={"center"} 
                justifyContent={"center"}
                >
                  <Image
                      src={gambarAvatar}
                      boxSize='80px'
                      objectFit='cover'
                    />
                  <Flex
                  flexDirection={"column"}
                  alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }} 
                  justifyContent={"center"}
                  >
                    <Flex mb={2}>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    </Flex>
                    <Text 
                    mb={2} 
                    textAlign={{ base: 'center', md: 'center', lg: 'start'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus vero voluptate, sit officia necessitatibus ratione provident minima tenetur debitis. Hic quisquam illo et animi debitis rerum ipsam accusamus impedit.</Text>
                    <Heading size={"sm"}>John Dee 32, Bromo</Heading>
                  </Flex>
                </Flex>
                </CardBody>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card align='center' bg="grey" p={"1rem"} borderRadius={"1rem"}>
                <CardBody>
                <Flex 
                gap={8} 
                flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
                alignItems={"center"} 
                justifyContent={"center"}
                >
                  <Image
                      src={photo}
                      boxSize='80px'
                      objectFit='cover'
                    />
                  <Flex
                  flexDirection={"column"}
                  alignItems={{ base: 'center', md: 'center', lg: 'flex-start' }} 
                  justifyContent={"center"}
                  >
                    <Flex mb={2}>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    <Image src={rating}/>
                    </Flex>
                    <Text 
                    mb={2} 
                    textAlign={{ base: 'center', md: 'center', lg: 'start'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus vero voluptate, sit officia necessitatibus ratione provident minima tenetur debitis. Hic quisquam illo et animi debitis rerum ipsam accusamus impedit.</Text>
                    <Heading size={"sm"}>John Dee 32, Bromo</Heading>
                  </Flex>
                </Flex>
                </CardBody>
              </Card>
            </SwiperSlide>
            </div>
              {/* <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div> */}
          </Swiper>
        </Box>
      </Flex>

      {/* BANNER */}
      <Flex justifyContent={"center"} alignItems={"center"} pt={"10rem"}>
        <Card boxShadow='md' rounded='md' bg={"darkblue"} width={"80%"} px={{base:"2rem", md:"2rem",lg:"6rem"}} py={"3rem"} borderRadius={"1rem"} textAlign={"center"}>
          <CardBody color={"white"}>
            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Heading size={"lg"} mb={"0.8rem"}>Sewa Mobil di (Lokasimu) Sekarang</Heading>
              <Text
                px={{base:"0rem", md:"0rem",lg:"3rem"}}
                my={"3rem"}
                textAlign={"center"}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat excepturi inventore esse vitae! Quas debitis aspernatur quo recusandae ipsam fuga nemo illo. Velit illo tenetur laudantium beatae aperiam! Animi?</Text>
              <Link href='/search'>
                <Button bg="greenBn" color="white" mb={"1rem"}>Mulai Sewa Mobil</Button>
              </Link>
            </Flex>
          </CardBody>
        </Card>
      </Flex>

      {/* FAQ */}
      <Grid 
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} 
      pt={{base:"4rem", md:"4rem",lg:"10rem"}} 
      px={{base:"2rem", md:"2rem",lg:"6rem"}}
      id='faq'
      >
      
        <Box textAlign={{base:"center", md:"center",lg:"start"}}>
          <Heading size={"lg"} mb={3}>Frequently Asked Question</Heading> 
          <Text mb={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Text>
        </Box>
        
        <Box>
        <Accordion allowToggle>
          <AccordionItem mb={4}>
            <h2>
              <AccordionButton borderRadius={"0.5rem"} border='1px solid black' py={"0.8rem"}>
                <Box as="span" flex='1' textAlign='left'>
                  Apa Saja Syarat yang Dibutuhkan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} borderRadius={"0.3rem"} border='1px solid black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb={4}>
            <h2>
              <AccordionButton borderRadius={"0.5rem"} border='1px solid black' py={"0.8rem"}>
                <Box as="span" flex='1' textAlign='left'>
                  Berapa Hari Minimal Sewa Mobil Lepas Kunci?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} borderRadius={"0.3rem"} border='1px solid black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mb={4}>
            <h2>
              <AccordionButton borderRadius={"0.5rem"} border='1px solid black' py={"0.8rem"}>
                <Box as="span" flex='1' textAlign='left'>
                  Berapa Hari Sebelumnya Sebaiknya Booking Sewa Mobil?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} borderRadius={"0.3rem"} border='1px solid black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mb={4}>
            <h2>
              <AccordionButton borderRadius={"0.5rem"} border='1px solid black' py={"0.8rem"}>
                <Box as="span" flex='1' textAlign='left'>
                  Apakah Ada Biaya Antar Jemput?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} borderRadius={"0.3rem"} border='1px solid black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem mb={4}>
            <h2>
              <AccordionButton borderRadius={"0.5rem"} border='1px solid black' py={"0.8rem"}>
                <Box as="span" flex='1' textAlign='left'>
                  Bagaimana Jika Terjadi Kecelakaan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} borderRadius={"0.3rem"} border='1px solid black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        </Box>
      </Grid>

      <Footers />
    </>
  );
}

export default Homepages;
