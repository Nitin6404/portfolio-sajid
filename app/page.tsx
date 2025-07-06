import Header from './components/Header';
import Hero from './components/Hero.jsx';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}