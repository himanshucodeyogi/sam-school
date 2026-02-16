import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const faculty = [
  {
    name: "Dr. R.K. Sharma",
    role: "Principal",
    department: "Administration",
    education: "Ph.D. in Education Leadership, M.A., B.Ed.",
    image: "/images/principal.png"
  },
  {
    name: "Mr. Robert Chen",
    role: "Head of Science",
    department: "Science Department",
    education: "M.Sc. Physics, B.Ed.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
  },
  {
    name: "Ms. Elena Rodriguez",
    role: "Senior Coordinator",
    department: "Humanities & Languages",
    education: "M.A. English Literature",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    name: "Mr. David Wilson",
    role: "Athletic Director",
    department: "Physical Education",
    education: "M.P.Ed.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

export default function Faculty() {
  return (
    <Layout>
      <div className="bg-slate-50 border-b border-slate-200 py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Mentors</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Expert <span className="text-accent italic">Faculty</span></h1>
            <p className="text-slate-600 text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Dedicated educators committed to nurturing excellence and character in every student.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {faculty.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="hover-elevate overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl group">
                <CardContent className="p-0">
                  <div className="bg-slate-100 aspect-square overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8 text-center bg-white relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <Badge className="bg-accent text-primary font-black uppercase tracking-widest px-4 py-1.5 shadow-xl border-none">
                        {member.role}
                      </Badge>
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-slate-800 mb-2">{member.name}</h3>
                    <p className="text-sm font-black text-accent uppercase tracking-widest mb-4">{member.department}</p>
                    <div className="h-px w-12 bg-slate-100 mx-auto mb-4" />
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{member.education}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
