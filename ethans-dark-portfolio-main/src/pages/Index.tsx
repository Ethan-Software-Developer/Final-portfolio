import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Database,
  Code,
  LineChart,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Home,
  FolderOpen,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

// Mobile Navigation Component
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", to: "/" },
    {
      icon: <FolderOpen className="w-5 h-5" />,
      label: "Projects",
      to: "/projects",
    },
    { icon: <Code className="w-5 h-5" />, label: "Services", to: "/services" },
    { icon: <User className="w-5 h-5" />, label: "About", to: "/about" },
    { icon: <Mail className="w-5 h-5" />, label: "Contact", to: "/contact" },
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800"
        style={{ right: "1rem" }}
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
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 px-6 py-4"
                >
                  <Link
                    to={item.to}
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="text-lg font-medium">{item.label}</span>
                  </Link>
                </motion.div>
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

const FloatingIcon = ({ icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0, 1, 1],
      y: [20, 0, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className="absolute text-purple-500/20"
  >
    <Icon className="w-8 h-8" />
  </motion.div>
);

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4">
          <FloatingIcon icon={Database} delay={0} />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <FloatingIcon icon={Code} delay={0.5} />
        </div>
        <div className="absolute bottom-1/4 left-1/3">
          <FloatingIcon icon={LineChart} delay={1} />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6 relative">
            <h1 className="text-4xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ethan Sevenster
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <p className="text-xl md:text-2xl font-semibold text-white/90 mb-8">
              Data Analyst & Tech Enthusiast
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Transforming complex data into actionable insights. Specializing
              in SQL, Tableau, and Python with a passion for solving technical
              challenges and driving innovation.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4"
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg 
                text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all 
                transform hover:-translate-y-0.5 flex items-center justify-center gap-2 
                shadow-lg shadow-purple-500/25"
            >
              Explore My Work <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3 border border-purple-500/30 rounded-lg text-purple-400 
                font-medium hover:bg-purple-500/10 transition-all transform hover:-translate-y-0.5
                flex items-center justify-center gap-2"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
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
            <SocialLink
              href="mailto:ethansevenster621@gmail.com"
              icon={Mail}
              label="Email Contact"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Index;
