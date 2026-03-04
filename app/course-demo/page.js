"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaBolt,
  FaCertificate,
  FaChevronDown,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import { MdAdsClick, MdEmail, MdOutlineOndemandVideo } from "react-icons/md";

const highlights = [
  { icon: MdOutlineOndemandVideo, title: "Lifetime Access" },
  { icon: FaBolt, title: "Downloadable Resources" },
  { icon: FaCertificate, title: "Certificate of Completion" },
];

const learnTopics = [
  {
    icon: FaSearch,
    title: "SEO Fundamentals",
    description: "Learn keyword research, on-page SEO, and ranking strategies.",
  },
  {
    icon: MdAdsClick,
    title: "Facebook & Instagram Ads",
    description: "Run targeted campaigns that convert clicks into customers.",
  },
  {
    icon: FaGlobe,
    title: "Content Marketing",
    description: "Build engaging content systems for long-term audience growth.",
  },
  {
    icon: FaBolt,
    title: "Conversion Optimization",
    description: "Improve landing pages and funnels for better conversion rates.",
  },
  {
    icon: MdEmail,
    title: "Email Marketing",
    description: "Create automated email journeys that nurture and sell.",
  },
];

const curriculum = [
  "Module 1 - Introduction to Digital Marketing",
  "Module 2 - SEO Foundations",
  "Module 3 - Social Media Marketing",
  "Module 4 - Paid Advertising",
  "Module 5 - Conversion Optimization",
];

const testimonials = [
  {
    quote: "This course helped me launch my first marketing campaign.",
    name: "Neeraj K.",
    role: "Freelancer",
  },
  {
    quote: "Very clear explanations and practical strategies.",
    name: "Sana A.",
    role: "Business Owner",
  },
  {
    quote: "I started getting better leads after applying the lessons.",
    name: "Rohit M.",
    role: "Agency Intern",
  },
];

