"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaBolt,
  FaChartLine,
  FaComments,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaCode,
  FaCss3Alt,
  FaEnvelope,
  FaGlobe,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaPhoneAlt,
  FaQuoteLeft,
  FaReact,
  FaRocket,
  FaSyncAlt,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const navLinks = ["Home", "Projects", "Services", "Process", "Skills", "About", "Contact"];
const profile = {
  name: "Shyam Patidar",
  shortName: "Shyam",
  email: "shyampatidar1231",
  phone: "6265785883",
  instagram: "https://instagram.com/shyampatidar__4s40",
  instagramHandle: "@shyampatidar__4s40",
  photo: "/assets/shyam.png",
};

const services = [
  {
    title: "Landing Page Development",
    icon: FaLaptopCode,
    points: [
      "High converting landing pages",
      "Delivered within 24 hours",
      "Price starting INR 1500",
    ],
  },
  {
    title: "Website Setup",
    icon: FaCloudUploadAlt,
    points: ["Domain connection", "Hosting deployment"],
  },
  {
    title: "Website Redesign",
    icon: FaSyncAlt,
    points: ["Improve UI", "Improve conversion rates"],
  },
];

const trustPoints = [
  { icon: FaBolt, label: "Delivered within 24 hours" },
  { icon: FaMobileAlt, label: "Fully responsive design" },
  { icon: FaRocket, label: "Conversion-focused layouts" },
];

const projects = [
  {
    title: "Gym Landing Page",
    description:
      "Bold fitness funnel page designed to increase trial sign-ups with strong visual hierarchy.",
    stack: "Next.js, Tailwind CSS, Framer Motion",
    image: "/assets/Gym.png",
    demo: "/gym-demo",
  },
  {
    title: "Course Sales Page",
    description:
      "Course launch page with persuasive sections, trust badges, and optimized call-to-action blocks.",
    stack: "React, Tailwind CSS, Conversion Copy",
    image: "/assets/Sales.png",
    demo: "/course-demo",
  },
  {
    title: "Restaurant Website",
    description:
      "Fast restaurant website with responsive menu previews and booking-focused section flow.",
    stack: "Next.js, Responsive Design, SEO",
    image: "/assets/Restaurant.png",
    demo: "/restaurant-demo",
  },
];

const processSteps = [
  {
    title: "Requirement Discovery",
    description:
      "Understand business goals, target audience, and landing page objectives.",
    icon: FaComments,
  },
  {
    title: "Wireframe & Design",
    description:
      "Create a clean landing page layout focused on user experience and conversions.",
    icon: FaPencilRuler,
  },
  {
    title: "Development",
    description:
      "Develop a fast and responsive landing page using modern technologies.",
    icon: FaCode,
  },
  {
    title: "Domain & Deployment",
    description:
      "Connect domain, configure hosting, and deploy the website.",
    icon: FaGlobe,
  },
  {
    title: "Launch & Delivery",
    description:
      "Final testing, optimization, and delivery within 24 hours.",
    icon: FaRocket,
  },
];

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Responsive Design", icon: FaMobileAlt },
  { name: "Landing Page Optimization", icon: FaChartLine },
];

const testimonials = [
  {
    quote:
      "Shyam delivered our campaign landing page in one day and we saw stronger lead quality immediately.",
    name: "Aarav S.",
    role: "Fitness Coach",
  },
  {
    quote:
      "Smooth process, clean UI, and excellent mobile responsiveness. It felt premium from day one.",
    name: "Neha K.",
    role: "Course Creator",
  },
];

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const headingClass = "text-3xl font-bold tracking-tight text-white md:text-5xl";
const glassCardClass =
  "rounded-2xl border border-cyan-300/20 bg-gradient-to-b from-white/[0.08] to-slate-900/80 shadow-[0_14px_34px_rgba(2,6,23,0.55)] backdrop-blur-xl";
const primaryBtnClass =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.35)] transition duration-300";
const secondaryBtnClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/40 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 shadow-[0_0_18px_rgba(34,211,238,0.16)] transition duration-300 hover:border-cyan-300/80 hover:text-cyan-200";

function SectionDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    details: "",
  });

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const name = contactForm.name.trim();
    const email = contactForm.email.trim();
    const details = contactForm.details.trim();

    const formattedMessage = [
      "Hi Shyam, I want to discuss a landing page project.",
      "",
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      "Project Details:",
      details || "-",
    ].join("\n");

    const whatsappUrl = `https://wa.me/91${profile.phone}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.12),_transparent_30%),linear-gradient(180deg,_#020617_0%,_#0b1120_55%,_#020617_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-cyan-300/20 bg-slate-950/90 shadow-[0_12px_28px_rgba(2,6,23,0.55)]"
            : "border-white/10 bg-slate-950/70"
        } backdrop-blur-xl`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-5">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
          >
            {profile.shortName}
          </a>

          <button
            aria-label="Toggle menu"
            className="rounded-md border border-white/15 p-2 text-slate-100 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="hidden items-center gap-5 text-sm font-medium text-slate-300 lg:gap-7 md:flex">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative pb-1 transition hover:text-cyan-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:shadow-[0_0_10px_rgba(34,211,238,0.6)] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(34,211,238,0.45)" }}
            whileTap={{ scale: 0.98 }}
            className={`${primaryBtnClass} hidden px-5 py-2 md:inline-flex`}
          >
            Hire Me
          </motion.a>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="border-t border-white/10 bg-slate-950/95 md:hidden"
            >
              <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm text-slate-300">
                {navLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md py-2 transition hover:bg-white/[0.04] hover:text-cyan-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className={`${primaryBtnClass} px-4 py-2`}
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        <section id="home" className="relative scroll-mt-24 px-4 pb-24 pt-20 md:px-6 md:pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="flex flex-col items-start gap-6">
              <motion.span
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-full border border-cyan-300/45 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.22)]"
              >
                Freelance Landing Page Developer
              </motion.span>
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
              >
                Landing Pages That Convert Visitors Into Customers
              </motion.h1>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"
              >
                I&apos;m {profile.name}, a freelance web developer specializing in
                high-converting landing pages built within 24 hours.
              </motion.p>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ y: -4, boxShadow: "0 0 24px rgba(34,211,238,0.45)" }}
                  className={primaryBtnClass}
                >
                  View My Work <FaArrowRight />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -4 }}
                  className={secondaryBtnClass}
                >
                  Hire Me <FaCode />
                </motion.a>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-3"
              >
                {trustPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-200 shadow-[0_0_12px_rgba(34,211,238,0.12)] backdrop-blur-sm"
                    >
                      <Icon className="text-cyan-300" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto w-fit lg:ml-auto"
            >
              <div className="absolute -inset-6 -z-10 rounded-full bg-cyan-400/30 blur-3xl" />
              <div className="absolute -inset-2 rounded-full border border-cyan-300/50 shadow-[0_0_25px_rgba(34,211,238,0.3)]" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-cyan-300/80 shadow-[0_0_35px_rgba(34,211,238,0.35)] md:h-80 md:w-80"
              >
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  className="object-cover object-top transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </motion.div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-cyan-300/50 bg-slate-950/70 px-4 py-1 text-xs font-medium text-cyan-200">
                {profile.name}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="services"
          className="relative scroll-mt-24 px-4 py-20 md:px-6"
          {...sectionMotion}
        >
          <SectionDivider />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,_rgba(34,211,238,0.1),_transparent_35%),radial-gradient(circle_at_85%_70%,_rgba(14,165,233,0.08),_transparent_38%)]" />
          <div className="mx-auto max-w-6xl">
            <h2 className={`${headingClass} text-center`}>
              Services
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.14,
                  },
                },
              }}
              className="mt-8 grid gap-5 md:grid-cols-3"
            >
              {services.map((service) => (
                <motion.article
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -7, boxShadow: "0 0 30px rgba(34,211,238,0.22)" }}
                  className={`${glassCardClass} group p-6 transition duration-300`}
                >
                  <div className="mb-4 inline-flex rounded-xl border border-cyan-200/30 bg-cyan-300/10 p-3 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.28)] transition group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.45)]">
                    <service.icon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-200">{service.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <FaCheckCircle className="mt-0.5 text-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="relative scroll-mt-24 px-4 py-20 md:px-6"
          {...sectionMotion}
        >
          <SectionDivider />
          <div className="mx-auto max-w-6xl">
            <h2 className={headingClass}>Projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={`${glassCardClass} group overflow-hidden transition duration-300`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={360}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold text-cyan-200">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-wider text-cyan-100/80">
                      {project.stack}
                    </p>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, boxShadow: "0 0 20px rgba(34,211,238,0.38)" }}
                      className={`${primaryBtnClass} mt-5 rounded-lg px-4 py-2`}
                    >
                      Live Demo <FaGlobe />
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="relative px-4 py-20 md:px-6"
          {...sectionMotion}
          id="process"
        >
          <SectionDivider />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_30%,_rgba(34,211,238,0.14),_transparent_38%),radial-gradient(circle_at_80%_60%,_rgba(6,182,212,0.1),_transparent_38%)]" />
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className={headingClass}>Process</h2>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 120 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mx-auto mt-3 h-1 rounded-full bg-gradient-to-r from-cyan-300/90 to-cyan-500/90 shadow-[0_0_18px_rgba(34,211,238,0.55)]"
              />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.14,
                  },
                },
              }}
              className="relative mt-12 space-y-6"
            >
              <motion.div
                initial={{ scaleY: 0, opacity: 0.4 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute left-4 top-1 h-[calc(100%-0.4rem)] w-[2px] origin-top bg-gradient-to-b from-cyan-300 via-cyan-400/60 to-transparent shadow-[0_0_14px_rgba(34,211,238,0.5)] md:left-7"
              />

              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.article
                    key={step.title}
                    variants={{
                      hidden: { opacity: 0, x: 24, y: 20 },
                      visible: { opacity: 1, x: 0, y: 0 },
                    }}
                    transition={{ duration: 0.42, ease: "easeOut" }}
                    whileHover={{ y: -7, boxShadow: "0 0 34px rgba(34,211,238,0.22)" }}
                    className="relative ml-0 rounded-2xl border border-cyan-300/20 bg-gradient-to-b from-white/[0.09] to-slate-900/80 p-5 pl-16 shadow-[0_14px_32px_rgba(2,6,23,0.55)] backdrop-blur-xl transition duration-300 md:ml-8 md:pl-24"
                  >
                    <div className="absolute left-3 top-4 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] md:left-6" />
                    <div className="absolute left-0 top-8 h-0.5 w-5 bg-cyan-300/80 shadow-[0_0_8px_rgba(34,211,238,0.7)] md:w-8" />
                    <div className="absolute left-2 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/70 bg-cyan-300/20 text-sm font-bold text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.45)] md:left-4 md:h-11 md:w-11">
                      {index + 1}
                    </div>
                    <div className="flex items-start gap-3">
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
                        className="mt-0.5 rounded-xl border border-cyan-200/35 bg-cyan-300/10 p-2.5 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.32)]"
                      >
                        <Icon className="text-lg" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="relative scroll-mt-24 px-4 py-20 md:px-6"
          {...sectionMotion}
        >
          <SectionDivider />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,_rgba(34,211,238,0.12),_transparent_36%),radial-gradient(circle_at_75%_80%,_rgba(14,165,233,0.08),_transparent_36%)]" />
          <div className="mx-auto max-w-6xl">
            <h2 className={`${headingClass} text-center`}>
              Skills
            </h2>
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {skills.map(({ name, icon: Icon }) => (
                <motion.div
                  key={name}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -6, boxShadow: "0 0 30px rgba(34,211,238,0.25)" }}
                  className={`${glassCardClass} group p-4 transition duration-300`}
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-cyan-200/30 bg-cyan-300/10 p-2.5 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.25)] transition group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.45)]">
                      <Icon className="text-lg" />
                    </div>
                    <span className="text-sm font-medium text-slate-100">{name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="relative scroll-mt-24 px-4 py-20 md:px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionDivider />
          <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-white/[0.08] via-slate-900/60 to-cyan-950/30 p-8 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl md:p-10">
            <h2 className={`${headingClass} text-center`}>
              About Me
            </h2>
            <div className="mt-7 flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-cyan-300/40 bg-slate-900 shadow-[0_0_24px_rgba(34,211,238,0.35)]">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-base leading-relaxed text-slate-200 md:text-lg">
                  Hi, I&apos;m {profile.name}, a web developer focused on building fast
                  and conversion-optimized landing pages.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                  I help businesses turn visitors into customers using clean,
                  responsive designs and high-converting layouts.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="relative px-4 py-20 md:px-6"
          {...sectionMotion}
          id="testimonials"
        >
          <SectionDivider />
          <div className="mx-auto max-w-6xl">
            <h2 className={`${headingClass} text-center`}>
              Testimonials
            </h2>
            <motion.div
              className="mt-8 grid gap-5 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.16,
                  },
                },
              }}
            >
              {testimonials.map((item) => (
                <motion.article
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -6, boxShadow: "0 0 30px rgba(34,211,238,0.22)" }}
                  className={`${glassCardClass} rounded-2xl p-6 transition duration-300`}
                >
                  <div className="inline-flex rounded-lg border border-cyan-200/30 bg-cyan-300/10 p-2 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.3)]">
                    <FaQuoteLeft />
                  </div>
                  <p className="mt-4 text-slate-200">&quot;{item.quote}&quot;</p>
                  <p className="mt-5 font-semibold text-cyan-200">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="relative scroll-mt-24 px-4 py-20 md:px-6"
        >
          <SectionDivider />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_35%,_rgba(34,211,238,0.12),_transparent_38%),radial-gradient(circle_at_85%_70%,_rgba(6,182,212,0.1),_transparent_40%)]" />
          <div className="mx-auto max-w-6xl">
            <div>
              <h2 className={`${headingClass} text-left`}>Contact</h2>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 100 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-3 h-1 rounded-full bg-gradient-to-r from-cyan-300/90 to-cyan-500/90 shadow-[0_0_16px_rgba(34,211,238,0.55)]"
              />
              <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
                Tell me about your project and I will get back with a clear plan and
                timeline.
              </p>
            </div>

            <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`${glassCardClass} h-full p-6 md:p-7`}
              >
                <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Prefer WhatsApp for fastest response.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 rounded-xl border border-cyan-300/20 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
                  >
                    <FaEnvelope className="text-cyan-300" />
                    <span>{profile.email}</span>
                  </a>
                  <a
                    href={`tel:+91${profile.phone}`}
                    className="flex items-center gap-3 rounded-xl border border-cyan-300/20 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
                  >
                    <FaPhoneAlt className="text-cyan-300" />
                    <span>+91 {profile.phone}</span>
                  </a>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-cyan-300/20 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
                  >
                    <FaInstagram className="text-cyan-300" />
                    <span>{profile.instagramHandle}</span>
                  </a>
                </div>
                <motion.a
                  href={`https://wa.me/91${profile.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, boxShadow: "0 0 24px rgba(74,222,128,0.42)" }}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 px-5 py-3 font-medium text-slate-950 shadow-[0_0_20px_rgba(74,222,128,0.3)] transition duration-300"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </motion.a>
                <p className="mt-3 text-center text-xs text-slate-400">
                  Usually replies within 15 minutes
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`${glassCardClass} h-full p-6 md:p-7`}
                onSubmit={handleContactSubmit}
              >
                <h3 className="text-lg font-semibold text-white">Send a Message</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Share your goals and required delivery time.
                </p>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  className="space-y-4"
                >
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <label className="mb-1.5 block text-sm text-slate-300">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, name: event.target.value }))
                      }
                      className="w-full rounded-lg border border-cyan-300/20 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-300 focus:shadow-[0_0_16px_rgba(34,211,238,0.35)] focus:outline-none"
                    />
                  </motion.div>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <label className="mb-1.5 block text-sm text-slate-300">Email</label>
                    <input
                      type="email"
                      placeholder="Your email"
                      value={contactForm.email}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, email: event.target.value }))
                      }
                      className="w-full rounded-lg border border-cyan-300/20 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-300 focus:shadow-[0_0_16px_rgba(34,211,238,0.35)] focus:outline-none"
                    />
                  </motion.div>
                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <label className="mb-1.5 block text-sm text-slate-300">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Project details"
                      value={contactForm.details}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, details: event.target.value }))
                      }
                      className="w-full rounded-lg border border-cyan-300/20 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-300 focus:shadow-[0_0_16px_rgba(34,211,238,0.35)] focus:outline-none"
                    />
                  </motion.div>
                  <motion.button
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    whileHover={{ y: -4, boxShadow: "0 0 26px rgba(34,211,238,0.42)" }}
                    type="submit"
                    className={`${primaryBtnClass} w-full py-3.5`}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative border-t border-cyan-300/15 px-4 py-12 md:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,_rgba(34,211,238,0.1),_transparent_35%),radial-gradient(circle_at_85%_80%,_rgba(14,165,233,0.08),_transparent_35%)]" />
        <div className={`${glassCardClass} mx-auto max-w-6xl px-5 py-5 text-sm text-slate-300 md:px-7`}>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold text-white">{profile.name}</p>
              <p className="mt-1 text-xs text-slate-400">
                Freelance Landing Page Developer
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={profile.instagram}
                className="rounded-full border border-cyan-300/25 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                Instagram
              </a>
              <a
                href={`https://wa.me/91${profile.phone}`}
                className="rounded-full border border-cyan-300/25 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-cyan-300/25 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                Email
              </a>
            </div>
          </div>
          <div className="mt-5 border-t border-cyan-300/15 pt-4 text-xs text-slate-400">
            Copyright 2026 {profile.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
