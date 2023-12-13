import { Image, Box } from "@chakra-ui/react";

export default function Avatar() {
  return (
    <Box
      bg='#CAFFBF'
      display="flex"
      justifyContent="center"
      alignItems="center"
      border= "0"
    >
      <Image
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        boxSize="200px"
        boxShadow="dark-lg"
        mt="50px"
        borderRadius="full"
      />
    </Box>
  );
}
