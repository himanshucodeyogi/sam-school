import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { NewsTicker } from "@/components/home/NewsTicker";
import { Stats } from "@/components/home/Stats";
import { PrincipalMessage } from "@/components/home/PrincipalMessage";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Home() {
  return (
    <Layout>
      <NewsTicker />
      <HeroSlider />
      
      {/* Intro Section */}
      <section className="py-24 bg-white text-center overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Welcome to Excellence</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">A Tradition of <span className="text-accent italic">Excellence</span></h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-xl leading-relaxed mb-16 font-light">
              S.M. Inter College stands as a beacon of learning in Saharanpur, offering world-class education 
              rooted in values. We inspire students to dream, learn, and achieve.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left"
          >
            {[
              { 
                icon: BookOpen, 
                title: "Academic Excellence", 
                desc: "Rigorous curriculum focused on conceptual understanding and practical application." 
              },
              { 
                icon: Users, 
                title: "Holistic Development", 
                desc: "Focus on sports, arts, and character building alongside academics." 
              },
              { 
                icon: GraduationCap, 
                title: "Expert Faculty", 
                desc: "Dedicated teachers mentoring students to achieve their full potential." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 rotate-3 group-hover:rotate-0">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">{feature.desc}</p>
                <Link href="/about">
                  <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300">
                    Discover More <ArrowRight size={18} className="text-accent" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Stats />
      
      <PrincipalMessage />
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        ></motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Start Your <span className="text-accent italic">Journey</span> With Us</h2>
            <p className="text-blue-100 max-w-3xl mx-auto text-xl mb-12 font-light leading-relaxed">
              Admissions are open for the upcoming academic session. Join a legacy of learners and give your child the foundation for a brilliant future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/admission" className="group bg-accent text-primary-foreground hover:bg-white hover:text-primary px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-accent/40 flex items-center gap-2 whitespace-nowrap">
                  Apply for Admission
                  <ArrowRight className="group-hover:translate-x-2 transition-transform shrink-0" />
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white/30 text-white hover:border-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
                  Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
