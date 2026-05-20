export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">
          SOLINCAN
        </h1>

        <ul className="flex gap-6 text-gray-700">
          <li>
            <a href="#inicio" className="hover:text-orange-500">
              Inicio
            </a>
          </li>

          <li>
            <a href="#servicios" className="hover:text-orange-500">
              Servicios
            </a>
          </li>

          <li>
            <a href="#contacto" className="hover:text-orange-500">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
