import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen font-sans antialiased text-zinc-300 selection:bg-emerald-500/30 selection:text-emerald-200 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;