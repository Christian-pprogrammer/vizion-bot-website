import React, { ElementType, HtmlHTMLAttributes } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  HStack,
  IconButton,
  Button,
  Input,
  Image,
  Flex,
  Heading,
  Grid,
  GridItem,
  VStack,
  HtmlProp
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaArrowRight,
} from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import Logo from "../../assets/images/logo-transparent.png"
import Gicon from "../../assets/images/googleplay.png"
import Aicon from "../../assets/images/appstore.png"

const Footer = () => {
  const bgColor = '#1a202c'; // Dark professional background
  const accentColor = '#0079A5'; // Professional blue
  const textColor = '#e2e8f0';
//   const mutedTextColor = '#a0aec0';
const mutedTextColor = "#fff"

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaYoutube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    'About Us',
    'Contact Us',
    'Support',
    'Our Products',
  ];

  const products = [
    'Walking stick',
    'Walking stick with AI'
  ];

  const legalLinks = [
    'Terms & conditions',
    'Privacy policy'
  ];

  return (
    <Box as="footer" bg={bgColor} color={textColor} position="relative">
      {/* Main Footer Content */}
      <Container px={'0px'} maxW="6xl" py={12}>
        <Grid 
          templateColumns={{ 
            base: '1fr', 
            md: 'repeat(2, 1fr)', 
            lg: 'repeat(4, 1fr)' 
          }} 
          gap={8}
        >
          
          {/* Company Info & Logo */}
          <GridItem colSpan={{ base: 1, lg: 1 }}>
            <VStack align="flex-start" style={{ gap: '24px' }}>
              {/* Logo */}
              <HStack style={{ gap: '12px' }}>
                <Image
                  src={Logo}
                  alt="Vizion Bot Logo"
                  w={36}
                  h={10}
                  borderRadius="lg"
                />
              </HStack>
              
                          {/* Newsletter Subscription */}
                          <VStack align="flex-start" style={{ gap: '12px' }} width="full">
                <Heading size="md" color="#a0aec0" fontWeight="600">
                  Subscribe
                </Heading>
                <Text fontSize="base" color={'#fff'} lineHeight="1.4">
                  Be the first to know about our stick updates and news
                </Text>
                
                <Box width="full" position="relative">
                  <Input
                    placeholder="Enter your email"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    color="white"
                    size="md"
                    pr="80px"
                    _placeholder={{ color: 'gray.400' }}
                    _focus={{ 
                      borderColor: accentColor,
                      boxShadow: `0 0 0 1px ${accentColor}`
                    }}
                    borderRadius="full"
                  />
                  <Button
                    position="absolute"
                    right="0px"
                    top="50%"
                    transform="translateY(-50%)"
                    bg={'transparent'}
                    color="white"
                    size="md"
                    _hover={{ 
                      bg: '#2c5aa0'
                    }}
                    borderRadius="base"
                    borderEndRadius={"full"}
                    px={3}
                  >
                   <IoMdArrowForward />
                  </Button>
                </Box>
              </VStack>

                {/* App Store Buttons */}
                <VStack align="flex-start" style={{ gap: '12px', marginTop: '16px',marginBottom: '26px' }}>
                <Text fontSize="base" fontWeight="600" color="#fff">
                  Download Our App
                </Text>
                
                <VStack style={{ gap: '12px', flexDirection: 'row' }} width="full">
                  <Link href="#" _hover={{ textDecoration: 'none' }}>
                    <Image
                      src={Gicon}
                      alt="Get it on Google Play"
                      height="40px"
                      _hover={{ 
                        transform: 'scale(1.05)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </Link>
                  
                  <Link href="#" _hover={{ textDecoration: 'none' }}>
                    <Image
                      src={Aicon}
                      alt="Download on the App Store"
                      height="40px"
                      _hover={{ 
                        transform: 'scale(1.05)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </Link>
                </VStack>
              </VStack>
              
              {/* Social Media */}
              <VStack align="flex-start" style={{ gap: '12px' }}>
                {/* <Text fontSize="base" fontWeight="600" color="white">
                  Follow Us
                </Text> */}
                <HStack style={{ gap: '12px' }}>
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <IconButton
                      key={label}
                      as="a"
                      aria-label={label}
                      size="xl"
                      bg="whiteAlpha.100"
                      color="white"
                      _hover={{ 
                        bg: accentColor,
                        transform: 'translateY(-2px)',
                        transition: 'all 0.3s ease'
                      }}
                      borderRadius="full"
                    >
                        <Icon />
                        </IconButton>
                  ))}
                </HStack>
              </VStack>
            </VStack>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <VStack align="flex-start" style={{ gap: '20px' }}>
              <Heading size="md" color="#a0aec0" fontWeight="600">
                Quick Links
              </Heading>
              <VStack align="flex-start" style={{ gap: '12px' }}>
                {quickLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    fontSize="base"
                    color={mutedTextColor}
                    _hover={{ 
                      color: accentColor,
                      textDecoration: 'none',
                      transform: 'translateX(5px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </VStack>
              
            </VStack>
          </GridItem>

          {/* Products */}
          <GridItem>
            <VStack align="flex-start" style={{ gap: '20px' }}>
              <Heading size="md" color="#a0aec0" fontWeight="600">
                Our Products
              </Heading>
              
              <VStack align="flex-start" style={{ gap: '12px' }}>
                {products.map((product) => (
                  <Link
                    key={product}
                    href="#"
                    fontSize="base"
                    color={mutedTextColor}
                    _hover={{ 
                      color: accentColor,
                      textDecoration: 'none',
                      transform: 'translateX(5px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {product}
                  </Link>
                ))}
              </VStack>
            
            </VStack>
          </GridItem>

          {/* Location & Newsletter */}
          <GridItem>
            <VStack align="flex-start" style={{ gap: '20px' }}>
              <Heading size="md" color="#a0aec0" fontWeight="600">
                Our Location
              </Heading>
              
              {/* Embedded Map */}
              <Box
                width="full"
                height="200px"
                borderRadius="md"
                overflow="hidden"
                border="1px solid"
                borderColor="whiteAlpha.200"
              >
<iframe
 src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1915.8832890291208!2d30.159927499507326!3d-1.9408532851549025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d-1.9410961!2d30.1612773!4m3!3m2!1d-1.9409292999999999!2d30.161224999999998!5e1!3m2!1sen!2srw!4v1754321257216!5m2!1sen!2srw"
 width="100%"
 height="200" style={{ border: 0 }} allowFullScreen loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
                  title="Vizion Bot Location"
></iframe>
              </Box>
              
            </VStack>
          </GridItem>
        </Grid>
      </Container>

      {/* Bottom Footer */}
      <Box bg="blackAlpha.400" borderTop="1px" borderColor="whiteAlpha.200">
        <Container maxW="6xl" py={4}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="center"
            gap={2}
            justifyContent={'space-between'} flexWrap={'wrap'} w={'100%'}
          >
            <Text fontSize="base" color={mutedTextColor} textAlign="center">
              © {new Date().getFullYear()} Vizion Bot Ltd. All Rights Reserved.
            </Text>

<Flex>
<Link
                    href="#"
                    fontSize="base"
                    color={mutedTextColor}
                    _hover={{ 
                      color: accentColor,
                      textDecoration: 'none',
                      transform: 'translateX(5px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                   Terms & Condition
                  </Link>
</Flex>

          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;