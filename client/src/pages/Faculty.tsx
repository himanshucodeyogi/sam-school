import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const faculty = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal",
    department: "Administration",
    education: "Ph.D. in Education Leadership",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Mr. Robert Chen",
    role: "Head of Science",
    department: "Science",
    education: "M.Sc. Physics, B.Ed.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
  },
  {
    name: "Ms. Elena Rodriguez",
    role: "Senior Coordinator",
    department: "Humanities",
    education: "M.A. English Literature",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    name: "Mr. David Wilson",
    role: "Athletic Director",
    department: "Sports",
    education: "M.P.Ed.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

export default function Faculty() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Our Faculty</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated educators committed to nurturing excellence and character in every student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member) => (
            <Card key={member.name} className="hover-elevate">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary/10">
                  <AvatarImage src={member.image} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                <p className="text-sm font-medium text-primary mb-1">{member.department}</p>
                <p className="text-xs text-muted-foreground">{member.education}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
