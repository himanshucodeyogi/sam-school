import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Events", "Sports", "Labs"];

const galleryImages = [
  { id: 1, src: "/images/school-hero-1.png", category: "Campus", title: "Main Building" },
  { id: 2, src: "/images/gallery-lab.jpg", category: "Labs", title: "Physics Lab Experiment" },
  { id: 3, src: "/images/gallery-sports.jpg", category: "Sports", title: "Annual Sports Day" },
  { id: 4, src: "/images/gallery-computer.jpg", category: "Labs", title: "Computer Lab Session" },
  { id: 5, src: "/images/school-hero-2.png", category: "Campus", title: "Library" },
  { id: 6, src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=800", category: "Events", title: "Cultural Fest" }, // Placeholder
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
      <div className="bg-slate-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Campus Gallery</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Glimpses of life at S.M. Inter College. From academic pursuits to cultural celebrations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={filter === cat ? "bg-primary text-white" : "hover:bg-slate-100"}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{image.category}</span>
                  <h3 className="text-white font-serif font-bold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
