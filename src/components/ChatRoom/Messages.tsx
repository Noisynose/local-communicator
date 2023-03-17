import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { Avatar, Text, Flex, Box, Tooltip } from '@chakra-ui/react'
import { useRoom } from "@/chat-rooms/useRoom";
import { format } from 'timeago.js';

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
)

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

const Message = () => {
  const { messages } = useRoom();

  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => (
        <Flex key={index} w="100%">
          <Avatar
            name="Computer"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            bg="blue.300"
          ></Avatar>
          <Box
            bg="gray.100"
            color="black"
            minW="100px"
            maxW="90%"
            my="1"
            p="3"
          >

              <Flex>
              <Text fontSize="lg" as="b">{item.author}</Text>
              <Tooltip label={`${item.time.toLocaleDateString()} ${item.time.toLocaleTimeString()}`}>
                <Text fontSize="xs" lineHeight="2.5" marginLeft="5px">{format(item.time)}</Text>
            </Tooltip>

              </Flex>
            <Text>{item.message}</Text>
          </Box>
        </Flex>
      ))}
  	 <AlwaysScrollToBottom />
	  </Flex>
  )
};

Message.propTypes = {};

export default Message;
