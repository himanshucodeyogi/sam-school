import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact <span className="text-accent italic">Us</span></h1>
          <p className="text-slate-400 max-w-xl mx-auto text-xl font-light">
            We are here to help. Reach out to us for any queries or campus visits.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-10">Get in Touch</h2>
              
              <div className="space-y-10">
                {[
                  { icon: MapPin, title: "Campus Address", desc: "S.M. Inter College,\nDelhi Road, Civil Lines,\nSaharanpur, UP - 247001" },
                  { icon: Phone, title: "Phone Numbers", desc: "Office: +91 123 456 7890\nAdmissions: +91 987 654 3210" },
                  { icon: Mail, title: "Email Address", desc: "info@smintercollege.edu.in\nprincipal@smintercollege.edu.in" },
                  { icon: Clock, title: "Office Hours", desc: "Monday - Saturday: 8:00 AM - 2:00 PM\nSunday: Closed" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-500 text-lg leading-relaxed whitespace-pre-line font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-auto bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.887856488974!2d77.53856131511855!3d29.96783398191295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeb6919246a49%3A0xc6222c152a4e990c!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1645431289123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Saharanpur Map"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </Layout>
  );
}
