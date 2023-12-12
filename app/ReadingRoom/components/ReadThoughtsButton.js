import { useState } from 'react';
import {
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
      <h3 style={{ color: 'black' }}>Done reading? Fill out your thoughts...</h3>
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
