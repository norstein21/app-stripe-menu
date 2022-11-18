import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen,location,halaman:{page,links}} = useGlobalContext();
  const [columnLink,setColumnLink] = useState('col-2')
  const inlineContainer = useRef(null);


  useEffect(()=>{
    setColumnLink('col-2')
    const subMenu = inlineContainer.current;
    const {subCenter,subBottom} = location;
    subMenu.style.left = `${subCenter}px`;
    subMenu.style.top = `${subBottom}px`;
    if(links.length === 3){
      setColumnLink('col-3')
    }
    if (links.length > 3){
      setColumnLink('col-4')
    }

  },[location,columnLink,links.length])


  return (
    <aside className={`${isSubmenuOpen ? 'submenu show': 'submenu'}`} ref={inlineContainer}>
      <div className='submenu-center'>
      <h4>{page}</h4>
      <div className={`submenu-center ${columnLink}`}>
        {links.map((link)=>{
          const {label,icon,url} = link;
          return (
            <a href={url}>{icon}{label}</a>
          )
        })}
      </div>
      </div>
    </aside>
  );
}

export default Submenu
