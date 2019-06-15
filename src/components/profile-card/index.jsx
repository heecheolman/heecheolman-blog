import React from 'react';
import './index.scss';

import { Avatar } from './../avatar';

export const ProfileCard = ({ profile }) => {
  const { author, pr } = profile;

  return (
    <div className="profile-card flex justify-between-sort align-center flex-column">
      <div className="profile-card__avatar">
        <Avatar size={50} />
      </div>
      <div className="profile-card__info">
        <div>@{author}</div>
        <div>{pr}</div>
      </div>
    </div>
  )
};
