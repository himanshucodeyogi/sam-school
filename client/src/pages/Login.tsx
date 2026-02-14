import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, UserCog, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: `${type} Login Attempted`,
        description: "In this prototype, authentication is not connected to a backend.",
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img src="/images/logo.png" alt="Logo" className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold text-primary">Portal Login</h1>
            <p className="text-slate-500 mt-2">Access your S.M. Inter College dashboard</p>
          </div>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="student" className="flex items-center gap-2">
                <GraduationCap size={16} /> Student
              </TabsTrigger>
              <TabsTrigger value="staff" className="flex items-center gap-2">
                <UserCog size={16} /> Staff
              </TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <Card className="border-slate-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-serif">Student Login</CardTitle>
                  <CardDescription>Enter your Admission Number to access your account.</CardDescription>
                </CardHeader>
                <form onSubmit={(e) => handleLogin(e, "Student")}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-id">Admission Number / Roll No.</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input id="student-id" placeholder="e.g. 2024/1234" className="pl-10" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-pass">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input id="student-pass" type="password" placeholder="••••••••" className="pl-10" required />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button type="submit" className="w-full bg-primary" disabled={isLoading}>
                      {isLoading ? "Logging in..." : "Login as Student"}
                    </Button>
                    <a href="#" className="text-sm text-primary hover:underline text-center">Forgot password?</a>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="staff">
              <Card className="border-slate-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-serif">Staff Login</CardTitle>
                  <CardDescription>Official portal for faculty and administration.</CardDescription>
                </CardHeader>
                <form onSubmit={(e) => handleLogin(e, "Staff")}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="staff-email">Staff Email / ID</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input id="staff-email" type="text" placeholder="staff@smintercollege.edu.in" className="pl-10" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="staff-pass">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input id="staff-pass" type="password" placeholder="••••••••" className="pl-10" required />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button type="submit" className="w-full bg-slate-900" disabled={isLoading}>
                      {isLoading ? "Authenticating..." : "Login as Staff"}
                    </Button>
                    <a href="#" className="text-sm text-primary hover:underline text-center">Contact IT Support</a>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
          
          <p className="text-center text-sm text-slate-500 mt-8">
            By logging in, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
