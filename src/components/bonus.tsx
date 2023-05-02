import React from 'react'
import '../styles/row-components.scss';
import { Tag } from './tag';

export const Bonus = () => {
  return (
    <div className="bonus">
      <span>
        <h3>
          Bonus
        </h3>
        <hr />
      </span>

      <div className="bonusCardtTagContainer">
        <Tag content="EXCLUSIVITÉ" />
      </div>

      <div className="bonus__main">
        <h2>250 CA$</h2>
        <p>+ 80 Tours Gratuits</p>
      </div>
    </div>
  )
}
