import React from 'react';
import '../styles/section.scss';
import { Rating } from '../components/rating';
import { Bonus } from '../components/bonus';
import { Advantages } from '../components/advantages';
import { Button } from '../components/Button';
import { Logo } from '../components/logo';
import lock from '../assets/lock.svg';
import Check from '../assets/check.svg';
import { Tag } from '../components/tag';

export const Main = () => {
  return (
    <div className="main">
      <h2>Les Meilleurs Casinos en Ligne Du Moment</h2>
      <p className='subtitle'>
        Tous nos casinos sont : <span>{" "}<img className='lockIcon' src={lock} alt="lock icon" />{" "}</span>
        Autorise <span>{" "}<img className="checkIcon" src={Check} alt="check icon" /> {" "} </span> Revu par nos experts
      </p>
      <div className="main__card">
        <div className="mainCardTagContainer">
          <Tag content="USER CHOICE" />
        </div>
        <div className="main__card-row">
          <p className='first_item'>01</p>
          <Logo />
          <Rating />
          <Bonus />
          <Advantages />
          <div className="buttonContainer">
            <Button className='btn-green' onClick={() => console.log("yes")}>
              Jouer
            </Button>
          </div>

        </div>

        <p className='terms'>
          <span>18+</span> - Minimum bet amount - 100 - Some other important information - Terms&Conditions text - <span>Terms&ConditionsLink.com</span>
        </p>
      </div>
    </div>
  )
}
