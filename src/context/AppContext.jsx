import { createContext, useContext, useState } from "react";
import React from 'react'

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [navbar, setNavbar] = useState(false)

  const value = {
    navbar, setNavbar
  }

  return (
    <AppContext.Provider 
    value={value}
    >
        {children}
    </AppContext.Provider>
  )
}




export const useAppContext = () => useContext(AppContext);