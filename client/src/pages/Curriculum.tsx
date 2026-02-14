import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code, FlaskConical, Languages } from "lucide-react";

export default function Curriculum() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Academic Curriculum</h1>
            <p className="text-muted-foreground text-lg">A holistic approach to modern education and excellence.</p>
          </div>

          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="primary">Primary (I-V)</TabsTrigger>
              <TabsTrigger value="middle">Middle (VI-VIII)</TabsTrigger>
              <TabsTrigger value="secondary">Secondary (IX-XII)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="primary">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-accent" />
                    Foundation Years
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Focus on literacy, numeracy, and social development through activity-based learning.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Core Subjects: English, Mathematics, Environmental Studies</li>
                    <li>Languages: Hindi, Regional Language</li>
                    <li>Co-curricular: Art, Music, Physical Education</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="middle">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FlaskConical className="w-6 h-6 text-accent" />
                    Exploration Phase
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Broadening horizons with integrated science and social studies.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Advanced Subjects: Physics, Chemistry, Biology</li>
                    <li>Social Sciences: History, Geography, Civics</li>
                    <li>Digital Literacy and Coding</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="secondary">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-6 h-6 text-accent" />
                    Specialization & Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Preparing students for higher education and competitive careers.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-md">
                      <h4 className="font-bold text-primary mb-2">Science Stream</h4>
                      <p className="text-sm">PCM/PCB with Information Practices or Physical Education.</p>
                    </div>
                    <div className="p-4 border rounded-md">
                      <h4 className="font-bold text-primary mb-2">Commerce Stream</h4>
                      <p className="text-sm">Accountancy, Business Studies, Economics and Math/Applied Math.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
