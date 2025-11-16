export default function CTA() {
  return (
    <section id="get-involved" className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-800">Be a Pillar of Light</h2>
        <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
          Join our community of donors and volunteers supporting education and food security for children across India.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#donate" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-3 font-semibold shadow hover:shadow-md transition">
            Donate Monthly
          </a>
          <a href="#volunteer" className="inline-flex items-center justify-center rounded-full border border-rose-300 text-rose-700 px-6 py-3 font-semibold bg-white">
            Volunteer with Us
          </a>
        </div>
      </div>
    </section>
  );
}
