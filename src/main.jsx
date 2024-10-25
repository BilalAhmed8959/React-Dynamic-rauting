import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Producet from './pages/Producet.jsx'
import Shomore from './pages/Shomore.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },{
        path:"about",
        element:<About/>,
      },{
        path:'producet',
        element:<Producet/>
      },
      {
        path:'shomore',
        element:<Shomore/>
      },
      {
        path:'*',
        element:<Home/>
      }
    ],
    
  },
  
])

createRoot(document.getElementById('root')).render(
      <RouterProvider router={router}>
        <h1>Bilal Ahmed</h1>

      </RouterProvider>
  
)
