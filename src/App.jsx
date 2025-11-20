import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_50%_-100px,rgba(59,130,246,0.25),transparent),radial-gradient(600px_300px_at_10%_0%,rgba(147,197,253,0.15),transparent)]" />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">© {new Date().getFullYear()} StudyPlay. All rights reserved.</footer>
    </div>
  )
}

export default App
