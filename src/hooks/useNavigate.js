import { useContext } from 'react'
import NavigateContext from '../context/NavigateContext'

export default function useNavigate() {
  return useContext(NavigateContext)
}
