import { useLoaderData } from "@remix-run/react"
import {getGuitarras} from "~/models/guitarras.server"

import ListadoGuitarras from "../components/listadoGuitarras"

export function meta(){
return [{  title: "GuitarLa - Tienda de Guitarras",
  descripcion: "GuiarLa - Nuestra colección de guittarras"}]
}



export async function loader() {
const guitarras = await getGuitarras()
console.log(guitarras) // se ejecuta en el lado de la consola
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()
  // const guitarrasData = guitarras.guitarras.data
  // console.log(guitarrasData[0].attributes)

  return (

      <ListadoGuitarras 
        guitarras={guitarras}
        />
        

  )
}

export default Tienda
