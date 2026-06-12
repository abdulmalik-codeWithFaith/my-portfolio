"use client";
import Link from "next/link";
import { Menu, Sun, Moon, Github, Linkedin, Twitter, Mail, ArrowRight, Code2, Zap, Users, Layout, Server, Smartphone, Wrench, CheckCircle, Trophy, Star, Send, Facebook, Download, Youtube } from 'lucide-react';
export default function Projects(){
    return(
        <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
            <nav className="fixed flex justify-between items-center p-3 top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        AM
                    </div>
                    <span className="font-semibold text-white text-lg sm:block">AbdulMalik</span>
                </div>
                <Link href="/" className="text-white">Back to home</Link>
            </nav>

            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">All Projects</h2>
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
                        title: 'DevConnect',
                        desc: 'Full-stack Developer Collaboration Platform that helps software teams build, debug, and ship applications faster through live coding sessions, AI assistance, team workspaces, and community-driven knowledge sharing.',
                        tags: ['Nextjs', 'TypeScript', 'Tailwindcss', "Open API"],
                        gradient: 'from-orange-500 to-red-600',
                        tagBg: 'bg-blue-100 dark:bg-blue-900/30',
                        tagText: 'text-orange-600 dark:text-orange-400',
                        image: "/devconnect.png",
                        link: "https://devconnect-vert.vercel.app",
                        repo: "https://github.com/Ademolaadisa010/devconnect.git"
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
    )
}