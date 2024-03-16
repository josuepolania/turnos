import { useRoutes, BrowserRouter } from "react-router-dom"
import Asesoria from "./asesoria"
import Turnos from "./turnos"
import Navbar from "../componentes/navbar/navbar"

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/asesoria',
      element: <Asesoria />
    },
    {
      path: '/turnos',
      element: <Turnos />
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
