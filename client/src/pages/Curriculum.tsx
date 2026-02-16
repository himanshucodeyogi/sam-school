import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code, FlaskConical, Languages } from "lucide-react";
import { motion } from "framer-motion";

export default function Curriculum() {
  return (
    <Layout>
      <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Academic <span className="text-accent italic">Curriculum</span></h1>
            <p className="text-blue-100 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              A holistic approach to modern education, designed to nurture intellectual curiosity and excellence.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-16 h-16 p-2 bg-slate-100 rounded-2xl">
              <TabsTrigger value="primary" className="rounded-xl font-bold uppercase tracking-widest text-xs data-[state=active]:bg-primary data-[state=active]:text-white transition-all">Primary (I-V)</TabsTrigger>
              <TabsTrigger value="middle" className="rounded-xl font-bold uppercase tracking-widest text-xs data-[state=active]:bg-primary data-[state=active]:text-white transition-all">Middle (VI-VIII)</TabsTrigger>
              <TabsTrigger value="secondary" className="rounded-xl font-bold uppercase tracking-widest text-xs data-[state=active]:bg-primary data-[state=active]:text-white transition-all">Secondary (IX-XII)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="primary">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
                  <div className="bg-primary p-12 text-white">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="flex items-center gap-4 text-3xl font-serif">
                        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                          <BookOpen className="w-8 h-8 text-accent" />
                        </div>
                        Foundation Years
                      </CardTitle>
                    </CardHeader>
                    <p className="text-blue-100 text-xl font-light leading-relaxed">Focus on literacy, numeracy, and social development through activity-based learning.</p>
                  </div>
                  <CardContent className="p-12 bg-white">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent">Core Subjects</h4>
                        <ul className="space-y-4">
                          {["English Language & Literature", "Mathematics & Logic", "Environmental Studies", "Hindi & Regional Languages"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                              <span className="w-2 h-2 bg-primary rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent">Beyond Academics</h4>
                        <ul className="space-y-4">
                          {["Creative Arts & Design", "Musical Exploration", "Physical Education", "Life Skills & Ethics"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                              <span className="w-2 h-2 bg-primary rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="middle">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
                  <div className="bg-slate-800 p-12 text-white">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="flex items-center gap-4 text-3xl font-serif">
                        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                          <FlaskConical className="w-8 h-8 text-accent" />
                        </div>
                        Exploration Phase
                      </CardTitle>
                    </CardHeader>
                    <p className="text-slate-300 text-xl font-light leading-relaxed">Broadening horizons with integrated science, social studies, and technical foundations.</p>
                  </div>
                  <CardContent className="p-12 bg-white">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent">Scientific Inquiry</h4>
                        <ul className="space-y-4">
                          {["Physics & Mechanics", "Chemistry & Matter", "Biological Sciences", "Geography & Environment"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                              <span className="w-2 h-2 bg-slate-800 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent">Future Skills</h4>
                        <ul className="space-y-4">
                          {["Information Technology", "Coding & Computational Thinking", "Public Speaking & Debate", "History & Civics"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                              <span className="w-2 h-2 bg-slate-800 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="secondary">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
                  <div className="bg-accent p-12 text-primary">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="flex items-center gap-4 text-3xl font-serif">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                          <Code className="w-8 h-8 text-primary" />
                        </div>
                        Specialization
                      </CardTitle>
                    </CardHeader>
                    <p className="text-primary/80 text-xl font-light leading-relaxed">Preparing students for higher education and competitive careers through rigorous academic streams.</p>
                  </div>
                  <CardContent className="p-12 bg-white">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-500">
                        <h4 className="text-2xl font-serif font-bold text-primary mb-4">Science Stream</h4>
                        <p className="text-slate-600 leading-relaxed mb-6">PCM/PCB with Information Practices, Biotechnology, or Physical Education.</p>
                        <ul className="space-y-3">
                          {["Advanced Physics", "Organic Chemistry", "Higher Mathematics", "Modern Biology"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-primary/70 uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-500">
                        <h4 className="text-2xl font-serif font-bold text-primary mb-4">Commerce Stream</h4>
                        <p className="text-slate-600 leading-relaxed mb-6">Accountancy, Business Studies, Economics and Applied Mathematics.</p>
                        <ul className="space-y-3">
                          {["Financial Accounting", "Macro Economics", "Business Management", "Legal Studies"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm font-bold text-primary/70 uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
