import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Code, Server, Network, Cpu, LineChart, Menu, X, Home, FolderOpen, User, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const services = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Analysis",
    description: "Expert data analysis using Tableau, SQL, and Python to derive meaningful insights from complex datasets.",
    skills: ["Tableau", "SQL", "Python", "Data Visualization"]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Full-stack web development with modern technologies and frameworks for responsive, user-friendly applications.",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "IT Infrastructure",
    description: "Comprehensive IT infrastructure management and troubleshooting services for optimal system performance.",
    skills: ["Docker", "Networking", "Windows", "Linux"]
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "System Administration",
    description: "Professional system administration services ensuring smooth operation of IT infrastructure.",
    skills: ["Server Management", "Security", "Maintenance"]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Hardware Solutions",
    description: "Expert PC and laptop repair services with comprehensive hardware and software troubleshooting.",
    skills: ["Hardware Repair", "Diagnostics", "Optimization"]
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description: "Implementation of AI and machine learning solutions using TensorFlow and modern ML frameworks.",
    skills: ["TensorFlow", "Deep Learning", "Python", "Data Science"]
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className="group relative"
      style={{
        animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
      }}
    >
      <Card className="h-full p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2">
        <div className="mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
            {service.icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {service.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors duration-300"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black" />
      
      <div className="relative container px-4 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            My Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Leveraging technology to deliver innovative solutions across data analysis, 
            web development, and IT infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
      
      {/* Decorative blurred circles */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl" />
    </section>
  );
};

export default Services;