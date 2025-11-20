import { Play, Users, Target, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Play,
      title: 'Create a room',
      desc: 'Pick a topic, set difficulty, and choose round types.'
    },
    {
      icon: Users,
      title: 'Invite your crew',
      desc: 'Share a link — classmates can join instantly on any device.'
    },
    {
      icon: Target,
      title: 'Compete in quizzes',
      desc: 'Answer in real time, trigger power-ups, and rack up streaks.'
    },
    {
      icon: Rocket,
      title: 'Track progress',
      desc: 'Insights per topic and personalized recommendations.'
    }
  ]

  return (
    <section id="how" className="py-24 bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">How it works</h2>
          <p className="mt-3 text-slate-300/80">Get your study session up and running in under a minute.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
              <div className="rounded-xl bg-white/10 w-12 h-12 grid place-content-center text-white">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
