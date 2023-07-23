import Navegacion from "./navegacion"
import {useLocation } from "@remix-run/react"

function Footer() {
    const location = useLocation() //indica la localizacion
    return (
        <footer className="footer">
            <div className="contenedor">
                <Navegacion />

                <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer
