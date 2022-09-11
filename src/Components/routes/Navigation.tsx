import { Routes, Route, Navigate, NavLink } from "react-router-dom"
import { routes } from "./routes"
import "./Navigation.css"

const Navigation = (): JSX.Element => {
  return (
    <div className="container__menu">
      <nav>
        <ul className="nav__ul">
          {routes.map(({ name, to })=> <NavLink key={to}  className={({ isActive }) => isActive ? "nav-active_sub" : "nav_sub"} to={to} >{name}</NavLink>)}
        </ul>
      </nav>

      <Routes>
        {routes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component />} />))}
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>

    </div>
  )
}

export default Navigation
