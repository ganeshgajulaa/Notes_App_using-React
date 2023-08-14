import React from 'react'; 
import logo from './imgs/logo.jfif';

const Header = () =>{
  return(
    <>
      <div className='header'>
        <img src={logo} alt='logo' width='70' height=''/>
        <h1>G NOTES</h1>
      </div>
    </>
  )
}

export default Header;