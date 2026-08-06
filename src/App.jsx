import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Verticals from './components/Verticals'
import Approach from './components/Approach'
import Leadership from './components/Leadership'
import Associates from './components/Associates'
import Insights from './components/Insights'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Verticals />
        <Approach />
        <Leadership />
        <Associates />
        <Insights />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
