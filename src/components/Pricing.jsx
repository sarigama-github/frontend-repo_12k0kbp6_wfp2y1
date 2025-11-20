import { Check } from 'lucide-react'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      desc: 'For individuals and small study groups getting started.',
      features: ['2 active rooms', 'Up to 10 players', 'Basic question banks', 'Email support'],
      cta: 'Get started'
    },
    {
      name: 'Pro',
      price: '$9',
      suffix: '/student/mo',
      popular: true,
      desc: 'For serious learners who want advanced game modes and insights.',
      features: ['Unlimited rooms', 'Up to 50 players', 'Advanced analytics', 'Custom quizzes', 'Priority support'],
      cta: 'Start free trial'
    },
    {
      name: 'Campus',
      price: 'Custom',
      desc: 'For schools and universities rolling out at scale.',
      features: ['SSO & admin controls', 'Cohort leaderboards', 'SIS integrations', 'Dedicated success manager'],
      cta: 'Contact sales'
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Simple, student-friendly pricing</h2>
          <p className="mt-3 text-slate-300/80">Start free, upgrade when you want more power.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border border-white/10 p-6 bg-white/5 ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-blue-500 text-white">Most popular</div>
              )}
              <h3 className="text-white font-semibold">{tier.name}</h3>
              <p className="mt-1 text-slate-300/80 text-sm">{tier.desc}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.suffix && <span className="text-slate-300/80">{tier.suffix}</span>}
              </div>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-200/90 text-sm">
                    <span className="text-emerald-400"><Check className="w-4 h-4" /></span> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-slate-900 font-semibold hover:bg-slate-100">
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
