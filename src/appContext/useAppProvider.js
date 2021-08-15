import { useContext } from 'react'
import { AppProvider } from './AppProvider'

export default function useAuth() {
  const contextValue = useContext(AppProvider)
  return contextValue 
}
