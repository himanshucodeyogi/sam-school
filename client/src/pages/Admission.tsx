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
import { motion } from "framer-motion";
import { FileText, CheckCircle2, Calendar, Info } from "lucide-react";

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
      <div className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Join Our <span className="text-accent italic">Legacy</span></h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-xl font-light">
              Your journey towards a bright future starts here. Apply for the academic session 2026-27.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Fee Structure & Process */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Admission Process</h2>
              <div className="space-y-8">
                {[
                  { title: "Online Registration", desc: "Fill out the inquiry form with student details.", icon: FileText },
                  { title: "Document Submission", desc: "Submit birth certificate and previous report cards.", icon: CheckCircle2 },
                  { title: "Interaction/Test", desc: "Short interaction for primary, entrance test for middle school.", icon: Calendar },
                  { title: "Final Admission", desc: "Fee payment and enrollment confirmation.", icon: Info },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                      <step.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">{step.title}</h4>
                      <p className="text-slate-500 font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Fee Structure (2025-26)</h2>
              <div className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm bg-white">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-100 uppercase tracking-widest text-xs">
                    <tr>
                      <th className="px-8 py-6">Class</th>
                      <th className="px-8 py-6">Admission</th>
                      <th className="px-8 py-6">Monthly</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { cls: "VI - VIII", adm: "₹ 5,000", mon: "₹ 1,200" },
                      { cls: "IX - X", adm: "₹ 6,000", mon: "₹ 1,500" },
                      { cls: "XI - XII (Sci)", adm: "₹ 8,000", mon: "₹ 2,000" },
                      { cls: "XI - XII (Com)", adm: "₹ 7,500", mon: "₹ 1,800" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-6 font-bold text-slate-900">{row.cls}</td>
                        <td className="px-8 py-6 text-slate-600 font-medium">{row.adm}</td>
                        <td className="px-8 py-6 text-slate-600 font-medium">{row.mon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 h-fit"
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Admission Inquiry</h2>
            <p className="text-slate-500 mb-10 text-lg font-light">Fill out the form below and our admissions team will get back to you.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="studentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Student Name</FormLabel>
                        <FormControl>
                          <Input className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all px-6" placeholder="Full Name" {...field} />
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
                        <FormLabel className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Father's Name</FormLabel>
                        <FormControl>
                          <Input className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all px-6" placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="grade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Class Applying For</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all px-6">
                              <SelectValue placeholder="Select Class" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-2xl border-slate-100 shadow-xl">
                            {["Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"].map((c) => (
                              <SelectItem key={c} value={c} className="rounded-xl my-1">{c}</SelectItem>
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
                        <FormLabel className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Phone Number</FormLabel>
                        <FormControl>
                          <Input className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all px-6" placeholder="+91 00000 00000" {...field} />
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
                      <FormLabel className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[120px] rounded-2xl bg-slate-50 border-slate-100 focus:bg-white transition-all px-6 py-4 resize-none" placeholder="Any specific queries?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-16 rounded-2xl bg-primary hover:bg-accent hover:text-primary font-black uppercase tracking-[0.2em] shadow-xl transition-all duration-300">
                  Submit Inquiry
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
