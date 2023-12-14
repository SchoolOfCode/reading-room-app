import { Image, Box } from "@chakra-ui/react";

export default function Avatar({ avatar }) {
  return (

    <Box
      bg='#CAFFBF'
      display="flex"
      justifyContent="center"
      alignItems="center"
      border= "0"
    >
    <Image
      src={avatar}
      alt="User Avatar"
      boxSize={"200"}
      boxShadow={"dark-lg"}
      borderRadius={"full"}
      mt={"50px"}
    ></Image>
      
    </Box>

  );
}
