

import { useLoaderData} from "@remix-run/react"

import { getGuitarras} from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import { getCurso } from "~/models/Curso.server"

import ListadoGuitarras from "../components/listadoGuitarras"
import ListadoPosts from "../components/listadoPosts"
import Curso from "~/components/curso"

import stylesBlog from "~/styles/Blog.css"
import stylesCurso from "~/styles/curso.css"
import stylesGuitarras from "~/styles/guitarras.css" //Importas la hoja de estilos



export function meta(){

}

export function links (){ //Exportar la Hoja de estilos
  return[
    {
      rel: "stylesheet",
      href: stylesGuitarras
    },
    {
      rel: "stylesheet",
      href: stylesBlog
    },
    {
      rel: "stylesheet",
      href: stylesCurso
    }
  ]
}

export async function loader(){

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return{
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

export default function Index() {

  const {guitarras, posts, curso} = useLoaderData()


  return (
    <>

      <main className="contenedor">
        <ListadoGuitarras 
        guitarras={guitarras}
        />
      </main>

      <Curso
      curso={curso.attributes}
      />
      
      <section className="contendor">
      <ListadoPosts
      posts={posts}
      />
      </section>

    </>
  )
}
