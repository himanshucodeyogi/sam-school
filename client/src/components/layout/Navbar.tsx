import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Admission", path: "/admission" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> +91 123 456 7890</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@smintercollege.edu.in</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login" className="hover:text-accent transition-colors">Student Login</Link>
            <Link href="/login" className="hover:text-accent transition-colors">Staff Login</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3">
            <img src="/images/logo.png" alt="S.M. Inter College Logo" className="h-10 w-10 object-contain" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-primary">S.M. Inter College</span>
              <span className="text-[10px] tracking-wider text-muted-foreground uppercase">Saharanpur • Est. 1975</span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <a className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-primary font-bold border-b-2 border-primary" : "text-muted-foreground"
              }`}>
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/admission">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-md">Apply Now</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/images/logo.png" alt="Logo" className="h-10 w-10" />
                  <span className="font-serif font-bold text-lg">S.M. Inter College</span>
                </div>
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <a 
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium ${
                        location === link.path ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-2" />
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <a className="text-lg font-medium text-muted-foreground">Login Portals</a>
                </Link>
                <Link href="/admission" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4">Apply Now</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
