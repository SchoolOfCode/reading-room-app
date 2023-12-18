// DO NOT DELETE THIS FILE FOR THE LOVE OF GOD

import { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import BookForm from './BookForm';

const ReadThoughtsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <h3 style={{ color: 'black' }}>Done reading? Fill out your thoughts...</h3>
      <Button onClick={handleOpen} colorScheme="blackAlpha" color="white">
        Fill out your thoughts...
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent
          bg="#FFBF72"
          maxW={['auto', '75vh']}
          maxH={['auto', '150vh']}
          borderRadius={10}
          justifyContent="center"
          alignContent="center"
          p={2}
          paddingBottom={isMobile ? 5 : 0}
          border="1px solid #747474"
          boxShadow="rgb(44, 62, 80) 0px -15px 15px -15px, rgb(44, 62, 80) 0px 15px 15px -15px;"
          ml={isMobile ? 2 : 0}
          mr={isMobile ? 2 : 0}
        >
          <ModalCloseButton />
          <BookForm onClose={handleClose} color="black" />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReadThoughtsButton;
