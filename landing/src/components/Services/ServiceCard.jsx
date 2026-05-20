export default function ServiceCard({
  icon,
  title,
  text
}) {
  return (
    <div className="bg-gray-100 p-8 rounded-xl shadow hover:-translate-y-2 transition">

      <div className="text-4xl text-orange-500 mb-4">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {text}
      </p>

    </div>
  )
}
