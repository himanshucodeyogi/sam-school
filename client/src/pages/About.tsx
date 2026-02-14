import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Building, History, Target } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Dedicated to fostering academic excellence and character development since 1975.
          </p>
        </div>
      </div>

      {/* History & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <History className="text-accent h-6 w-6" />
                <span className="text-primary font-bold uppercase tracking-wider">Our History</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Four Decades of Educational Leadership</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  S.M. Inter College was established in 1975 by the visionary educationist Late Shri R.K. Gupta with a mission 
                  to provide affordable yet high-quality education to the students of Saharanpur.
                </p>
                <p>
                  Starting with just 50 students in a small building, the college has grown into a premier institution 
                  spread over a lush green campus, catering to over 1500 students today. We have consistently 
                  produced district toppers and successful professionals who serve the nation.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-accent h-6 w-6" />
                <span className="text-primary font-bold uppercase tracking-wider">Our Vision</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Empowering Future Leaders</h3>
              <p className="text-slate-600 mb-6">
                To be a center of excellence in education that nurtures intellectual curiosity, critical thinking, 
                and social responsibility in students, preparing them to thrive in a globalized world while staying 
                rooted in their values.
              </p>
              <ul className="space-y-3">
                {[
                  "Academic Excellence",
                  "Character Formation", 
                  "Social Responsibility",
                  "Holistic Development"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Campus Infrastructure</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our campus is designed to provide an optimal environment for learning, sports, and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Classrooms",
                desc: "Spacious, well-ventilated classrooms equipped with digital learning aids.",
                icon: Building
              },
              {
                title: "Modern Science Labs",
                desc: "Fully equipped Physics, Chemistry, and Biology laboratories for practical learning.",
                icon: Building
              },
              {
                title: "Library & Reading Room",
                desc: "A vast collection of books, journals, and digital resources for students.",
                icon: Building
              },
              {
                title: "Computer Center",
                desc: "State-of-the-art computer lab with high-speed internet connectivity.",
                icon: Building
              },
              {
                title: "Sports Complex",
                desc: "Facilities for cricket, football, basketball, and indoor games.",
                icon: Building
              },
              {
                title: "Auditorium",
                desc: "A large multipurpose hall for cultural events, seminars, and assemblies.",
                icon: Building
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-serif">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
