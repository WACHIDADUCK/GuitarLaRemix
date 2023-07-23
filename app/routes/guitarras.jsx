import { Outlet, useOutletContext} from "@remix-run/react"

import styles from "~/styles/guitarras.css" //Importas la hoja de estilos


export function links (){ //Exportar la Hoja de estilos
  return[
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

function Tienda() {




  return (
    <main className="contenedor">
        
        <Outlet
        context={useOutletContext()}
        />

    </main>
  )
}

export default Tienda
