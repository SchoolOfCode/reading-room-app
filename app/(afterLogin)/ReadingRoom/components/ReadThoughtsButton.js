// DO NOT DELETE THIS FILE FOR THE LOVE OF GOD

import { useState } from 'react';
import {
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
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

  return (
    <>
      <Heading as="h3" fontSize={18} fontWeight="bold" style={{ color: 'black' }}>
        Done reading?
      </Heading>
      <Button onClick={handleOpen} colorScheme="blackAlpha" color="white">
        Fill out your thoughts...
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ color: 'black' }}>Fill out your thoughts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BookForm onClose={handleClose} color="black" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReadThoughtsButton;
