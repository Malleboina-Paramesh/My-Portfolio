import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Handshake } from "lucide-react";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const formEl = form.current;
    if (
      !formEl?.user_name.value ||
      !formEl?.user_email.value ||
      !formEl?.message.value
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_899jsbm",
        "template_a5bqwro",
        formEl,
        "MvFhqzlQDOJ_-gDh4"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="Contact" className="bg-white text-slate-400 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-400">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 justify-center items-start">
          {/* Contact Form */}
          <div className="relative w-full max-w-xl">
            <div className="absolute -top-3 -left-3 w-full h-full border-t-4 border-l-4 border-slate-400 rounded-xl z-0 pointer-events-none"></div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white p-6 sm:p-8 rounded-xl border border-slate-300 shadow-md space-y-4 relative z-10 text-slate-600"
            >
              <div className="grid w-full gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="user_name" placeholder="Enter your name" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={4}
                />
              </div>
              <Button
                size="lg"
                variant="outline"
                type="submit"
                disabled={loading}
                className="gap-2 text-slate-600 hover:text-slate-800"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="relative w-full max-w-sm">
            <div className="absolute -top-3 -left-3 w-full h-full border-t-4 border-l-4 border-slate-400 rounded-xl z-0 pointer-events-none"></div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-300 shadow-md text-slate-600 space-y-4 text-sm relative z-10">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+916300014247" className="hover:text-slate-600">
                  +91 6300014247
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:malleboinaparamesh1@gmail.com"
                  className="hover:text-slate-600"
                >
                  malleboinaparamesh1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <a
                  href="https://www.google.com/maps/place/Yadadri+Bhuvanagiri,+Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-600"
                >
                  Yadadri Bhuvanagiri, Telangana
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Handshake className="w-6 h-6 text-primary" />
                <span className="text-slate-500">Let’s connect!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
