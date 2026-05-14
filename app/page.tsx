'use client';
import { motion } from "framer-motion"
import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon, Github, Linkedin, Twitter, Mail, ArrowRight, Code2, Zap, Users, Layout, Server, Smartphone, Wrench, CheckCircle, Trophy, Star, Send, Facebook, Download, Youtube } from 'lucide-react';
import { FormEvent } from "react";

const Portfolio: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  const form = e.currentTarget;

  const formData = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    setStatus("Message sent successfully ✅");
    form.reset();
  } else {
    setStatus("Failed to send message ❌");
  }

  setLoading(false);
};

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <motion.nav 
      initial={{y:-50}}
      whileInView={{y:0}}
      transition={{duration:2}}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                AM
              </div>
              <span className="font-semibold text-lg sm:block">Abdul Malik</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Available for opportunities</span>
            </div>
            
            <motion.h1 
              initial={{y:100}}
              whileInView={{y:0}}
              transition={{duration:2}}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Full-Stack & Mobile</span>
              <br />Developer
            </motion.h1>
            
            <motion.p 
              initial={{y:100}}
              whileInView={{y:0}}
              transition={{duration:2}}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              Building scalable, performance-driven applications using modern technologies and cloud services like Firebase to solve real-world problems.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:1.5, type:"spring", stiffness:200}}
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:1.6, type:"spring", stiffness:200}}
                href="/Abdulmalik-CV.pdf"
                download
                className="w-full cursor-pointer sm:w-auto px-8 py-4 
                  bg-gray-100 dark:bg-gray-800 
                  text-gray-900 dark:text-white 
                  rounded-lg font-semibold 
                  hover:bg-gray-200 dark:hover:bg-gray-700 
                  transition-all duration-300 
                  flex items-center justify-center space-x-2"
              >
                <span>Download CV</span>
                <Download className="w-5 h-5" />
              </motion.a>

            </div>

            <div className="flex items-center justify-center space-x-6 mt-12">
              {[
                { Icon: Github, href: 'https://github.com/Ademolaadisa010' },
                { Icon: Facebook, href: 'https://web.facebook.com/base.man.304047?_rdc=1&_rdr#' },
                { Icon: Twitter, href: 'https://x.com/broskiprop94216' },
                { Icon: Youtube, href: 'https://youtube.com/@codewithfaith001?si=dNlCC8Z-4oaG03dR' },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a passionate Fullstack and Mobile Developer with experience building scalable, high-performance applications. I have successfully shipped multiple projects, delivering reliable and user-focused solutions from concept to deployment.

My approach combines clean architecture, modern technologies, and user-centric design to create products that make a real impact. I focus on writing maintainable, efficient code while ensuring seamless user experiences across web and mobile platforms.

I enjoy working both independently and in collaborative teams, continuously improving my skills and delivering solutions that scale with business needs.
            </p>
          </div>

          <div 
            
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { Icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable code following industry best practices and design patterns.', bgColor: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600 dark:text-blue-400' },
              { Icon: Zap, title: 'Performance', desc: 'Optimizing applications for speed, efficiency, and exceptional user experiences.', bgColor: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-600 dark:text-purple-400' },
              { Icon: Users, title: 'Collaboration', desc: 'Working effectively in teams, communicating clearly, and delivering results together.', bgColor: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-600 dark:text-green-400' }
            ].map(({ Icon, title, desc, bgColor, iconColor }, idx) => (
              <motion.div key={idx} 
                  initial={{opacity:0, y:100}}
                  whileInView={{opacity:1, y:0}}
                  transition={{type:"spring", stiffness:200}}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Tech Stack</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Technologies I work with to build exceptional products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Layout, title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript','Javascript', 'Vue.js', 'Tailwind CSS', 'Redux',], bgColor: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600 dark:text-blue-400' },
              { Icon: Server, title: 'Backend', skills: ['Node.js', "Supabase", 'Firebase', 'PostgreSQL', 'MongoDB', 'REST APIs'], bgColor: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-600 dark:text-green-400' },
              { Icon: Smartphone, title: 'Mobile', skills: ['React Native', 'Expo', 'iOS', 'Android'], bgColor: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-600 dark:text-purple-400' },
              { Icon: Wrench, title: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Figma'], bgColor: 'bg-orange-100 dark:bg-orange-900/30', iconColor: 'text-orange-600 dark:text-orange-400' }
            ].map(({ Icon, title, skills, bgColor, iconColor }, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Real-world applications built with modern technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AmTechy',
                desc: 'Full-stack edtech platform with AI-guided and tutor-led learning, personalized learning paths, and progress tracking. Built for scalability and learner growth.',
                tags: ['Next.js', 'Typescript', 'Tailwindcss', 'Firebase'],
                gradient: 'from-blue-500 to-purple-600',
                tagBg: 'bg-blue-100 dark:bg-blue-900/30',
                tagText: 'text-blue-600 dark:text-blue-400',
                image: "/amtechy.png",
                link: "https://www.amtechy.name.ng",
                repo: "https://github.com/Ademolaadisa010/AmTechy.git",
              },
              {
                title: 'SkillBridge',
                desc: 'Full-stack service marketplace connecting users with verified local skilled workers, featuring profile verification, job requests, and secure communication.',
                tags: ['Nextjs', 'Firebase', 'Typescript', 'Tailwindcss'],
                gradient: 'from-green-500 to-teal-600',
                tagBg: 'bg-green-100 dark:bg-green-900/30',
                tagText: 'text-green-600 dark:text-green-400',
                image: "/skillbridge.png",
                link: "https://skill-bridge-liard-nine.vercel.app/",
                repo: "https://github.com/Ademolaadisa010/SkillBridge.git",
              },
              {
                title: 'Nervo',
                desc: 'Full-stack AI Interview platform that helps job seekers or student build their confidence and prepare them for real interview.',
                tags: ['Nextjs', 'TypeScript', 'Gemini', 'Firebase', "Tailwindcss"],
                gradient: 'from-orange-500 to-red-600',
                tagBg: 'bg-orange-100 dark:bg-orange-900/30',
                tagText: 'text-orange-600 dark:text-orange-400',
                image: "/nervo.png",
                link: "https://nervo.vercel.app/",
                repo: "https://github.com/Ademolaadisa010/EduFlow.git"
              },
              {
                title: 'TokenShield',
                desc: 'AI-powered crypto safety platform helping users analyze digital assets, detect risky tokens, avoid FOMO trading, and make smarter trading decisions in real time.',
                tags: ['Nextjs', 'Typescript', 'Gemini', "web3"],
                gradient: 'from-orange-500 to-red-600',
                tagBg: 'bg-orange-100 dark:bg-orange-900/30',
                tagText: 'text-orange-600 dark:text-orange-400',
                image: "/token.png",
                link: "https://token-shield.vercel.app/",
                repo: "https://github.com/Ademolaadisa010/TokenShield.git"
              },
              {
                title: 'EduFlow',
                desc: 'Full-stack school management system enabling real-time attendance tracking, online fee collection, and seamless result management.',
                tags: ['Nextjs', 'TypeScript', 'Tailwindcss', 'Firebase'],
                gradient: 'from-orange-500 to-red-600',
                tagBg: 'bg-orange-100 dark:bg-orange-900/30',
                tagText: 'text-orange-600 dark:text-orange-400',
                image: "/eduflow.png",
                link: "https://edu-flow-alpha.vercel.app",
                repo: "https://github.com/Ademolaadisa010/EduFlow.git"
              },
              {
                title: 'EduBoost AI',
                desc: 'Full-stack AI learning platform that converts study materials into interactive summaries, quizzes, and explanations, with built-in peer and mentor collaboration.',
                tags: ['Nextjs', 'TypeScript', 'Tailwindcss', 'Gemini'],
                gradient: 'from-orange-500 to-red-600',
                tagBg: 'bg-orange-100 dark:bg-orange-900/30',
                tagText: 'text-orange-600 dark:text-orange-400',
                image: "/eduboost.png",
                link: "https://edu-boost-ai.vercel.app",
                repo: "https://github.com/Ademolaadisa010/EduBoost-ai.git"
              },
              {
                title: 'QuickAlert',
                desc: 'Full-stack AI-powered emergency response system for real-time accident reporting and hospital dispatch',
                tags: ['Nextjs', 'Typecript', 'Gemini', "Cloud"],
                gradient: 'from-blue-500 to-purple-600',
                tagBg: 'bg-blue-100 dark:bg-blue-900/30',
                tagText: 'text-blue-600 dark:text-blue-400',
                image: "/quickalert.png",
                link: "https://quickalertnigeria.vercel.app",
                repo: "https://github.com/Ademolaadisa010/quickalert.git"
              },
              {
                title: 'CoachCam',
                desc: 'Full-stack sports analytics platform with AI-powered video analysis, personalized performance feedback, and actionable insights for athletes and coaches.',
                tags: ['Nextjs', 'TypeScript', 'Tailwindcss', 'Cloud'],
                gradient: 'from-orange-500 to-red-600',
                tagBg: 'bg-orange-100 dark:bg-orange-900/30',
                tagText: 'text-orange-600 dark:text-orange-400',
                image: "/coachcam.png",
                link: "https://coach-cam-nu.vercel.app/",
                repo: "https://github.com/Bigoluwagentle/CoachCam.git"
              },
              {
                title: 'AgroAI',
                desc: 'Full-stack AI agriculture platform that detects crop diseases, provides instant recommendations, and improves farming productivity.',
                tags: ['Nextjs', 'TypeScript', 'Tailwindcss', "Open API"],
                gradient: 'from-orange-500 to-red-600',
                tagBg: 'bg-orange-100 dark:bg-orange-900/30',
                tagText: 'text-orange-600 dark:text-orange-400',
                image: "/agroai.png",
                link: "https://agro-ai-agvc.vercel.app/",
                repo: "https://github.com/Ademolaadisa010/AgroAI.git"
              },
              
            ].map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group">
                <div className={`h-48 bg-gradient-to-br bg-cover bg-center ${project.gradient} relative overflow-hidden`}>
                  <div className="w-full h-full bg-black/20 group-hover:scale-110 transition-transform duration-300">
                    <img src={`${project.image}`} alt='amtechy' />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-2 py-1 ${project.tagBg} ${project.tagText} rounded text-xs font-medium`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.link} target='_blank' className='flex-1'>
                    <button className="flex-1 cursor-pointer w-full px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center text-sm">
                      Live Demo
                    </button></a>
                    <a href={project.repo} target='_blank'>
                    <button className="px-4 py-2 cursor-pointer bg-gray-100 dark:bg-gray-700 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center">
                      <Github className="w-4 h-4" />
                    </button></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience & Achievements</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Building impactful solutions across various domains</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: 'Senior Frontend Developer',
                company: 'OBEKS AI',
                period: '2026 - Present',
                Icon: CheckCircle,
                items: [
                  'Developed and maintained responsive web applications for clients.',
                  'Built user interfaces using modern frontend technologies.',
                  'Collaborated with designers and backend developers to deliver functional products.',
                  "Optimized website performance and improved user experience.",
                  "Reviewed code and supported other developers in the team."
                ]
              },
              {
                title: 'Frontend Developer',
                company: 'GEEGSTACK ACADEMY',
                period: '2025 - Present',
                Icon: CheckCircle,
                items: [
                  'Teach students the fundamentals of frontend development including HTML, CSS, and JavaScript',
                  'Guide learners through building real-world projects with React.js',
                  'Explain API integration, and responsive design principles in simple, practical terms',
                  "Encourage hands-on coding, teamwork, and problem-solving during classes."
                ]
              },
              {
                title: 'Mobile Developer',
                company: 'Suhoor – Islamic Companion App',
                period: '2026',
                Icon: CheckCircle,
                items: [
                  'Built a cross-platform Islamic mobile application using React Native (Expo) and Expo Router',
                  'Developed features including Suhoor reminders, AI-powered Islamic Q&A, and Quran integration',
                  'Developed features including Suhoor reminders, AI-powered Islamic Q&A, and Quran integration',
                  'Implemented authentication flow and protected routes'
                ]
              },
              {
                title: 'Mobile Developer',
                company: 'FixMate',
                period: '2025',
                Icon: CheckCircle,
                items: [
                  'Developed the FixMate app, a platform where users can find verified workers for services.',
                  'Built and maintained mobile app features using modern frameworks React Native, Expo.',
                  'Ensured smooth user experience and responsive design for multiple devices.',
                  'Tested and debugged app to deliver a reliable and high-quality product.'
                ]
              },
              {
                title: 'Frontend Developer Intership',
                company: 'OBEKS AI',
                period: '2025 - 2026',
                Icon: CheckCircle,
                items: [
                  'Led a team of developers in designing and building websites for client projects.',
                  'Coordinated tasks, reviewed code, and ensured project deadlines were met.',
                  'Collaborated with designers and developers to deliver responsive and user-friendly websites.',
                  "Worked with modern web technologies to implement functional and scalable solutions.",
                  "Communicated with team members to maintain project quality and progress."
                ]
              },
              {
                title: 'Frontend Developer Intership',
                company: 'Truemind',
                period: '2026',
                Icon: CheckCircle,
                items: [
                  'Served as Frontend Lead at Trueminds, guiding the development of responsive and user-friendly web interfaces.',
                  'Built and delivered full-stack web applications independently, from concept to deployment.',
                  'Collaborated with backend developers and designers to integrate APIs and ensure seamless user experience.',
                  "Reviewed code, provided feedback, and ensured frontend consistency and best practices across projects.",
                  "Optimized application performance through testing, debugging, and continuous improvement."
                ]
              },
              {
                title: 'Frontend Developer Intership',
                company: 'HNG',
                period: '2025',
                Icon: CheckCircle,
                items: [
                  'Collaborated with a team of developers to design and build real-world web applications during the HNG Internship.',
                  'Contributed to frontend and backend development using modern web technologies.',
                  'Participated in code reviews, debugging, and feature implementation to improve product quality.',
                  "Maintained clear communication and teamwork to meet project goals and deadlines.",
                  "Worked closely with designers and teammates to deliver responsive and user-friendly interfaces."
                ]
              },
              {
                title: 'Freelance Developer',
                company: 'TOO SOFT COLLECTION',
                period: '2024',
                Icon: CheckCircle,
                items: [
                  'Developed a fully responsive e-commerce website for a clothing brand.',
                  'Built with React.js and JavaScript to display product images, prices, and details.',
                  "Implemented dynamic product listings to enhance user experience and engagement."
                ]
              },
              {
                title: 'Freelance Developer',
                company: 'OYAB AUTOS',
                period: '2025',
                Icon: CheckCircle,
                items: [
                  'Developed an e-commerce platform for a vehicle dealership.',
                  'Built with the latest technologies Next.js, JavaScript, and JSON for data management.',
                  "Implemented dynamic car listings displaying images, prices, and detailed descriptions."
                ]
              },
            ].map((exp, idx) => (
              <div key={idx} className="sticky top-0 bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <exp.Icon className={`w-5 h-5 ${exp.Icon === Trophy ? 'text-yellow-500' : 'text-green-500'} mt-0.5 flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What People Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Feedback from clients and collaborators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Abdulmalik is an outstanding frontend tutor. He simplifies complex topics, supports students with real projects, and inspires confidence in every session.",
                name: 'Abdulrosheed Ibrahim',
                role: 'Geestack Academy',
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                text: "He’s fast, reliable, and knows what he’s doing. Abdulmalik built a e ccomerce for our team in just a few days, and everything worked perfectly. Great communication and strong frontend skills.",
                name: 'Ayobami',
                role: '2Soft E-CCOMERCE',
                gradient: 'from-green-500 to-teal-600'
              },
              {
                text: "Abdulmalik exceeded our expectations. He took our Figma design and turned it into a pixel-perfect, mobile-responsive React app. His attention to detail, clean code structure, and smooth integration of APIs made the process effortless.",
                name: 'Oyab Autos',
                role: 'Car Dealer',
                gradient: 'from-orange-500 to-red-600'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{testimonial.text}</p>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full`}></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" name='name' className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" name="email" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Project Inquiry" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={6} name="message" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                  text-white rounded-lg font-semibold flex items-center justify-center space-x-2
                  transition-all duration-300
                  ${loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-xl hover:scale-105"}
                `}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
            </button>

              {status && (
                <p className="mt-4 text-center text-sm text-gray-600">
                  {status}
                </p>
              )}
            </form>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:alex@example.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>abdrosheedabdmalikad@gmail.com</span>
              </a>
              <a href="https://x.com/broskiprop94216" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a href="https://github.com/Ademolaadisa010" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 gap-10 flex md:flex-row flex-col px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="md:w-[25%] w-[100%] min-h-5">
         
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                AM
              </div>
              <span className="font-semibold text-lg sm:block">Abdul Malik</span>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">I help businesses grow online by building fast, modern, and responsive web and mobile apps.</p>
        </div>
        <div className="md:w-[25%] w-full min-h-5">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="flex gap-2 flex-col text-start">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <a
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors capitalize"
                >
                  {item}
                </a>
              ))}
            </div>
        </div>
        <div className="md:w-[25%] w-full min-h-5">
          <h4 className="font-semibold mb-4">Services</h4>
          <div className="flex gap-2 flex-col text-start">
              {['Frontend Web Development', 'Mobile App Development', 'UI/UX Implementation', 'Custom Web Applications', 'Maintenance & Support'].map((item) => (
                <a
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors capitalize"
                >
                  {item}
                </a>
              ))}
            </div>
        </div>
        <div className="md:w-[25%] w-full min-h-5">
          <h4 className="font-semibold mb-4">Social Media</h4>
          <div className="flex items-center space-x-6 mt-12">
              {[
                { Icon: Github, href: 'https://github.com/Ademolaadisa010' },
                { Icon: Facebook, href: 'https://web.facebook.com/base.man.304047?_rdc=1&_rdr#' },
                { Icon: Twitter, href: 'https://x.com/broskiprop94216' }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
        </div>
      </footer>
    </div>
    
  );
};

export default Portfolio;