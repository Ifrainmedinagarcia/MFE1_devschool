import "./Navigation.css"
import { Routes, Route, NavLink } from "react-router-dom"


import { route } from "./routeStore";
import { CartIcon } from "../Components/Pages/cart/CartIcon/CartIcon";


const Navigation = (): JSX.Element => {
  return (
    <>
      <div className="container__menu">
        <nav>
          <ul className="nav__ul">
            {route?.map(({ name, to }) => {
              if (!name) return
              return (
                <NavLink key={to} to={to} className={({ isActive }) => isActive ? "nav-active_sub" : "nav_sub"}>{name}</NavLink>
              )
            })}
          </ul>
        </nav>
      </div>
      <Routes>
        {route?.map(({ Component, path }) => <Route key={path} path={path} element={<Component />} />)}
      </Routes>
      <CartIcon />
    </>
  )
}

export default Navigation
