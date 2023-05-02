import React from 'react';
import '../styles/row-components.scss';
import OjoLogo from '../assets/logo casino ojo.png';
import { FiInfo } from 'react-icons/fi';

export const Logo = () => {
  return (
    <div className="logo">
      <img className="ojoCasinoLogo" src={OjoLogo} alt="Ojo Casino Logo" />
      <FiInfo className="infoIcon"/>
    </div>
  )
}
