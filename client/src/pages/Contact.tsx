import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          We are here to help. Reach out to us for any queries.
        </p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h2>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Campus Address</h3>
                <p className="text-slate-600 leading-relaxed">
                  S.M. Inter College,<br />
                  Delhi Road, Civil Lines,<br />
                  Saharanpur, Uttar Pradesh - 247001
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Phone Numbers</h3>
                <p className="text-slate-600">Office: +91 123 456 7890</p>
                <p className="text-slate-600">Admissions: +91 987 654 3210</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Email Address</h3>
                <p className="text-slate-600">info@smintercollege.edu.in</p>
                <p className="text-slate-600">principal@smintercollege.edu.in</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 text-primary">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Office Hours</h3>
                <p className="text-slate-600">Monday - Saturday: 8:00 AM - 2:00 PM</p>
                <p className="text-slate-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto bg-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.887856488974!2d77.53856131511855!3d29.96783398191295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeb6919246a49%3A0xc6222c152a4e990c!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1645431289123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Saharanpur Map"
            ></iframe>
          </div>

        </div>
      </div>
    </Layout>
  );
}
