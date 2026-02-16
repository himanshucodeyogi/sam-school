import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Handshake, Globe, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function AlumniNetwork() {
  return (
    <Layout>
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Alumni <span className="text-accent italic">Network</span></h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Connecting generations of excellence and tradition. Our alumni are our pride and our greatest legacy.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-16 space-y-8">
                  <div className="flex items-center gap-3">
                    <Globe className="text-accent h-6 w-6" />
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Global Presence</span>
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-slate-900 leading-tight">A Community Without Borders</h2>
                  <p className="text-slate-600 text-xl font-light leading-relaxed">
                    Our alumni network spans across the globe, with members excelling in diverse fields
                    ranging from technology and medicine to arts and public service. We take immense pride
                    in the achievements of our former students who carry the values of our institution
                    wherever they go.
                  </p>
                  <div className="flex gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl text-center flex-1">
                      <div className="text-3xl font-serif font-bold text-primary mb-1">5000+</div>
                      <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Active Members</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl text-center flex-1">
                      <div className="text-3xl font-serif font-bold text-primary mb-1">20+</div>
                      <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Countries</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-slate-100 relative min-h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200" 
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Alumni Meet" 
                  />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Mentorship Program",
                icon: GraduationCap,
                desc: "Connect with current students to share your experiences and guide the next generation of leaders.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Alumni Meets",
                icon: Handshake,
                desc: "Regular gatherings and reunions to stay connected with your batchmates and the alma mater.",
                color: "bg-accent/10 text-primary"
              },
              {
                title: "Distinguished Awards",
                icon: Award,
                desc: "Recognizing alumni who have made significant contributions to their respective fields.",
                color: "bg-emerald-50 text-emerald-600"
              },
              {
                title: "Giving Back",
                icon: Heart,
                desc: "Support our ongoing initiatives and scholarships to help deserving students achieve their dreams.",
                color: "bg-rose-50 text-rose-600"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden hover-elevate group h-full bg-white">
                  <div className="p-12">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">{feature.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
