import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"



export function meta(){
  return[{
    title: "GuitarLa - Sobre Nosotros",
    descripcion: "Venta de guitarras, blog de música"
  }
  ]
}

export function links(){
  return[
    {
      rel: "stylesheet",
      href: styles
    },
    {

      //Hace que le de prioridad a cargar imagen antes, cuando son imagenes grandes
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

function Nosotros() {



  return (
    <div>
      <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">

          <img src={imagen} alt="imagen sobre nosotros" />

          <div>
            <p>
              Bienvenidos a nuestra tienda de guitarras,
              el destino ideal para todos los amantes de
              la música y los apasionados de las seis cuerdas.
              Aquí en Guitarlandia, nos enorgullece ofrecer una
              amplia selección de guitarras de alta calidad que
              satisfarán las necesidades de músicos de todos los
              niveles y estilos. Ya sea que seas un principiante
              entusiasmado o un guitarrista experimentado, nuestro
              equipo de expertos está listo para ayudarte a
              encontrar la guitarra perfecta que se adapte a tus
              preferencias y habilidades.  </p>
           <p>Nuestra tienda es un verdadero paraíso para los amantes de
              las guitarras, donde podrás encontrar una gran variedad de marcas
              reconocidas y modelos clásicos y contemporáneos. Desde guitarras
              acústicas cálidas y resonantes hasta poderosas guitarras
              eléctricas con un sonido lleno de distorsión, tenemos todo lo
              que necesitas para dar vida a tu música. Además, también
              ofrecemos una amplia gama de accesorios, como amplificadores,
              cuerdas, púas y estuches, para asegurarnos de que tengas todo
              lo necesario para disfrutar al máximo de tu experiencia musical.
            </p>
          
            <p>
              En Guitarlandia, no solo nos enfocamos en ofrecer productos de alta
              calidad, sino también en brindar un excelente servicio al cliente.
              Nuestro personal capacitado está siempre dispuesto a responder tus
              preguntas, ofrecer asesoramiento experto y ayudarte a tomar la mejor
              decisión al elegir tu nueva guitarra. Así que ven a visitarnos y
              descubre por ti mismo la magia que se encuentra dentro de nuestras
              paredes, donde cada guitarra cuenta una historia y cada acorde
              tiene el poder de crear emociones. ¡Te esperamos con los brazos
              abiertos en Guitarlandia, tu tienda de guitarras de confianza!
            </p>
          </div>

        </div>

      </main>
    </div>
  )
}

export default Nosotros
