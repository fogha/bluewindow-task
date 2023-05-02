import React from 'react';
import '../styles/row-components.scss';
import fullStar from '../assets/fullStar.svg'
import halfStar from '../assets/halfStar.svg'

export const Rating = () => {
  return (
    <div className="ratings">
      <h3>PlayOjo Casino</h3>
      <div>
        {[...Array(4)].map((star, index) => (
          <img key={index} src={fullStar} alt="React Logo" />
        ))}
        <img src={halfStar} alt="React Logo" />
      </div>
      <p>4.5/5</p>
    </div>
  )
}
