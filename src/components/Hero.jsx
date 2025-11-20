import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900 pointer-events-none" />
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live study rooms are here
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">
              Study together. Compete smarter.
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-200/80 max-w-2xl">
              A playful, real-time study platform where students join rooms, take quizzes, and climb leaderboards — learning feels like a game.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
                Get started free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-white border border-white/15 backdrop-blur hover:bg-white/15">
                See how it works
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70 text-sm">
              <div>
                <p className="text-2xl font-semibold text-white">120k+</p>
                <p>Questions played</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">3.9x</p>
                <p>Faster revision</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">99.9%</p>
                <p>Uptime SLA</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">4.9/5</p>
                <p>User satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
