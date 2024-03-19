import { NavLink } from "react-router-dom"


function Navbar() {
    const activeStyle = "underline underline-offset-4"
    return (
        <nav className="flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-ligth">
            <ul className="flex items-center gap-3 bg-white cursor-pointer rounded-lg ">
                <li className="font-semibold text-lg text-center rounded-lg border border-black w-40 p-4 mb-4">
                    <NavLink
                        to="/asesoria"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        ASESORIA
                    </NavLink>
                </li>
                <li className="font-semibold text-lg text-center rounded-lg border border-black w-40 p-4 mb-4">
                    <NavLink
                        to="/turnos"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        TURNOS
                    </NavLink>
                </li>
                <li className="font-semibold text-lg text-center rounded-lg border border-black w-50 p-4 mb-4">
                    <NavLink
                        to="/pantalla"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        PANTALLA DE TURNOS
                    </NavLink>
                </li>
                <li className="font-semibold text-lg text-center rounded-lg border border-black w-50 p-4 mb-4">
                    <NavLink
                        to="/reportes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        REPORTES
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
