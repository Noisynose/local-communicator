import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { Avatar, Text, Flex } from '@chakra-ui/react'
import { useRoom } from "../chat-rooms/useRoom";

const MessageFromMe = ({message}) => (
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
          <Flex
            bg="gray.100"
            color="black"
            minW="100px"
            maxW="350px"
            my="1"
            p="3"
          >
            <Text><pre>{JSON.stringify(item, null, 2)}</pre></Text>
          </Flex>
        </Flex>
      ))}
  	 <AlwaysScrollToBottom />
	  </Flex>
  )
};

Message.propTypes = {};

export default Message;
