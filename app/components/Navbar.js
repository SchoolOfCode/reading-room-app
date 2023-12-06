'use client';
import { Container } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BiSolidHomeHeart } from "react-icons/bi";



export default function Navbar() {
  return(
   <Container>
    <Icon as={BiSolidHomeHeart}></Icon>
    <Icon></Icon>
    <Icon></Icon>
  </Container>)
}
