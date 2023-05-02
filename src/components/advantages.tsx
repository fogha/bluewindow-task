import React from 'react'
import '../styles/row-components.scss';
import Check from '../assets/check.svg';

const info = [
  'Retraits rapides',
  'Enregistrement en douceur',
  'Benefices non imposables'
]

export const Advantages = () => {
  return (
    <div className="advantages">
      {info.map((item) => (
        <div className="advantages__item">
          <img alt='check' src={Check} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}
