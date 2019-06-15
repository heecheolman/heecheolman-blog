import React from 'react';
import './index.scss';

import { CategoryTitle } from './category-title';
import { CategoryItem } from './category-item';

export const CategoryBoardContainer = ({ categorize }) => {

  const categoryEntries = Object.entries(categorize);
  return (
    <div>
      {categoryEntries.map((group, index1) => {
        return (
          <div className="category-board" key={index1}>
            <CategoryTitle text={group[0]}/>
            <div className="category-item-container">
              {group[1].map((data, index2) => (<CategoryItem data={data} key={index2} />))}
            </div>
          </div>
        )
      })}
    </div>
  )
};
