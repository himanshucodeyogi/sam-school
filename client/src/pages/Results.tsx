import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Award, TrendingUp } from "lucide-react";

export default function Results() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Our Results</h1>
          <p className="text-muted-foreground text-lg">Celebrating academic excellence and consistent performance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-primary text-primary-foreground text-center">
            <CardContent className="pt-6">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-1">100%</div>
              <p className="text-sm opacity-90">Pass Percentage (Board Exams)</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground text-center">
            <CardContent className="pt-6">
              <Star className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-1">85%</div>
              <p className="text-sm opacity-90">Distinction Rate</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground text-center">
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-1">98.4%</div>
              <p className="text-sm opacity-90">Highest School Aggregate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-6 h-6 text-accent" />
                Academic Toppers 2024-25
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Rank</th>
                      <th className="text-left py-3 px-4">Student Name</th>
                      <th className="text-left py-3 px-4">Class</th>
                      <th className="text-right py-3 px-4">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { rank: "1st", name: "Aryan Sharma", class: "XII-Science", pct: "98.4%" },
                      { rank: "2nd", name: "Priya Patel", class: "XII-Commerce", pct: "97.2%" },
                      { rank: "3rd", name: "Rahul Verma", class: "X", pct: "96.8%" }
                    ].map((row) => (
                      <tr key={row.name} className="border-b last:border-0">
                        <td className="py-3 px-4 font-bold text-primary">{row.rank}</td>
                        <td className="py-3 px-4">{row.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.class}</td>
                        <td className="py-3 px-4 text-right font-bold">{row.pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
