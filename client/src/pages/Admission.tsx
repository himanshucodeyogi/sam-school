import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters."),
  fatherName: z.string().min(2, "Father's name is required."),
  grade: z.string({ required_error: "Please select a class." }),
  phone: z.string().min(10, "Enter a valid phone number."),
  message: z.string().optional(),
});

export default function Admission() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      fatherName: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Sent Successfully",
      description: "We will contact you shortly regarding the admission process.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Admissions</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Join the S.M. Inter College family. Build a foundation for a successful future.
        </p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Fee Structure */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Fee Structure (2025-26)</h2>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b">
                  <tr>
                    <th className="px-6 py-4">Class</th>
                    <th className="px-6 py-4">Admission Fee</th>
                    <th className="px-6 py-4">Monthly Fee</th>
                    <th className="px-6 py-4">Annual Charges</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { cls: "VI - VIII", adm: "₹ 5,000", mon: "₹ 1,200", ann: "₹ 3,000" },
                    { cls: "IX - X", adm: "₹ 6,000", mon: "₹ 1,500", ann: "₹ 4,000" },
                    { cls: "XI - XII (Science)", adm: "₹ 8,000", mon: "₹ 2,000", ann: "₹ 5,000" },
                    { cls: "XI - XII (Commerce)", adm: "₹ 7,500", mon: "₹ 1,800", ann: "₹ 5,000" },
                    { cls: "XI - XII (Arts)", adm: "₹ 7,000", mon: "₹ 1,600", ann: "₹ 5,000" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="px-6 py-4 font-medium text-slate-900">{row.cls}</td>
                      <td className="px-6 py-4 text-slate-600">{row.adm}</td>
                      <td className="px-6 py-4 text-slate-600">{row.mon}</td>
                      <td className="px-6 py-4 text-slate-600">{row.ann}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-md text-sm">
              <p><strong>Note:</strong> Fees are subject to change. Uniform and books are not included in the above structure.</p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">Admission Inquiry</h2>
            <p className="text-slate-500 mb-6">Fill out the form below and our admissions team will get back to you.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="studentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter student name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fatherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Father's Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter father's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="grade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Class Applying For</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Class" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"].map((c) => (
                              <SelectItem key={c} value={c}>{c}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any specific queries?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Submit Inquiry</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
