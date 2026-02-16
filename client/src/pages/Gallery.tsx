import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Campus", "Labs", "Events", "Sports"];

const galleryImages = [
  { id: 1, src: "/images/school-hero-1.png", category: "Campus", title: "Main Building" },
  { id: 2, src: "/images/gallery-lab.jpg", category: "Labs", title: "Physics Lab Experiment" },
  { id: 3, src: "/images/gallery-sports.jpg", category: "Sports", title: "Annual Sports Day" },
  { id: 4, src: "/images/gallery-computer.jpg", category: "Labs", title: "Computer Lab Session" },
  { id: 5, src: "/images/school-hero-2.png", category: "Campus", title: "Library" },
  { id: 6, src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800", category: "Events", title: "Cultural Fest" },
  { id: 7, src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800", category: "Sports", title: "Basketball Match" },
  { id: 8, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", category: "Labs", title: "Chemistry Lab" },
  { id: 9, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", category: "Events", title: "Prize Distribution" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <Layout>
      <div className="bg-slate-50 border-b border-slate-200 py-24 text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Visual Journey</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Campus <span className="text-accent italic">Gallery</span></h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl font-light mb-12">
              Glimpses of life at S.M. Inter College. From academic pursuits to cultural celebrations and sporting triumphs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 inline-flex">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                    filter === cat 
                      ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" 
                      : "text-slate-400 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative group rounded-[2.5rem] overflow-hidden shadow-lg aspect-square"
                >
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <span className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.category}</span>
                    <h3 className="text-white font-serif font-bold text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{image.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
