
import React from "react";
import { Mail, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-white text-center space-y-8">
      <h2 className="text-4xl font-bold text-yellow-500">Let’s Connect</h2>
      <p className="text-lg text-gray-300">
        Whether you’ve got a role in mind, a question about a project, or just want to nerd out over firmware and poetry — I’m all ears!
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <Button size="lg" className="gap-2" asChild>
          <a href="mailto:nikitaa.sinhaa@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5" /> Email Me
          </a>
        </Button>
        <Button size="lg" variant="outline" className="gap-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black" asChild>
          <a href="https://calendly.com/nikita-sinhaa" target="_blank" rel="noopener noreferrer">
            <CalendarClock className="w-5 h-5" /> Schedule a Call
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
