import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import { Flex,Input,Button  } from '@chakra-ui/react'
import { useRoom } from '../chat-rooms/useRoom';

const TextInput = ({}) => {
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const { send } = useRoom();

  const handleSendMessage = useCallback(() => {
    send(currentMessage)
    setCurrentMessage('')
  }, [currentMessage]);

  return (
  <>
    <Flex w="100%" mt="5">
      <Input
        placeholder="Type Something..."
        border="none"
        borderRadius="none"
        _focus={{ border: "1px solid black" }}
        value={currentMessage}
        onChange={(event) => setCurrentMessage(event.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
      />
  	<Button
    	bg="black"
    	color="white"
    	borderRadius="none"
    	_hover={{
      	bg: "white",
      	color: "black",
      	border: "1px solid black",
    	}}
      onClick={handleSendMessage}
  	>Send</Button>
	</Flex>
  </>
);
};

TextInput.propTypes = {};

export default TextInput;
