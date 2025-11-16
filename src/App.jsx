import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Impact from './components/Impact';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-800">About Pillars of Light</h2>
            <p className="mt-4 text-lg text-slate-700">
              Rooted in India’s rich heritage of seva (selfless service), Pillars of Light is a non-profit
              foundation uplifting children from underserved communities through education and nutrition.
              We partner with local schools, community leaders, and volunteers to deliver programs that
              are culturally grounded and resilient.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-rose-50 p-6 shadow-sm">
                <h3 className="font-bold text-rose-800">Our Vision</h3>
                <p className="mt-2 text-slate-700 text-sm">
                  Every child deserves the light of learning and the comfort of a nutritious meal.
                </p>
              </div>
              <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-orange-50 p-6 shadow-sm">
                <h3 className="font-bold text-rose-800">Our Approach</h3>
                <p className="mt-2 text-slate-700 text-sm">
                  Community-first implementation with transparency, accountability, and dignity.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Programs />
        <Impact />
        <CTA />
        <footer className="border-t border-rose-200/60 bg-rose-50/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-700">© {new Date().getFullYear()} Pillars of Light Foundation • India</p>
            <div className="text-sm text-slate-700">
              Built with love and cultural pride.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
