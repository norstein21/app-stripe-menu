import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e)=>{

    const sub = e.target.textContent;
    const subBtn = e.target.getBoundingClientRect();
    const subCenter = (subBtn.left + subBtn.right) / 2;
    const subBottom = subBtn.bottom - 3;

    openSubmenu(sub,{subCenter,subBottom});
  }

  const handleSubmenu = (e)=>{
    if (!e.target.classList.contains('link-btn')){
      closeSubmenu()
    }
  }

  return (
  <nav>
    <div className='nav-center' onMouseOver={handleSubmenu}>
      <div className='nav-header'>
        <img src={logo} alt="logo" className='nav-logo' />
        <button className='btn toggle-btn' onClick={openSidebar}><FaBars /></button>    
      </div>
      <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign In</button>

    </div>
  </nav>
  );
}

export default Navbar
