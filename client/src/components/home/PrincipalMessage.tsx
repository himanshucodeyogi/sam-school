import { Quote } from "lucide-react";

export function PrincipalMessage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Image */}
          <div className="w-full md:w-1/3 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200">
              <img 
                src="/images/principal.png" 
                alt="Principal" 
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Decor elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0" />
            <div className="absolute top-8 -right-8 w-16 h-16 border-4 border-accent rounded-full z-20 hidden md:block" />
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-12 h-1 bg-accent rounded-full"></span>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Principal's Desk</span>
            </div>
            
            <h2 className="text-4xl font-serif font-bold text-slate-900">
              Education is the key to unlock the golden door of freedom.
            </h2>
            
            <Quote className="h-12 w-12 text-primary/10 absolute -mt-4 -ml-4" />
            
            <div className="text-slate-600 space-y-4 text-lg leading-relaxed relative z-10">
              <p>
                Welcome to S.M. Inter College. For over four decades, we have dedicated ourselves 
                to nurturing young minds and building character. Our mission goes beyond textbooks; 
                we strive to create responsible citizens who will lead with integrity.
              </p>
              <p>
                Our campus provides a blend of traditional values and modern pedagogy, ensuring 
                that every student discovers their unique potential. Join us in this journey of 
                excellence and holistic growth.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-serif font-bold text-xl text-primary">Dr. R.K. Sharma</h4>
              <p className="text-slate-500">Principal, M.A., B.Ed., Ph.D</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
