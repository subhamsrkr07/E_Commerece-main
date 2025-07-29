import React from 'react'
import { createContext } from 'react'


export const authDataContext = createContext()
const Authcontext = ({children}) => {
    let serverUrl = ""


    let value = {
        serverUrl
    }
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  )
}

export default Authcontext
