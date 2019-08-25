import React from 'react';
import './index.scss';

export const CategoryTitle = ({ text }) => {
  return (
    <div className="category-title hee-labeled">
      {/*⭐️💎📦🏷*/}
      <span className="category-title__icon">📦</span>
      <span className="category-title__text">{`${text.slice(0, 1).toUpperCase()}${text.slice(1, text.length)}`}</span>
    </div>
  )
}
