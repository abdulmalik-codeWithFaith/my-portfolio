"use client";
import { Menu, Sun, Moon, Github, Linkedin, Twitter, Mail, ArrowRight, Code2, Zap, Users, Layout, Server, Smartphone, Wrench, CheckCircle, Trophy, Star, Send, Facebook, Download, Youtube } from 'lucide-react';
import Link from 'next/link';
export default function Experience(){
    return(
        <div className='bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen'>
            <nav className="fixed flex justify-between items-center p-3 top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        AM
                    </div>
                    <span className="font-semibold text-white text-lg sm:block">AbdulMalik</span>
                </div>
                <Link href="/" className="text-white">Back to home</Link>
            </nav>
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
                    <div>
                    <img src="/truemind.png" alt="truemind certificate" width="100%"/>
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