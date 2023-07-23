
import { Link } from "@remix-run/react"
import {formatearFecha} from "~/utils/helpers"

export default function Post({post}) {


  const {titulo, contenido, url, imagen, publishedAt} = post


  return (
    <article className="post">
      <img
        src={imagen.data.attributes.formats.small.url}
        className="imagen"
        alt={`imagen blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <link rel="stylesheet" href="" />
      </div>
      <Link className="enlace" to={`/blog/${url}`}>Leer Post</Link>
    </article>
  )
}


