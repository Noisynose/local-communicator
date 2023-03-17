import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, Messages } from '.'
import { Divider, Flex } from '@chakra-ui/react'

const ChatRoom = () => (
  <>
  	<Flex w="100%" h="95vh" justify="center" align="center">
  	  <Flex w="60%" h="90%" flexDir="column">
        <Messages />
        <Divider />
        <TextInput />
      </Flex>
    </Flex>
  </>
);

ChatRoom.propTypes = {};

export default ChatRoom;
