import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Handshake } from "lucide-react";

export default function AlumniNetwork() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Alumni Network</h1>
            <p className="text-muted-foreground text-lg">Connecting generations of excellence and tradition.</p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-accent" />
                  Our Global Community
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-blue max-w-none">
                <p>
                  Our alumni network spans across the globe, with members excelling in diverse fields
                  ranging from technology and medicine to arts and public service. We take immense pride
                  in the achievements of our former students who carry the values of our institution
                  wherever they go.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    Mentorship Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Connect with current students to share your experiences and guide the next generation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-accent" />
                    Alumni Meets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Regular gatherings and reunions to stay connected with your batchmates and the school.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
