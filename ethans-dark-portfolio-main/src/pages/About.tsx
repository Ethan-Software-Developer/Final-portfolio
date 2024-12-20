import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Menu,
  X,
  Home,
  FolderOpen,
  User,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "/" },
    {
      icon: <FolderOpen className="w-5 h-5" />,
      label: "Projects",
      href: "/projects",
    },
    { icon: <User className="w-5 h-5" />, label: "About", href: "/about" },
    { icon: <Mail className="w-5 h-5" />, label: "Contact", href: "/contact" },
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

const skills = [
  { name: "Tableau", percentage: 87, category: "Data" },
  { name: "Microsoft Office", percentage: 90, category: "Tools" },
  { name: "Git", percentage: 90, category: "Development" },
  { name: "Python", percentage: 70, category: "Development" },
  { name: "HTML, CSS, JavaScript", percentage: 68, category: "Development" },
  { name: "SQL", percentage: 68, category: "Data" },
  { name: "Jupyter Notebook", percentage: 80, category: "Data" },
  { name: "Docker", percentage: 65, category: "DevOps" },
  { name: "Networking", percentage: 65, category: "Infrastructure" },
  { name: "Customer Service", percentage: 90, category: "Soft Skills" },
  { name: "Windows Troubleshooting", percentage: 90, category: "Support" },
  { name: "Tensorflow & LLM", percentage: 55, category: "AI/ML" },
];

const ExperienceCard = ({ title, period, description, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative pl-8 pb-8 border-l-2 border-purple-500/20 last:pb-0"
  >
    <div className="absolute -left-3 top-0 bg-gray-900 p-2 rounded-full border-2 border-purple-500/20">
      <Icon className="w-4 h-4 text-purple-400" />
    </div>
    <h3 className="text-xl font-medium text-purple-400 break-words">{title}</h3>
    <p className="text-sm text-white/60 mb-2 flex items-center gap-2 flex-wrap">
      <Calendar className="w-4 h-4 inline" /> {period}
    </p>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const SkillBar = ({ skill, percentage, category }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative w-full"
  >
    <div className="flex justify-between mb-1 flex-wrap gap-1">
      <span className="text-sm font-medium text-white">{skill}</span>
      <span className="text-xs text-purple-400">{category}</span>
    </div>
    <div className="h-2 bg-gray-700 rounded-full overflow-hidden w-full">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
      />
    </div>
  </motion.div>
);

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-12 overflow-x-hidden">
      <MobileNav />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <motion.div {...fadeIn} className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent px-2"
            {...fadeIn}
          >
            About Me
          </motion.h1>

          <div className="space-y-6 sm:space-y-8">
            {/* Experience Section */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2 px-2">
                <Briefcase className="text-purple-400" />
                Professional Experience
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <ExperienceCard
                  icon={Briefcase}
                  title="KRISH LITE MECHANICS - Operation Supervisor"
                  period="2018 - 2024"
                  description="Leveraged 6 years of customer service experience to deal with customers, diagnose and repair complex IT issues, and improve efficiency with data-driven strategies."
                />
                <ExperienceCard
                  icon={Award}
                  title="Hosting - Deployment"
                  period="2023 - 2024"
                  description="Deployed interactive data dashboards and managed server hosting, optimizing performance with Linux (Ubuntu) and integrating features to enhance user experience."
                />
                <ExperienceCard
                  icon={Award}
                  title="GitHub Collaboration AI Web Application"
                  period="2023 - 2024"
                  description="Worked with developers on GitHub to build a cutting-edge AI web application, using version control and collaborative practices to ensure efficient development and integration."
                />
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2 px-2">
                <GraduationCap className="text-purple-400" />
                Education
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <ExperienceCard
                  icon={GraduationCap}
                  title="Harvard University CS50 Certificate"
                  period="2023 - 2024"
                  description="Completed Harvard's CS50 courses, mastering programming fundamentals and advanced Python techniques."
                />
                <ExperienceCard
                  icon={Award}
                  title="Google Analytics Certifications"
                  period="2024"
                  description="Applied data analysis skills to enhance website performance and support strategic decisions."
                />
                <ExperienceCard
                  icon={Award}
                  title="IBM Professional Certificates"
                  period="2023"
                  description="Completed certifications in Docker, Data Analysis with Python, SQL, and Deep Learning with TensorFlow."
                />
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-4 sm:p-6 md:p-8 border border-gray-800"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white px-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    category={skill.category}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
