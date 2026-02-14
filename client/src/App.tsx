import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Admission from "@/pages/Admission";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import AlumniNetwork from "@/pages/AlumniNetwork";
import Curriculum from "@/pages/Curriculum";
import Faculty from "@/pages/Faculty";
import Results from "@/pages/Results";
import SportsActivities from "@/pages/SportsActivities";
import SchoolCalendar from "@/pages/SchoolCalendar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/admission" component={Admission} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/alumni" component={AlumniNetwork} />
      <Route path="/curriculum" component={Curriculum} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/results" component={Results} />
      <Route path="/sports-activities" component={SportsActivities} />
      <Route path="/calendar" component={SchoolCalendar} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
