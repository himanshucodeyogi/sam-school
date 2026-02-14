import { Bell } from "lucide-react";

export function NewsTicker() {
  return (
    <div className="bg-primary text-white py-2 relative overflow-hidden flex items-center shadow-md z-20">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 font-bold bg-primary pr-4 z-10 shrink-0">
          <Bell className="h-4 w-4 text-accent animate-pulse" />
          <span className="uppercase text-xs tracking-wider">Latest News:</span>
        </div>
        
        <div className="overflow-hidden flex-1 relative h-6">
          <div className="absolute whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-16 text-sm items-center">
            <span>📢 Admissions open for academic year 2026-27. Apply online today!</span>
            <span>🏆 Our cricket team won the District Championship!</span>
            <span>📅 Annual Sports Day scheduled for March 15th, 2026.</span>
            <span>🔬 New Science Lab inauguration by District Magistrate on Feb 20th.</span>
            <span>📝 Final Term Examinations starting from March 1st. View datesheet.</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
