import React from 'react'; 

const Footer = () =>{
    const yr = new Date().getFullYear();
  return(
    <>
      <footer>
        <p>Copyright ©️ {yr}</p>
      </footer>
    </>
  )
}

export default Footer;