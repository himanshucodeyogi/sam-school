import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function PrincipalMessage() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200 group">
              <img 
                src="/images/principal.png" 
                alt="Principal" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decor elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-12 -right-12 w-24 h-24 border-[12px] border-accent/10 rounded-full z-20 hidden md:block" 
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-7/12 space-y-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-16 h-1.5 bg-accent rounded-full"></span>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Principal's Desk</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Education is the key to unlock the <span className="text-accent italic">golden door</span> of freedom.
            </h2>
            
            <div className="relative">
              <Quote className="h-16 w-16 text-primary/5 absolute -top-8 -left-8" />
              <div className="text-slate-600 space-y-6 text-xl font-light leading-relaxed relative z-10 italic">
                <p>
                  "Welcome to S.M. Inter College. For over four decades, we have dedicated ourselves 
                  to nurturing young minds and building character. Our mission goes beyond textbooks; 
                  we strive to create responsible citizens who will lead with integrity."
                </p>
                <p>
                  "Our campus provides a blend of traditional values and modern pedagogy, ensuring 
                  that every student discovers their unique potential. Join us in this journey of 
                  excellence and holistic growth."
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 inline-block">
              <h4 className="font-serif font-bold text-2xl text-primary">Dr. R.K. Sharma</h4>
              <p className="text-slate-500 font-medium tracking-wide">Principal, M.A., B.Ed., Ph.D</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
