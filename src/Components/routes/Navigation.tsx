import "./Navigation.css"
import { routes } from "./routes"
import { Routes, Route, NavLink, useNavigate } from "react-router-dom"
import { useEffect } from "react";


const Navigation = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("all")
  }, [])

  return (
    <>
      <div className="container__menu">
        <nav>
          <ul className="nav__ul">
            {routes.map(({ name, to }) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? "nav-active_sub" : "nav_sub"}>{name}</NavLink>)}
          </ul>
        </nav>
      </div>
      <Routes>
        {routes.map(({ Component, path }) => <Route key={path} path={path} element={<Component />} />)}
      </Routes>
    </>
  )
}

export default Navigation
