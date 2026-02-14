import { Users, GraduationCap, Building2, Trophy } from "lucide-react";

const stats = [
  { label: "Students", value: "1500+", icon: Users, color: "text-blue-600" },
  { label: "Expert Staff", value: "50+", icon: GraduationCap, color: "text-accent" },
  { label: "Years of Excellence", value: "45+", icon: Building2, color: "text-emerald-600" },
  { label: "Awards Won", value: "120+", icon: Trophy, color: "text-orange-500" },
];

export function Stats() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow group"
            >
              <div className={`p-4 rounded-full bg-slate-50 mb-4 group-hover:bg-slate-100 transition-colors ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1 font-serif">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
