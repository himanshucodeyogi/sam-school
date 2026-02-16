import { Link } from "wouter";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-10 brightness-0 invert opacity-90" />
              <span className="font-serif font-bold text-xl text-white">S.M. Inter College</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students with knowledge, character, and skills for a bright future. A tradition of excellence since 1975.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/admission" className="hover:text-white transition-colors">Admission Info</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Campus Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni Network</a></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-serif font-bold text-lg text-white mb-4">Academics</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports & Activities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">School Calendar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg text-white mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Civil Lines, Saharanpur,<br />Uttar Pradesh - 247001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@smintercollege.edu.in</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} S.M. Inter College, Saharanpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
