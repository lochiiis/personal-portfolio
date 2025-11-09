"use client";

import Contact from "@/components/Contact";
import { Flower, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

export default function Home() {

  const phrases = [
    "Design-Driven Developer",
    "Frontend Visionary",
    "Detail Detective",
    "Software Sculptor",];

  const frontendSkills = [
    { src: "https://img.icons8.com/color/64/html-5--v1.png", alt: "HTML" },
    { src: "https://img.icons8.com/color/64/css3.png", alt: "CSS" },
    { src: "https://img.icons8.com/color/64/javascript--v1.png", alt: "JavaScript" },
    { src: "https://img.icons8.com/color/64/react-native.png", alt: "React" },
    { src: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000", alt: "Next.js" },
    { src: "https://img.icons8.com/fluency/64/tailwind_css.png", alt: "Tailwind CSS" },
    { src: "https://img.icons8.com/?size=64&id=EZQdGLNeo7JI&format=png&color=000000", alt: "Canva" },
    { src: "https://img.icons8.com/color/64/figma.png", alt: "Figma" },
  ];

  const backendSkills = [
    { src: "https://img.icons8.com/color/64/java-coffee-cup-logo--v1.png", alt: "Java" },
    { src: "https://img.icons8.com/color/64/python--v1.png", alt: "Python" },
    { src: "https://img.icons8.com/color/64/mongo-db.png", alt: "MongoDB" },
    { src: "https://img.icons8.com/color/64/mysql-logo.png", alt: "MySQL" },
    { src: "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=2A618E", alt: "PostgreSQL" },
    { src: "https://img.icons8.com/?size=64&id=90519&format=png&color=000000", alt: "Spring" },
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isFirstPhrase, setIsFirstPhrase] = useState(true);

  const projects = [
    {
      title: "GreenCity",
      description: "Eco-friendly app connecting the community with nature through events, activities, and rewards",
      image: "/image/IX.png",
      technologies: ["Figma"],
      link: "https://www.linkedin.com/posts/lochana-methsiluni_ix24-greencity-thevisionaries-activity-7242168836496465920-JUEr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeArdkBFEFDms5C_oW-yQF9GEixcVMqLkk",
    },
    {
      title: "PledgeIt",
      description: "Volunteer Management Platform.",
      image: "/image/pledgeIt.png",
      technologies: ["React", "Tailwind CSS", "FastApi", "MongoDB"],
      link: "https://pledgeit.live"
    },
    {
      title: "Dwellingz",
      description: "Property listing website.",
      image: "/image/estate.png",
      technologies: ["React", "CSS"],
      link: "https://github.com/lochiiis/EstateAgent",
    },
    {
      title: "Lochiiis Photobooth",
      description: "Interactive and fun photobooth.",
      image: "/image/photobooth.png",
      technologies: ["React", "Tailwind CSS"],
      link: "https://lochiiis-photobooth.vercel.app/",
    },

    {
      title: "BiomeX",
      description: "Website for SDG Goal 15 Life On Land.",
      image: "/image/BiomeX.png",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/lochiiis/GalleryPage",
    },
    {
      title: "Ticket Management",
      description: "Real-time event ticketing system.",
      image: "/image/ticket.png",
      technologies: ["Java", "SpringBoot", "React"],
      link: "https://github.com/lochiiis/Real-Time-Event-Ticketing-System",

    },
    {
      title: "SkyVoyage",
      description: "Online air ticket booking for a travel agency.",
      image: "/image/skyV.png",
      technologies: ["Figma"],
      link: "#",

    },
  ];

  useEffect(() => {
    let timeout;

    const typePhrase = async () => {
      // Add delay only for the first phrase
      if (isFirstPhrase) {
        await new Promise((resolve) => (timeout = setTimeout(resolve, 2000))); // 2 seconds delay for the first phrase
        setIsFirstPhrase(false); // Set the flag to false after the first phrase
      }

      for (let i = 0; i <= phrases[phraseIndex].length; i++) {
        setCurrentPhrase(phrases[phraseIndex].slice(0, i));
        await new Promise((resolve) => (timeout = setTimeout(resolve, 100))); // Typing speed
      }

      await new Promise((resolve) => (timeout = setTimeout(resolve, 1000))); // Pause before deleting

      for (let i = phrases[phraseIndex].length; i >= 0; i--) {
        setCurrentPhrase(phrases[phraseIndex].slice(0, i));
        await new Promise((resolve) => (timeout = setTimeout(resolve, 50))); // Deleting speed
      }

      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to the next phrase
    };

    typePhrase();

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [phraseIndex]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute  bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-violet-500 to-pink-400 bg-clip-text text-transparent">
            Hi I{`'`}m <br />Lochana Methsiluni
          </h1>


          {/* Type writer animation */}
          <div className="mb-8 flex justify-center items-center space-x-4">
            <p
              className="text-lg sm:text-xl text-purple-300 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {currentPhrase}
              <span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="ml-1"
              >
                <Flower className="w-5 h-5 inline-block animate-bounce" />
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="#projects" className="px-8 py-4 bg-linear-to-r from-blue-900 to-purple-600/50 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              View My Work
            </Link>
            <Link href="Lochana Methsiluni-CV.pdf" className="px-8 py-4 bg-linear-to-r from-blue-900 to-purple-600/50 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              Download Resume
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-md sm:text-lg text-white/80 mb-6 leading-relaxed">
                I am a passionate Computer Science undergraduate developer with a love for creating innovative web solutions. I thrive in innovative spaces, always eager to learn, collaborate, and push boundaries to create efficient and impactful solutions.
              </p>

            </div>

            <div>
              <Image
                src="/image/Lochana.png"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full mx-auto w-48 sm:w-60 md:w-72 border-4 border-white/20 hover:scale-105 transition-all duration-300"
              />
            </div>

          </div>
        </div>



        {/* Skills section */}
        <div className="sm:my-20 flex flex-wrap justify-center gap-8 px-4">
          <h2 className="text-xl md:text-2xl text-white font-semibold mb-2 sm:mb-8 w-full text-center">Languages and Tools I{`'`}m Growing With</h2>
          {/* Frontend */}
          <div className="bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-purple-900 w-full sm:w-80 md:w-[45%] lg:w-[30%]">
            <p className="text-md sm:text-lg md:text-2xl font-semibold mb-4 text-purple-300 text-center uppercase tracking-widest">
              Frontend Development
            </p>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-3 place-items-center">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={90}
                    height={90}
                    className="p-5 transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-800 text-white text-xs sm:text-sm px-1 py-1">
                      {skill.alt}
                    </div>
                  </div>
                  <span className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400 transition-all duration-300 rounded-lg shadow-lg group-hover:shadow-purple-500/50"></span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-blue-900 w-full sm:w-80 md:w-[45%] lg:w-[30%]">
            <p className="text-md sm:text-lg md:text-2xl font-semibold mb-4 text-blue-300 text-center uppercase tracking-widest">
              Backend & Database
            </p>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-3 place-items-center">
              {backendSkills.map((skill, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={90}
                    height={90}
                    className="p-5 transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-800 text-white text-xs sm:text-sm px-1 py-1">
                      {skill.alt}
                    </div>
                  </div>
                  <span className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 rounded-lg shadow-lg group-hover:shadow-blue-500/50"></span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="overflow-hidden rounded-t-2xl relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-all duration-10000 hover:object-bottom"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex-1 py-2 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      View project
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-20 relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-5"></div>
          <p className="text-md sm:text-lg text-white/80 max-w-2xl mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>
        <Contact />
      </section>

      {/* Contact Info */}
      <div className="my-3 text-center">
        <p className="text-white/70 mb-4">Or reach out directly:</p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-sm text-white/80">
          <a
            href="mailto:lochanamethsilu@gmail.com"
            className="flex items-center justify-center gap-2 text-pink-400 hover:text-pink-600 transition-colors"
          >
            <MailIcon className="w-4 h-4" />
            Email
          </a>

          <a
            href="https://linkedin.com/lochana-methsiluni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-blue-400 hover:text-blue-600 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            Linkedin
          </a>

          <a
            href="https://github.com/lochiiis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-purple-400 hover:text-purple-600 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
