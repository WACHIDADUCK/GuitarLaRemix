

import { useState } from "react"
import { useLoaderData , useOutletContext } from "@remix-run/react"
import{getGuitarra} from "~/models/guitarras.server"
import { Link } from "@remix-run/react"
import { redirect } from "@remix-run/node"


export async function loader ({request, params}){
  // console.log(request)
  // console.log(params)

  const {guitarraUrl} = params
  const guitarra  = await getGuitarra(guitarraUrl)
 

  if(guitarra.data.length === 0){
    throw new Response ("",{
      status: 404,
      statusText: "Guitarra No Encontrada"
    })
    

  }

  return  guitarra
}



export function meta({data}){
//una vez que el loadar halla cargado el data esta disponible

  if(!data){
    return{
      title: `Guitarra ${data.data[0].attributes.nombre} no encontrada`,
      descrpicion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre} no encontrada`
    }
  }


  return [{  title: `GuitarLa - Guitarra ${data.data[0].attributes.nombre}`,
    descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`}]
  }





function Guitarra() {

  const {agregarCarrito} = useOutletContext()
  const[cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData()
  const { nombre, descrpicion, imagen, precio } = guitarra.data[0].attributes


  const handleSubmit = e =>{
    e.preventDefault();

    if(cantidad < 1 ){
      alert("Debes seleccionar una cantidad")
      return
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada)



  }

  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`} />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descrpicion}</p>
        <p className="precio">${precio}</p>

        <form 
        className="formulario" 
        action=""
        onSubmit={handleSubmit}
        >
          <label htmlFor="">Cantidad</label>

          <select 
          onChange = {e => setCantidad(parseInt(e.target.value)/** +(e.target.value (TAMBIEN FUNCIONA para convertirlo en numero)*/)}
          id="cantidad"
          
          >
            <option value="0">-- Selecione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          
          <input
            type="submit"
            value="Agregar al carrito"
          />

        </form>

      </div>
    </div>
  )
}

export default Guitarra
  