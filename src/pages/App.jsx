import { useRoutes, BrowserRouter } from "react-router-dom"
import Asesoria from "./asesoria"
import Turnos from "./turnos"
import Pantalla from "./pantalla"
import Inicio from "./inicio"
import Navbar from "../componentes/navbar/navbar"

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Inicio />
    },
    {
      path: '/asesoria',
      element: <Asesoria />
    },
    {
      path: '/turnos',
      element: <Turnos />
    },
    {
      path: '/pantalla',
      element: <Pantalla />
    },
    {
      path: '/*',
      element: <Inicio />
    }
  ])

  return routes
}
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
