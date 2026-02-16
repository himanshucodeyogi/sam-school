import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Award, TrendingUp, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Results() {
  return (
    <Layout>
      <div className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our <span className="text-accent italic">Achievement</span></h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Celebrating academic excellence and the consistent performance of our bright students.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            { icon: Trophy, value: "100%", label: "Pass Percentage", sub: "Board Examinations", color: "bg-blue-600" },
            { icon: Star, value: "85%", label: "Distinction Rate", sub: "Across all subjects", color: "bg-accent" },
            { icon: TrendingUp, value: "98.4%", label: "Highest Aggregate", sub: "Academic Year 2024-25", color: "bg-emerald-600" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`${i === 1 ? "bg-accent text-primary" : "bg-primary text-white"} border-none shadow-xl rounded-3xl overflow-hidden hover-elevate transition-all duration-500`}>
                <CardContent className="p-10 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl ${i === 1 ? "bg-primary/10" : "bg-white/10"} backdrop-blur-sm`}>
                    <stat.icon className={`w-8 h-8 ${i === 1 ? "text-primary" : "text-accent"}`} />
                  </div>
                  <div className="text-5xl font-serif font-bold mb-2">{stat.value}</div>
                  <div className="text-sm font-black uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                  <p className="text-xs opacity-70 font-medium">{stat.sub}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-slate-900 text-white p-10">
                <CardTitle className="flex items-center gap-4 text-3xl font-serif">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  Academic Toppers 2024-25
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase text-xs font-black tracking-[0.2em]">
                        <th className="text-left py-6 px-10">Rank</th>
                        <th className="text-left py-6 px-10">Student Name</th>
                        <th className="text-left py-6 px-10">Stream / Class</th>
                        <th className="text-right py-6 px-10">Percentage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { rank: "01", name: "Aryan Sharma", class: "XII-Science", pct: "98.4%", color: "text-accent" },
                        { rank: "02", name: "Priya Patel", class: "XII-Commerce", pct: "97.2%", color: "text-slate-400" },
                        { rank: "03", name: "Rahul Verma", class: "Class X", pct: "96.8%", color: "text-orange-400" }
                      ].map((row, i) => (
                        <motion.tr 
                          key={row.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="hover:bg-slate-50 transition-colors group"
                        >
                          <td className="py-8 px-10">
                            <span className={`text-2xl font-serif font-black ${row.color}`}>{row.rank}</span>
                          </td>
                          <td className="py-8 px-10">
                            <div className="font-bold text-slate-800 text-lg">{row.name}</div>
                          </td>
                          <td className="py-8 px-10">
                            <span className="px-4 py-1.5 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">{row.class}</span>
                          </td>
                          <td className="py-8 px-10 text-right">
                            <div className="text-2xl font-serif font-bold text-primary">{row.pct}</div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
