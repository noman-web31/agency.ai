
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trusted from './components/Trusted'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import {Toaster} from 'react-hot-toast'

const App = () => {

  return (
    <>

        <Navbar />
        <Toaster/>
        <Hero />
        <Trusted />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
        <Footer />

    </>
  )
}

export default App