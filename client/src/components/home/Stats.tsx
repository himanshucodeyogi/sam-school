import { motion } from "framer-motion";
import { Users, GraduationCap, Building2, Trophy } from "lucide-react";

const stats = [
  { label: "Students", value: "1500+", icon: Users, color: "text-blue-600" },
  { label: "Expert Staff", value: "50+", icon: GraduationCap, color: "text-accent" },
  { label: "Years of Excellence", value: "45+", icon: Building2, color: "text-emerald-600" },
  { label: "Awards Won", value: "120+", icon: Trophy, color: "text-orange-500" },
];

export function Stats() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`p-5 rounded-2xl bg-slate-50 mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-300 ${stat.color}`}>
                <stat.icon className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2 font-serif">{stat.value}</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.15em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
