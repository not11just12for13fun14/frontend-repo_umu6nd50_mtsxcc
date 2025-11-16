import { BookOpen, UtensilsCrossed, Building2, ShieldCheck } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Education Scholarships",
    desc: "School fees, books, uniforms, and mentorship to keep children learning.",
  },
  {
    icon: UtensilsCrossed,
    title: "Midday Meals",
    desc: "Nutritious food programs that encourage attendance and healthy growth.",
  },
  {
    icon: Building2,
    title: "Learning Centres",
    desc: "Community classrooms with trained tutors and digital access.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection",
    desc: "Safe spaces and support networks for vulnerable children.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-rose-800">Our Programs</h2>
          <p className="mt-3 text-slate-700">
            Practical initiatives rooted in local culture and community partnerships.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-orange-200 bg-gradient-to-br from-amber-50 to-rose-50 p-6 shadow-sm"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 text-white grid place-content-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold text-lg text-rose-800">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
