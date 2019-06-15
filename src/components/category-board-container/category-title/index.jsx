import React from 'react';
import './index.scss';
import DoodleArchive from './../../../assets/svg/doodle-archive.svg';

export const CategoryTitle = ({ text }) => {
  return (
    <div className="category-title">
      <DoodleArchive className="category-title__icon" />
      <span className="category-title__text">{text}</span>
    </div>
  )
}
