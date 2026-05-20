export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-r from-orange-50 to-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-orange-500 font-semibold mb-2">
            Ingeniería y tecnología
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Soluciones digitales para empresas
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            Desarrollamos herramientas tecnológicas
            para mejorar procesos y productividad.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Contáctanos
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200"
            alt="SOLINCAN"
            className="rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  )
}
