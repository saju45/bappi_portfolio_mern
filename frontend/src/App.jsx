import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import RecentWork from "./components/RecentWork"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <RecentWork/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App