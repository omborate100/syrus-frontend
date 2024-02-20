import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
import PortFolio from './components/PortFolio'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/portfolio",
    element: <PortFolio />
  }

])

ReactDOM.render(
  <RouterProvider router={appRouter}/>,
  document.getElementById('root')
)