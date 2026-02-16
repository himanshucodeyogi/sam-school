import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Annual Sports Day 2026",
    date: "March 15, 2026",
    time: "9:00 AM",
    location: "Main Ground",
    desc: "A day of athletic competition and school spirit."
  },
  {
    title: "Final Board Examinations",
    date: "April 1-15, 2026",
    time: "10:00 AM",
    location: "Examination Hall",
    desc: "Annual assessment for secondary school students."
  },
  {
    title: "New Science Lab Inauguration",
    date: "Feb 20, 2026",
    time: "11:30 AM",
    location: "Science Block",
    desc: "Opening of our state-of-the-art laboratory facilities."
  },
  {
    title: "Summer Vacation 2026",
    date: "May 20, 2026",
    time: "N/A",
    location: "N/A",
    desc: "School reopens on July 1st, 2026."
  }
];

export default function SchoolCalendar() {
  return (
    <Layout>
      <div className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">School <span className="text-accent italic">Calendar</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
            Stay updated with our upcoming events, academic milestones, and holidays.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-10">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="hover-elevate border-none shadow-xl rounded-[2.5rem] overflow-hidden group">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-primary p-10 flex flex-col items-center justify-center text-white md:w-48 shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors duration-500">
                      <span className="text-sm font-black uppercase tracking-widest mb-1">{event.date.split(',')[0].split(' ')[0]}</span>
                      <span className="text-4xl font-serif font-bold">{event.date.split(',')[0].split(' ')[1]}</span>
                      <span className="text-xs font-bold opacity-60 mt-1">{event.date.split(',')[1]}</span>
                    </div>
                    <div className="p-10 flex-grow bg-white flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-primary transition-colors">{event.title}</h3>
                        <p className="text-slate-500 font-light leading-relaxed">{event.desc}</p>
                        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                            <Clock className="w-4 h-4 text-accent" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                            <MapPin className="w-4 h-4 text-accent" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <button className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
