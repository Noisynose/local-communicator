import PropTypes from 'prop-types';
import React from 'react';
import { AvatarGenerator } from 'random-avatar-generator';
import { Avatar } from '@chakra-ui/react';

const generator = new AvatarGenerator();
type UserAvatarProps = {
  name: string
}

const UserAvatar = ({ name }: UserAvatarProps) => {

  return (
    <Avatar
      name="Computer"
      src={generator.generateRandomAvatar(name)}
      bg="blue.300"
    ></Avatar>
  )
}

UserAvatar.propTypes = {};

export default UserAvatar;
