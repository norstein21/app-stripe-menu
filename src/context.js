import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children})=>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
    const [location,setLocation] = useState({});
    const [halaman,setHalaman] = useState({page:'',links:[]})

    const openSidebar = () =>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = () =>{
        setIsSidebarOpen(false)
    }
    const openSubmenu= (text,coordinate) =>{
        setHalaman(()=>{
        const filterText = sublinks.find((link)=>link.page === text)
        return filterText;
        })

        setLocation(coordinate)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () =>{
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{openSidebar,
    closeSidebar,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
    isSidebarOpen,
    location,
    halaman
}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}