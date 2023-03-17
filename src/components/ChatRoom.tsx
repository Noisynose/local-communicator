import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, Messages } from '.'
import { Box, Card, CardHeader, CardBody, CardFooter, Divider, Text, Flex, Input, Button, Avatar, AvatarBadge } from '@chakra-ui/react'

const ChatRoom = () => (
  <>
  	<Flex w="100%" h="95vh" justify="center" align="center">
  	  <Flex w="40%" h="90%" flexDir="column">
        <Messages />
        <Divider />
        <TextInput />
  	</Flex>
	</Flex>

  </>
);

ChatRoom.propTypes = {};

export default ChatRoom;
