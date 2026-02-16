import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523050335456-cbb6e8906326?q=80&w=2070&auto=format&fit=crop",
    title: "Empowering Minds",
    subtitle: "Shaping Futures Since 1975",
    description: "Discover a legacy of academic excellence and character building in the heart of Saharanpur.",
    cta: "Learn More",
    link: "/about"
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    title: "Holistic Education",
    subtitle: "Beyond the Classroom",
    description: "From state-of-the-art labs to champion sports teams, we nurture every aspect of a student's potential.",
    cta: "Explore Campus",
    link: "/gallery"
  },
  {
    image: "https://images.unsplash.com/photo-1577891729319-667edc3b1abc?q=80&w=2070&auto=format&fit=crop",
    title: "Global Citizenship",
    subtitle: "Values for Life",
    description: "Rooted in tradition, focused on the future. Preparing students for the challenges of tomorrow.",
    cta: "Admission 2026",
    link: "/admission"
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10" />
          <img 
            src={slides[current].image} 
            alt={slides[current].title} 
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 h-full relative z-20 flex items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent font-bold text-sm tracking-widest uppercase mb-6 backdrop-blur-md border border-accent/30"
              >
                {slides[current].subtitle}
              </motion.span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1]">
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "text-accent italic" : ""}>{word} </span>
                ))}
              </h1>
              <p className="text-xl text-blue-100/80 mb-10 leading-relaxed font-light max-w-xl">
                {slides[current].description}
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href={slides[current].link}>
                  <Button size="lg" className="bg-accent hover:bg-white hover:text-primary text-primary-foreground font-bold px-10 py-7 rounded-full text-lg shadow-2xl hover:shadow-accent/40 transition-all duration-300 group whitespace-nowrap min-w-max">
                    {slides[current].cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform shrink-0" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-7 rounded-full text-lg backdrop-blur-sm transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex items-center gap-4">
        <button 
          onClick={prev}
          className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-12 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === i ? "w-12 bg-accent" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
