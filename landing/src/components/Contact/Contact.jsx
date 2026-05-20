export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Contacto
          </h2>

          <p className="text-gray-600">
            Puedes contactar con nosotros para más información.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-xl shadow">

            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 border rounded-lg mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg mb-4"
            />

            <textarea
              rows="5"
              placeholder="Mensaje"
              className="w-full p-3 border rounded-lg mb-4"
            ></textarea>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition w-full">
              Enviar
            </button>

          </div>

          <div className="flex flex-col justify-center gap-6">

            <div>
              <h3 className="text-xl font-bold mb-2">
                Dirección
              </h3>

              <p className="text-gray-600">
                Calle El Pilar 2 1A,
                Santa Cruz de Tenerife
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Correo
              </h3>

              <p className="text-gray-600">
                info@solincan.com
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
