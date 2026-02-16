import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Building, History, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <div className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our <span className="text-accent italic">Legacy</span></h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Dedicated to fostering academic excellence and character development since 1975.
            </p>
          </motion.div>
        </div>
      </div>

      {/* History & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-1 bg-accent rounded-full" />
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our History</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8 leading-tight">Four Decades of Educational Leadership</h2>
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>
                  S.M. Inter College was established in 1975 by the visionary educationist Late Shri R.K. Gupta with a mission 
                  to provide affordable yet high-quality education to the students of Saharanpur.
                </p>
                <p>
                  Starting with just 50 students in a small building, the college has grown into a premier institution 
                  spread over a lush green campus, catering to over 1500 students today. We have consistently 
                  produced district toppers and successful professionals who serve the nation.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-50 p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16" />
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-accent h-6 w-6" />
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Vision</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Empowering Future Leaders</h3>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                To be a center of excellence in education that nurtures intellectual curiosity, critical thinking, 
                and social responsibility in students, preparing them to thrive in a globalized world while staying 
                rooted in their values.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Academic Excellence",
                  "Character Formation", 
                  "Social Responsibility",
                  "Holistic Development"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-slate-700 text-sm uppercase tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">World Class Facilities</span>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Campus Infrastructure</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-xl font-light">
                Our campus is designed to provide an optimal environment for learning, sports, and creativity.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Smart Classrooms",
                desc: "Spacious, well-ventilated classrooms equipped with digital learning aids.",
                icon: Building
              },
              {
                title: "Modern Science Labs",
                desc: "Fully equipped Physics, Chemistry, and Biology laboratories for practical learning.",
                icon: Building
              },
              {
                title: "Library & Reading Room",
                desc: "A vast collection of books, journals, and digital resources for students.",
                icon: Building
              },
              {
                title: "Computer Center",
                desc: "State-of-the-art computer lab with high-speed internet connectivity.",
                icon: Building
              },
              {
                title: "Sports Complex",
                desc: "Facilities for cricket, football, basketball, and indoor games.",
                icon: Building
              },
              {
                title: "Auditorium",
                desc: "A large multipurpose hall for cultural events, seminars, and assemblies.",
                icon: Building
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <item.icon size={28} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif text-slate-800">{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
