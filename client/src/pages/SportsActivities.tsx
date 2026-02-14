import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Palette, Music, Camera } from "lucide-react";

export default function SportsActivities() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Sports & Activities</h1>
          <p className="text-muted-foreground text-lg">Nurturing talents beyond the classroom.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Dumbbell className="w-6 h-6 text-accent" />
                Physical Education & Sports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>State-of-the-art facilities for a variety of sports including:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-secondary rounded text-sm">Cricket & Football</div>
                <div className="p-2 bg-secondary rounded text-sm">Basketball & Volleyball</div>
                <div className="p-2 bg-secondary rounded text-sm">Badminton & Table Tennis</div>
                <div className="p-2 bg-secondary rounded text-sm">Athletics & Yoga</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Music className="w-6 h-6 text-accent" />
                Performing Arts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Comprehensive music and dance programs catering to diverse interests.</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Vocal and Instrumental Music training</li>
                <li>Classical and Modern Dance forms</li>
                <li>School Choir and Orchestra</li>
                <li>Annual Cultural Fest</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Palette className="w-6 h-6 text-accent" />
                Visual Arts & Crafts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Encouraging creativity through various artistic mediums.</p>
              <div className="flex flex-wrap gap-2">
                {["Painting", "Sculpture", "Pottery", "Digital Art", "Graphic Design"].map(art => (
                  <span key={art} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold border border-accent/20">
                    {art}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Camera className="w-6 h-6 text-accent" />
                Clubs & Societies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>• Photography Club</li>
                <li>• Debate Society</li>
                <li>• Eco Warriors</li>
                <li>• Coding Club</li>
                <li>• Literary Club</li>
                <li>• Drama Club</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
