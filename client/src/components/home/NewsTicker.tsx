import { Bell } from "lucide-react";
import { motion } from "framer-motion";

export function NewsTicker() {
  return (
    <div className="bg-primary text-white py-3 relative overflow-hidden flex items-center shadow-lg z-20 border-b border-white/5">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-3 font-bold bg-primary pr-6 z-10 shrink-0 border-r border-white/10">
          <div className="relative">
            <Bell className="h-5 w-5 text-accent" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-ping" />
          </div>
          <span className="uppercase text-xs tracking-[0.2em] font-black">Announcements</span>
        </div>
        
        <div className="overflow-hidden flex-1 relative h-6 ml-6">
          <motion.div 
            animate={{ x: ["100%", "-100%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute whitespace-nowrap flex gap-20 text-sm font-medium items-center text-blue-50"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Admissions open for academic year 2026-27. Apply online today!
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Our cricket team won the District Championship!
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Annual Sports Day scheduled for March 15th, 2026.
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              New Science Lab inauguration by District Magistrate on Feb 20th.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
