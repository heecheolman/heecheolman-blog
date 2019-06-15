import React from 'react';
import './index.scss';

import ProfileIcon from './../../assets/svg/doodle-face.svg';

export const Avatar = ({ size, src }) => {
  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <ProfileIcon style={avatarStyle}/>
  );
}
