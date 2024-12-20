import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Briefcase,
  Calendar,
  ArrowUpRight,
  Search,
  Filter,
  Code,
  Database,
  Server,
  Menu,
  X,
  Home,
  FolderOpen,
  User,
  Mail,
} from "lucide-react";

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

const projects = [
  {
    title: "Proxmox Storage Server",
    description:
      "Enterprise-grade storage server implementation using Proxmox VE, featuring ZFS storage pools, automated backup solutions, and high-availability clustering for reliable data management.",
    image: "/proxmox.png",
    tags: ["Proxmox", "ZFS", "Linux", "Virtualization"],
    category: "Infrastructure",
    links: {
      github: "https://github.com/username/proxmox-storage",
      live: "https://proxmox-dashboard.com",
    },
    stats: {
      views: "2.4k",
      likes: "156",
      commits: "234",
    },
  },
  {
    title: "Professional Gym Website",
    description:
      "Modern fitness center website with class scheduling, membership management, trainer profiles, and integrated payment processing. Features responsive design and real-time availability updates.",
    image: "/Gym.png",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    category: "Web Development",
    links: {
      github: "https://github.com/username/fitness-center",
      live: "https://elite-fitness.com",
    },
    stats: {
      views: "3.1k",
      likes: "289",
      commits: "345",
    },
  },
  {
    title: "AI Tech Blog Platform",
    description:
      "Dynamic blog platform focused on artificial intelligence news, research papers, and industry insights. Features automated content recommendations and interactive code demonstrations.",
    image: "/preview.webp",
    tags: ["Next.js", "AI", "MDX", "TypeScript"],
    category: "Content Platform",
    links: {
      github: "https://github.com/username/ai-blog",
      live: "https://ai-insights-blog.com",
    },
    stats: {
      views: "2.8k",
      likes: "195",
      commits: "278",
    },
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Comprehensive data visualization platform with advanced analytics capabilities, custom reporting tools, and predictive modeling features for business intelligence.",
    image: "/dashboard.jpeg",
    tags: ["Python", "D3.js", "PostgreSQL", "Machine Learning"],
    category: "Data Analytics",
    links: {
      github: "https://github.com/username/analytics-platform",
      live: "https://data-insights-pro.com",
    },
    stats: {
      views: "1.9k",
      likes: "167",
      commits: "198",
    },
  },
];

const CategoryIcon = ({ category }) => {
  const icons = {
    Data: <Database className="w-5 h-5" />,
    "AI/ML": <Code className="w-5 h-5" />,
    DevOps: <Server className="w-5 h-5" />,
  };
  return icons[category] || <Code className="w-5 h-5" />;
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-30">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-700">
          <CategoryIcon category={project.category} />
          <span className="text-sm font-medium text-gray-300">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Stats */}
      <div className="absolute top-4 right-4 z-30">
        <div className="flex items-center gap-3 px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-700">
          <span className="text-sm text-gray-400">
            {project.stats.views} views
          </span>
          <span className="text-sm text-gray-400">
            {project.stats.likes} likes
          </span>
        </div>
      </div>

      <div className="relative h-64 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10"
          animate={{
            opacity: isHovered ? 0.9 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="relative z-20 p-6 -mt-20">
        <motion.h3
          className="text-2xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors"
          animate={{
            y: isHovered ? -5 : 0,
          }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 mb-4 line-clamp-2"
          animate={{
            y: isHovered ? -5 : 0,
          }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-6"
          animate={{
            y: isHovered ? -5 : 0,
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-500/10 rounded-full text-sm font-medium text-purple-400 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4"
          animate={{
            y: isHovered ? -5 : 0,
            opacity: isHovered ? 1 : 0.9,
          }}
        >
          {project.links && (
            <>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const FilterButton = ({ active, children, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      active
        ? "bg-purple-500 text-white"
        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
    }`}
  >
    {children}
  </motion.button>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Data", "AI/ML", "DevOps"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h1>

            <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    Current Role
                  </h2>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>Senior Full Stack Developer at PaySignal</span>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      September 2023 - Present
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4 mb-8">
              <Filter className="w-5 h-5 text-purple-400" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <FilterButton
                    key={category}
                    active={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </FilterButton>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
