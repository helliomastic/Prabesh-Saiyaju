import { useState } from "react";
import { AnimatedElement } from "../motion/AnimatedElement";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-purple" />,
      href: "mailto:saiyajuprabesh2526@gmail.com",
      label: "saiyajuprabesh2526@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: (
        <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-purple" />
      ),
      href: "https://www.linkedin.com/in/prabesh-saiyaju-185a99284/",
      label: "linkedin.com/in/prabesh-saiyaju",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-purple" />,
      href: "https://github.com/helliomastic",
      label: "github.com/helliomastic",
    },
    {
      name: "Instagram",
      icon: (
        <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-purple" />
      ),
      href: "https://www.instagram.com/zayn_25267/profilecard/?igsh=MTV0aGk1ZG51NjQwZA==",
      label: "instagram.com/zayn_25267",
    },
  ];

  return (
    <section
      id="contact"
      className="section-container py-12  sm:py-16 md:py-20"
    >
      <AnimatedElement>
        <h2 className="section-title text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl mb-3">
          Get In Touch
        </h2>
      </AnimatedElement>
      <AnimatedElement
        delay={0.2}
        className="max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-16 text-center px-2 xs:px-0"
      >
        <p className="text-white/70 text-xs xs:text-sm sm:text-base mt-8">
          Have a question or want to work together? Feel free to reach out using
          the form below or through my social media.
        </p>
      </AnimatedElement>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start px-2 xs:px-0">
        <AnimatedElement
          direction="left"
          className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8"
        >
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 xs:p-4 sm:p-6 flex items-start hover:bg-white/10 transition-colors duration-300"
            >
              <div className="p-2 sm:p-3 bg-portfolio-purple/20 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                {social.icon}
              </div>
              <div className="overflow-hidden">
                <h3 className="font-semibold text-sm xs:text-base sm:text-lg mb-1">
                  {social.name}
                </h3>
                <p className="text-white/70 text-xs xs:text-sm sm:text-base truncate">
                  {social.label}
                </p>
              </div>
            </a>
          ))}
          <AnimatedElement
            delay={0.4}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 xs:p-4 sm:p-6"
          >
            <h3 className="font-semibold text-sm xs:text-base sm:text-lg mb-2 sm:mb-3 md:mb-4">
              Location
            </h3>
            <div className="flex items-start">
              <div className="p-2 sm:p-3 bg-portfolio-purple/20 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-portfolio-purple" />
              </div>
              <p className="text-white/70 text-xs xs:text-sm sm:text-base">
                Kathmandu, Nepal
              </p>
            </div>
          </AnimatedElement>
        </AnimatedElement>
        <AnimatedElement direction="right">
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 xs:p-5 sm:p-8"
          >
            <div className="space-y-4 xs:space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs xs:text-sm font-medium text-white/80 mb-1 xs:mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus-visible:ring-portfolio-purple text-white text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs xs:text-sm font-medium text-white/80 mb-1 xs:mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus-visible:ring-portfolio-purple text-white text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs xs:text-sm font-medium text-white/80 mb-1 xs:mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus-visible:ring-portfolio-purple text-white text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs xs:text-sm font-medium text-white/80 mb-1 xs:mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 focus-visible:ring-portfolio-purple text-white text-sm"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90 text-sm"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ContactSection;
