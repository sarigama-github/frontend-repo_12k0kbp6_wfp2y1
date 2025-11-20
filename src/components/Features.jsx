import { Brain, Gamepad2, Users2, Trophy, Timer, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Smart question banks',
      desc: 'Adaptive quizzes from curated topics and difficulty levels with instant feedback.'
    },
    {
      icon: Users2,
      title: 'Live study rooms',
      desc: 'Host or join rooms with friends or classmates — collaborate in real time.'
    },
    {
      icon: Gamepad2,
      title: 'Playful mechanics',
      desc: 'Power-ups, streaks, and combos make revision feel like a game you want to win.'
    },
    {
      icon: Trophy,
      title: 'Leaderboards',
      desc: 'Track performance globally or within your classroom to keep motivation high.'
    },
    {
      icon: Timer,
      title: 'Timed challenges',
      desc: 'Speed rounds and lightning modes to sharpen recall under pressure.'
    },
    {
      icon: Shield,
      title: 'Anti-cheat & moderation',
      desc: 'Room controls, question randomization, and proctoring-friendly tools.'
    }
  ]

  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(600px_200px_at_90%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Built for focus, designed for fun</h2>
          <p className="mt-3 text-slate-300/80">Everything you need to turn study time into a shared, competitive experience.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 p-2.5 text-white shadow-lg shadow-blue-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
