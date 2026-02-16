import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Palette, Music, Camera, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function SportsActivities() {
  return (
    <Layout>
      <div className="bg-slate-50 border-b border-slate-200 py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Holistic Development</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Sports & <span className="text-accent italic">Activities</span></h1>
            <p className="text-slate-600 text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Nurturing diverse talents beyond the classroom through a comprehensive range of physical and creative pursuits.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Physical Education & Sports",
              icon: Dumbbell,
              desc: "State-of-the-art facilities for a variety of competitive and recreational sports.",
              items: ["Cricket & Football Grounds", "Basketball & Volleyball Courts", "Badminton & Table Tennis", "Athletics & Yoga Centers"],
              color: "bg-blue-50 text-blue-600"
            },
            {
              title: "Performing Arts",
              icon: Music,
              desc: "Comprehensive music and dance programs catering to diverse artistic interests.",
              items: ["Classical & Modern Dance", "Vocal & Instrumental Music", "School Choir & Orchestra", "Annual Cultural Festivals"],
              color: "bg-purple-50 text-purple-600"
            },
            {
              title: "Visual Arts & Design",
              icon: Palette,
              desc: "Encouraging creativity through various artistic mediums and workshops.",
              items: ["Oil & Watercolor Painting", "Sculpture & Pottery", "Digital Art & Graphic Design", "Photography & Videography"],
              color: "bg-orange-50 text-orange-600"
            },
            {
              title: "Clubs & Societies",
              icon: Users,
              desc: "Nurturing specific interests through student-led organizations and societies.",
              items: ["Debate & Literary Society", "Eco Warriors & Green Club", "Coding & Robotics Club", "Drama & Theater Group"],
              color: "bg-emerald-50 text-emerald-600"
            }
          ].map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden hover-elevate group h-full">
                <div className="p-12">
                  <div className={`w-16 h-16 ${activity.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <activity.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">{activity.title}</h3>
                  <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">{activity.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activity.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