const faqs = [
  {
    q: "Who is this course for?",
    a: "This course is for beginners, creators, founders, and professionals who want practical digital marketing skills.",
  },
  {
    q: "Do I get lifetime access?",
    a: "Yes, you get lifetime access to all modules and future minor updates.",
  },
  {
    q: "Is there a certificate?",
    a: "Yes, you receive a certificate of completion after finishing the course modules.",
  },
  {
    q: "Do I need prior experience?",
    a: "No prior experience is required. The course starts from fundamentals and moves to advanced tactics.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function CourseDemoPage() {
  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,_rgba(168,85,247,0.22),_transparent_35%),radial-gradient(circle_at_85%_25%,_rgba(59,130,246,0.2),_transparent_35%),linear-gradient(180deg,_#0b1020_0%,_#090f1d_45%,_#060a15_100%)]" />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        <div className="mb-8 inline-flex rounded-full border border-purple-300/40 bg-purple-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-purple-200">
          This is demo portfolio, not an actual one
        </div>

        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Master Digital Marketing in 30 Days
            </h1>
            <p className="max-w-xl text-base text-slate-300 md:text-lg">
              Learn SEO, paid ads, and social media marketing from industry experts.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_24px_rgba(147,51,234,0.45)] transition duration-300 hover:-translate-y-1">
                Enroll Now <FaArrowRight />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-purple-300/45 bg-white/[0.04] px-6 py-3 font-semibold text-purple-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]">
                View Curriculum
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <div className="mx-auto max-w-[470px] rounded-3xl border border-purple-300/30 bg-gradient-to-b from-purple-500/15 to-slate-900/80 p-5 shadow-[0_0_38px_rgba(147,51,234,0.35)] backdrop-blur-xl">
              <div className="rounded-2xl border border-purple-300/30 bg-slate-950/70 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl bg-purple-400/20 p-3">
                    <p className="text-xs text-purple-100">Traffic Growth</p>
                    <p className="mt-2 text-xl font-bold text-white">+148%</p>
                  </div>
                  <div className="rounded-xl bg-blue-400/20 p-3">
                    <p className="text-xs text-blue-100">Conversion Rate</p>
                    <p className="mt-2 text-xl font-bold text-white">6.9%</p>
                  </div>
                </div>
                <div className="mt-3 rounded-xl bg-slate-900/80 p-3">
                  <p className="text-xs text-slate-300">Ad Performance Dashboard</p>
                  <div className="mt-3 h-24 rounded-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Course Overview</h2>
          <p className="mt-4 max-w-4xl text-slate-300">
            This course is designed for beginners and professionals who want to
            master digital marketing strategies and grow businesses online.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -6, boxShadow: "0 0 24px rgba(168,85,247,0.3)" }}
                  className="rounded-2xl border border-purple-300/20 bg-white/[0.06] p-6 shadow-[0_10px_25px_rgba(2,6,23,0.5)] backdrop-blur-xl"
                >
                  <div className="inline-flex rounded-xl border border-purple-300/30 bg-purple-400/10 p-3 text-purple-200">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">What You Will Learn</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {learnTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.article
                  key={topic.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -5, boxShadow: "0 0 22px rgba(168,85,247,0.28)" }}
                  className="rounded-2xl border border-purple-300/20 bg-gradient-to-b from-white/[0.08] to-slate-900/85 p-6 backdrop-blur-xl"
                >
                  <div className="inline-flex rounded-xl border border-purple-300/30 bg-purple-400/10 p-3 text-purple-200">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{topic.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{topic.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="mt-20 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto h-[340px] w-full max-w-[360px] rounded-3xl border border-purple-300/25 bg-gradient-to-b from-purple-500/20 to-slate-900/80 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-purple-300/20 bg-white/[0.06] p-7 backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-purple-200">Instructor</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Rahul Sharma</h2>
            <p className="mt-4 text-slate-300">
              Digital marketing strategist with 8+ years of experience helping brands
              scale online.
            </p>
          </motion.div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Course Curriculum</h2>
          <div className="mt-8 space-y-3">
            {curriculum.map((module, index) => {
              const isOpen = openModule === index;
              return (
                <motion.div
                  key={module}
                  className="overflow-hidden rounded-2xl border border-purple-300/20 bg-white/[0.06] backdrop-blur-xl"
                >
                  <button
                    onClick={() => setOpenModule((prev) => (prev === index ? -1 : index))}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-medium text-white">{module}</span>
                    <FaChevronDown
                      className={`text-purple-200 transition ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="px-5 pb-4 text-sm text-slate-300"
                      >
                        Practical assignments, templates, and implementation tasks included.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Testimonials</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-purple-300/20 bg-white/[0.06] p-6 shadow-[0_10px_25px_rgba(2,6,23,0.5)] backdrop-blur-xl"
              >
                <p className="text-slate-200">&quot;{item.quote}&quot;</p>
                <p className="mt-4 font-semibold text-purple-200">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mx-auto max-w-xl rounded-3xl border border-purple-300/40 bg-gradient-to-b from-purple-500/20 to-slate-900/85 p-8 text-center shadow-[0_0_30px_rgba(168,85,247,0.35)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-purple-200">Enrollment</p>
            <p className="mt-2 text-5xl font-black text-white">$149</p>
            <ul className="mt-6 space-y-2 text-left text-sm text-slate-200">
              {[
                "Lifetime access",
                "Downloadable resources",
                "Certificate",
                "Community access",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <FaCheckCircle className="text-purple-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_24px_rgba(168,85,247,0.4)] transition duration-300 hover:-translate-y-1">
              Enroll Now <FaArrowRight />
            </button>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">FAQ</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-purple-300/20 bg-white/[0.06] backdrop-blur-xl"
                >
                  <button
                    onClick={() => setOpenFaq((prev) => (prev === index ? -1 : index))}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-medium text-white">{item.q}</span>
                    <FaChevronDown
                      className={`text-purple-200 transition ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="px-5 pb-4 text-sm text-slate-300"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-purple-300/35 bg-gradient-to-r from-purple-500/20 via-blue-500/15 to-purple-500/20 p-8 text-center shadow-[0_0_28px_rgba(168,85,247,0.35)] backdrop-blur-xl md:p-12"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Start Your Digital Marketing Journey Today
            </h2>
            <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 px-7 py-3 font-semibold text-slate-950 shadow-[0_0_22px_rgba(168,85,247,0.4)] transition duration-300 hover:-translate-y-1">
              Enroll Now <FaArrowRight />
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-purple-300/20 bg-slate-950/70 px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-purple-200">
              Course Overview
            </a>
            <a href="#" className="hover:text-purple-200">
              Curriculum
            </a>
            <a href="#" className="hover:text-purple-200">
              Pricing
            </a>
            <a href="#" className="hover:text-purple-200">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3 text-base">
            <a href="#" className="hover:text-purple-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-purple-200">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-purple-200">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-6xl text-xs text-slate-500">
          Copyright 2026 Course Demo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
