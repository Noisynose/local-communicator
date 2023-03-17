import PropTypes from 'prop-types';
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from '@chakra-ui/react'
import { useAuthentication } from '@/authentication/AuthenticationProvider';


type UserValidationProps = {
  isOpen: boolean,
  onClose: () => void
}

const UserValidation = ({ isOpen, onClose }: UserValidationProps) => {
  const { username, rename } = useAuthentication();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connected as :</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input onChange={(event) => rename(event.target.value)} value={username} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

UserValidation.propTypes = {};

export default UserValidation;
