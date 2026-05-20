export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16">

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            SOLINCAN
          </h2>

          <p className="text-gray-400">
            Soluciones digitales para empresas.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Navegación
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">
            Contacto
          </h3>

          <p className="text-gray-400">
            Tenerife, España
          </p>

          <p className="text-gray-400">
            info@solincan.com
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 py-6 text-center text-gray-500">
        © 2026 SOLINCAN
      </div>

    </footer>
  )
}
