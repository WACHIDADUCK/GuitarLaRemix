
import { Link } from "@remix-run/react"
import logo from "../../public/img/logo.svg"
import Navegacion from "./navegacion"

function Header() {



  return (
    <div>
      <header className="header">
        <div className="contenedor barra">
          <div className="logo">
            <Link to="/">
              <img className="logo" src={logo} alt="imagen logo" />
            </Link>
          </div>
          <Navegacion/>
        </div>
      </header>
    </div>
  )
}

export default Header
