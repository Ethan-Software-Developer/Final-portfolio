import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Home,
  FolderOpen,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

// Mobile Navigation Component
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "#" },
    { icon: <FolderOpen className="w-5 h-5" />, label: "Projects", href: "#" },
    { icon: <User className="w-5 h-5" />, label: "About", href: "#" },
    { icon: <Mail className="w-5 h-5" />, label: "Contact", href: "#" },
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-300" />
        ) : (
          <Menu className="w-6 h-6 text-gray-300" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 px-6 py-4 text-gray-300 hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="text-lg font-medium">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all group"
  >
    <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
  </motion.a>
);

const ContactInfo = ({ icon: Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center space-x-3 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
  >
    <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
      <Icon className="w-5 h-5 text-purple-400" />
    </div>
    <span className="group-hover:text-white transition-colors break-all">
      {children}
    </span>
  </motion.div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "817dc59a-e627-42b4-8ae8-acf639a75b32");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.target.reset();
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 hover:bg-gray-700/50";

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20">
      {/* Mobile Navigation */}
      <MobileNav />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 relative"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-gray-800"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h2>

              <div className="space-y-4 mb-8">
                <ContactInfo icon={Mail}>
                  ethansevenster621@gmail.com
                </ContactInfo>
                <ContactInfo icon={Phone}>+27 761235651</ContactInfo>
                <ContactInfo icon={MapPin}>Cape Town, South Africa</ContactInfo>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Connect with me
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SocialLink
                    href="https://github.com/Ethan-Software-Developer"
                    icon={Github}
                    label="GitHub Profile"
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/ethan-sevenster-83b8a62a9/"
                    icon={Linkedin}
                    label="LinkedIn Profile"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-gray-800"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="hidden"
                  name="access_key"
                  value="817dc59a-e627-42b4-8ae8-acf639a75b32"
                />
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Your message"
                      className={`${inputClasses} h-32 resize-none`}
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
