import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { Text, Flex, Box, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { useRoom } from "@/chat-rooms/useRoom";
import { format } from 'timeago.js';
import { UserAvatar } from '.';
import { useAuthentication } from '@/authentication/AuthenticationProvider';

/*
const MessageFromMe = ({ message }) => (
  <Flex w="100%" justify="flex-end">
      <Flex
        bg="black"
        color="white"
        minW="100px"
        maxW="350px"
        my="1"
        p="3"
      >
      <Text>{message.text}</Text>
      </Flex>
  </Flex>
)*/

const AlwaysScrollToBottom = () => {
  const elementRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView()
    }
  });
  return <div ref={elementRef} />;
};


const Message = () => {
  const { messages } = useRoom()
  const { username } = useAuthentication()

  const bg = useColorModeValue('blue.100', 'blue.900')
  const color = useColorModeValue('black', 'gray.100')


  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => (
        <Flex key={index} w="100%" justify={item.writtenBy(username) ? 'end' : 'initial'}>
          {!item.writtenBy(username) && <UserAvatar name={item.author}/>}
          <Box
            bg={bg}
            color={color}
            minW="100px"
            maxW="90%"
            my="1"
            p="3"
            borderRadius="3px"
          >
            <Flex>
              <Text fontSize="lg" as="b">{item.author}</Text>
              <Tooltip label={`${item.time.toLocaleDateString()} ${item.time.toLocaleTimeString()}`}>
                <Text fontSize="xs" lineHeight="2.5" marginLeft="5px">{format(item.time)}</Text>
              </Tooltip>
            </Flex>
            <Text>{item.message}</Text>
          </Box>
          {item.writtenBy(username) && <UserAvatar name={item.author}/>}
        </Flex>
      ))}
  	 <AlwaysScrollToBottom />
	  </Flex>
  )
};

Message.propTypes = {};

export default Message;
