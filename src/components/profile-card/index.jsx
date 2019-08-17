import React from 'react';
import './index.scss';

export const ProfileCard = ({ profile }) => {
  const { author, pr, githubLink } = profile;
  return (
    <div className="profile-card flex justify-between-sort align-center flex-column">
      <div className="profile-card__avatar">
        👨‍💻
      </div>
      <div className="profile-card__info">
        <div className="profile-card__info__author">@{author}</div>
        <div className="profile-card__info__pr">{pr}</div>
        <a className="hee-labeled profile-card__info__link" href={githubLink} target="_blank">github</a>
      </div>
    </div>
  )
};
