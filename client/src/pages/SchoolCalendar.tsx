import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Annual Sports Day",
    date: "March 15, 2024",
    time: "9:00 AM",
    location: "Main Ground"
  },
  {
    title: "Final Examinations",
    date: "April 1-15, 2024",
    time: "10:00 AM",
    location: "Examination Hall"
  },
  {
    title: "Summer Vacation Starts",
    date: "May 20, 2024",
    time: "N/A",
    location: "N/A"
  }
];

export default function SchoolCalendar() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">School Calendar</h1>
            <p className="text-muted-foreground text-lg">Stay updated with our upcoming events and academic schedule.</p>
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <Card key={event.title} className="hover-elevate">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarIcon className="w-4 h-4 text-accent" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
