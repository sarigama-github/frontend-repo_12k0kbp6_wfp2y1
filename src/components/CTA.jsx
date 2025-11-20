export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900" id="contact">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_20%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(400px_200px_at_80%_100%,rgba(99,102,241,0.15),transparent)]" />
          <h3 className="relative text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to turn revision into a game?</h3>
          <p className="relative mt-3 text-slate-300/80 max-w-2xl mx-auto">Join thousands of students who study together, compete fairly, and actually enjoy the process.</p>
          <div className="relative mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-slate-900 font-semibold">Create your first room</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-white border border-white/15">Explore features</a>
          </div>
        </div>
      </div>
    </section>
  )
}
