import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pb-24 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
      <div className="absolute -top-10 -right-10 h-56 w-56 bg-rose-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-56 w-56 bg-amber-200/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/70 px-3 py-1 text-xs font-semibold text-amber-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Pillars of Light • India
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-rose-800">
              Nurturing minds and nourishing futures
            </h1>
            <p className="mt-5 text-slate-700 text-lg">
              We are a charity foundation dedicated to empowering children in need across India with access to education and wholesome meals. Together, we can light the path to brighter lives.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#donate" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-3 font-semibold shadow hover:shadow-md transition">
                Donate Now
              </a>
              <a href="#programs" className="inline-flex items-center justify-center rounded-full border border-rose-300 text-rose-700 px-6 py-3 font-semibold bg-white/70">
                Explore Programs
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-orange-200 bg-white shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop"
                alt="Children studying with joy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-amber-200 p-4 w-56">
              <p className="text-sm font-semibold text-rose-700">Every Rs. 500 supports a child's meals for a week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
