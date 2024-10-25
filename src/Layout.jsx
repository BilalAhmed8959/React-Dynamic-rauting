import { Outlet } from 'react-router'
import Navar from './c0mponents/Navar'

const Layout = () => {
  return (
    <div>
      <Navar/>
      
      <Outlet/>
    </div>
  )
}

export default Layout
