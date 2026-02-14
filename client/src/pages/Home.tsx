import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { NewsTicker } from "@/components/home/NewsTicker";
import { Stats } from "@/components/home/Stats";
import { PrincipalMessage } from "@/components/home/PrincipalMessage";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <NewsTicker />
      <HeroSlider />
      
      {/* Intro Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Welcome</span>
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">A Tradition of Excellence</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            S.M. Inter College stands as a beacon of learning in Saharanpur, offering world-class education 
            rooted in values. We inspire students to dream, learn, and achieve.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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
              <div key={i} className="p-8 rounded-xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                <Link href="/about">
                  <a className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      
      <PrincipalMessage />
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Join Our Community</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8">
            Admissions are open for the upcoming academic session. Give your child the gift of quality education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission">
              <button className="bg-accent text-primary-foreground hover:bg-accent/90 px-8 py-4 rounded-md font-bold text-lg transition-transform hover:scale-105 shadow-lg">
                Apply for Admission
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-md font-bold text-lg transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
