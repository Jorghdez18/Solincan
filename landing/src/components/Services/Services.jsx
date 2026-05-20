import ServiceCard from './ServiceCard.jsx'

import {
  FaCode,
  FaShieldAlt,
  FaCloud
} from 'react-icons/fa'

export default function Services() {

  const services = [
    {
      icon: <FaCode />,
      title: 'Software a medida',
      text: 'Desarrollamos software personalizado para empresas.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Peritajes de seguridad',
      text: 'Servicios de análisis y seguridad informática.'
    },
    {
      icon: <FaCloud />,
      title: 'Sistemas para empresas',
      text: 'Migración y soluciones cloud empresariales.'
    }
  ]

  return (
    <section
      id="servicios"
      className="bg-white py-20"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          ))}

        </div>

      </div>
    </section>
  )
}
