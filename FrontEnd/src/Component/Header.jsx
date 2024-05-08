import React, { Component } from 'react';
import Logo from '../images/Logo.png';

export default class Header extends Component {
  render() {
    return (
      <div id='div-header'>
        <h1 className='title-header'>Brigaderia Encanto Total</h1>
        <img className='imagem-logo' src={Logo} alt='Logo' />
      </div>
    );
  }
}