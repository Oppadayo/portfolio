import { createContext, useState, useContext } from "react";

interface Props {
  theme: string
  setTheme: (theme: string) => void
  toggleTheme: () => void
}

export const ToggleThemeContext = createContext<Props>({} as Props)

export function ToggleThemeProvider({children}: any){
  const [theme, setTheme] = useState('dark')

  function toggleTheme(){
    setTheme(theme === 'dark' ? 'light' : 'dark')
  } 

  return (
    <ToggleThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
      {children}
    </ToggleThemeContext.Provider>
  )
}

export const SwitchTheme = () => useContext(ToggleThemeContext)