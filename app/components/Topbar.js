import { Avatar, AvatarBadge, Box, Container, Flex, Icon, Image, VStack } from '@chakra-ui/react';

export default function Topbar() {
  return (
    <Container bg="#DDD9D1" position="fixed" top="0" minWidth="100%" minHeight="10%">
      <Flex justifyContent="space-between" alignItems="center">
        <VStack spacing={2}>
          <Box>
            <Image src="RaadingRoomLogo.png" alt="Logo" height="50px" />
          </Box>
        </VStack>
        <Box>
          <Avatar src="MrTickle.png">
            <AvatarBadge>
              <Icon></Icon>
            </AvatarBadge>
          </Avatar>
        </Box>
      </Flex>
    </Container>
  );
}
