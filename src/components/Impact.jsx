export default function Impact() {
  const stats = [
    { label: "Children Supported", value: "12,500+" },
    { label: "Meals Served", value: "2.4M" },
    { label: "Scholarships Granted", value: "3,200" },
    { label: "Learning Centres", value: "85" },
  ];

  return (
    <section id="impact" className="py-16 sm:py-24 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-800">Our Impact</h2>
          <p className="mt-3 text-slate-700">
            Real change measured in smiles, attendance, and aspirations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-rose-200 bg-white p-8 text-center shadow-sm">
              <div className="text-3xl font-extrabold text-rose-700">{s.value}</div>
              <div className="mt-2 text-sm font-medium text-slate-700">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
