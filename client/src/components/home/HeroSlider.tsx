import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    image: "/images/school-hero-1.png",
    title: "Welcome to S.M. Inter College",
    subtitle: "Shaping Minds, Building Futures",
  },
  {
    image: "/images/school-hero-2.png",
    title: "World-Class Facilities",
    subtitle: "A modern environment for holistic learning",
  },
  {
    image: "/images/gallery-sports.jpg",
    title: "Excellence in Sports",
    subtitle: "Nurturing champions on and off the field",
  },
];

export function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-[500px] md:h-[600px] w-full">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white space-y-4">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-widest rounded-sm animate-in slide-in-from-bottom-4 duration-500 fade-in">
                  Est. 1975
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold max-w-3xl leading-tight animate-in slide-in-from-bottom-6 duration-700 fade-in delay-100">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-100 max-w-xl animate-in slide-in-from-bottom-8 duration-700 fade-in delay-200">
                  {slide.subtitle}
                </p>
                <div className="pt-4 animate-in slide-in-from-bottom-10 duration-700 fade-in delay-300">
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Explore Campus
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 right-12 flex gap-2">
          <CarouselPrevious className="static translate-y-0 text-white border-white/30 bg-black/20 hover:bg-white hover:text-black" />
          <CarouselNext className="static translate-y-0 text-white border-white/30 bg-black/20 hover:bg-white hover:text-black" />
        </div>
      </Carousel>
    </section>
  );
}
