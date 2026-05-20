import Navbar from '../components/Navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Services from '../components/Services/Services.jsx'
import About from '../components/About/About.jsx'
import Contact from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
