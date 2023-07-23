
import { useLoaderData} from "@remix-run/react"
import{getPost} from "~/models/posts.server"
import {formatearFecha} from "~/utils/helpers"

export function meta({data}){
  //una vez que el loadar halla cargado el data esta disponible
  
    if(!data){
      return{
        title: `GuitarraLa - ${data.data[0].attributes.titulo} no encontrada`,
        descrpicion: `GuitarrasLa - venta de guitarras, blog ${data.data[0].attributes.titulo} no encontrado`
      }
    }

    return [{  title: `GuitarLa - Nuestro Blog: ${data.data[0].attributes.titulo}`,
      descripcion: `GuitarrasLa, Blog de musica: ${data.data[0].attributes.titulo}`}]
    }


export async function loader ({params}){

  const {postUrl} = params

  const post = await getPost(postUrl)

  if(post.data.length === 0){
    throw new Response("", {
      status: 404,
      statusText: "Post no encontrado"
    })
  }

  return post
}




export default function Post() {

  const post = useLoaderData()

  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes

  return (
    <article className=" post mt-3">
      <img
        src={imagen?.data?.attributes?.url}
        className="imagen"
        alt={`imagen blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>

    </article>
  )
}
