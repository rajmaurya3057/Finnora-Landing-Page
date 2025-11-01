import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import WhyFinnora from './components/WhyFinnora';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0D14] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <WhyFinnora />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;
