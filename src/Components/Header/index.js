import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderContainer,
} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <nav className='container'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login | Criar</Link>
      </nav>
    </HeaderContainer>
  )
}

export default Header;