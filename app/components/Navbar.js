'use client';
import { Container } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaBookOpen } from 'react-icons/fa';
import { BiSolidHomeHeart } from "react-icons/bi";
import { FaSmile } from "react-icons/fa";
import { Link } from '@chakra-ui/next-js';




export default function Navbar() {
  return(
   <Container>
  <Link href='/WelcomePage'>
    <Icon as={BiSolidHomeHeart} ></Icon></Link>
    <Link href='/ReadingRoom'><Icon as={FaBookOpen}></Icon></Link>
  <Link href='#'><Icon as={FaSmile} ></Icon></Link>
  </Container>)
}
