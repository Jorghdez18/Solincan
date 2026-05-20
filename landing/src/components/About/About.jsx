import aboutImg from '../../assets/images/about.png'

export default function About() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <img
            src={aboutImg}
            alt="equipo"
            className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
          />
        </div>

        <div>
          <p className="text-orange-500 font-semibold mb-2">
            Sobre nosotros
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Tecnología adaptada a empresas
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            En SOLINCAN desarrollamos soluciones digitales
            para mejorar procesos empresariales y productividad.
          </p>

          <p className="text-gray-600 leading-7">
            Nuestro equipo combina experiencia en software,
            sistemas y seguridad informática.
          </p>
        </div>

      </div>
    </section>
  )
}
