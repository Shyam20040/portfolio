"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaDumbbell,
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaPlay,
  FaTwitter,
} from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";

const stats = [
  { value: "8500+", label: "Members Joined" },
  { value: "3200", label: "Success Stories" },
  { value: "15K", label: "Happy Clients" },
];

const features = [
  {
    icon: MdFitnessCenter,
    title: "Personal Training",
    description:
      "Work 1-on-1 with certified trainers who keep every session focused on your goals.",
  },
  {
    icon: FaDumbbell,
    title: "Advanced Workout Plans",
    description:
      "Structured plans for fat loss, muscle building, and peak performance with real progress tracking.",
  },
  {
    icon: FaLeaf,
    title: "Nutrition Guidance",
    description:
      "Get practical meal guidance and habit coaching that supports your training results.",
  },
];

const pricing = [
  {
    name: "Basic Plan",
    price: "$29/month",
    items: ["Gym access", "Fitness classes"],
  },
  {
    name: "Pro Plan",
    price: "$59/month",
    featured: true,
    items: ["All basic features", "Personal trainer", "Nutrition guidance"],
  },
  {
    name: "Elite Plan",
    price: "$89/month",
    items: ["VIP access", "Advanced programs", "Coaching support"],
  },
];

const testimonials = [
  {
    quote: "Joining this gym completely changed my lifestyle.",
    name: "Arjun M.",
    role: "Software Engineer",
  },
  {
    quote: "Great trainers and amazing programs.",
    name: "Riya P.",
    role: "Marketing Executive",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function GymDemoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_80%_30%,_rgba(14,165,233,0.2),_transparent_35%),linear-gradient(180deg,_#020617_0%,_#020b1d_45%,_#020617_100%)]" />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        <div className="mb-8 inline-flex rounded-full border border-sky-300/40 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
          This is demo portfolio, not an actual one
        </div>

        <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Transform Your Body. Unleash Your Potential.
            </h1>
            <p className="max-w-xl text-base text-slate-300 md:text-lg">
              Join thousands of people improving their fitness with our expert
              programs.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_24px_rgba(59,130,246,0.45)] transition duration-300 hover:-translate-y-1">
                Start Your Fitness Journey <FaArrowRight />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-sky-300/45 bg-white/[0.04] px-6 py-3 font-semibold text-sky-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                View Programs <FaPlay />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="relative mx-auto h-[420px] max-w-[460px] overflow-hidden rounded-3xl border border-blue-300/35 bg-gradient-to-b from-blue-500/15 to-slate-900/70 shadow-[0_0_45px_rgba(59,130,246,0.35)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(56,189,248,0.35),_transparent_45%)]" />
              <div className="absolute bottom-0 left-1/2 h-[85%] w-[72%] -translate-x-1/2 rounded-t-[140px] bg-gradient-to-t from-slate-950 via-blue-600/40 to-cyan-300/20 blur-[1px]" />
              <div className="absolute bottom-[16%] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-400/30 blur-3xl" />
              <p className="absolute left-1/2 top-8 -translate-x-1/2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                Athlete Demo Visual
              </p>
            </motion.div>
          </motion.div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-sky-300/25 bg-white/[0.05] p-6 text-center shadow-[0_10px_25px_rgba(2,6,23,0.5)] backdrop-blur-xl"
            >
              <p className="text-3xl font-extrabold text-cyan-300 drop-shadow-[0_0_16px_rgba(34,211,238,0.5)]">
                {stat.value}
              </p>
              <p className="mt-2 text-slate-300">{stat.label}</p>
            </motion.article>
          ))}
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Features</h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="mt-8 grid gap-5 md:grid-cols-3"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  variants={fadeUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ y: -6, boxShadow: "0 0 26px rgba(59,130,246,0.32)" }}
                  className="rounded-2xl border border-sky-300/20 bg-gradient-to-b from-white/[0.08] to-slate-900/85 p-6 shadow-[0_10px_25px_rgba(2,6,23,0.5)] backdrop-blur-xl"
                >
                  <div className="inline-flex rounded-xl border border-sky-300/30 bg-sky-400/10 p-3 text-sky-200 shadow-[0_0_18px_rgba(56,189,248,0.3)]">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Pricing</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricing.map((plan, index) => (
              <motion.article
                key={plan.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className={`rounded-2xl border p-6 backdrop-blur-xl ${
                  plan.featured
                    ? "border-cyan-300/50 bg-gradient-to-b from-cyan-400/20 to-slate-900/85 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                    : "border-sky-300/20 bg-gradient-to-b from-white/[0.08] to-slate-900/85 shadow-[0_10px_25px_rgba(2,6,23,0.5)]"
                }`}
              >
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-3xl font-black text-cyan-300">{plan.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-200">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <FaCheckCircle className="text-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Testimonials</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 0 24px rgba(59,130,246,0.28)" }}
                className="rounded-2xl border border-sky-300/20 bg-white/[0.06] p-6 shadow-[0_10px_25px_rgba(2,6,23,0.5)] backdrop-blur-xl"
              >
                <p className="text-slate-200">&quot;{item.quote}&quot;</p>
                <p className="mt-4 font-semibold text-cyan-300">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-cyan-300/35 bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-cyan-500/20 p-8 text-center shadow-[0_0_28px_rgba(56,189,248,0.35)] backdrop-blur-xl md:p-12"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Start Your Fitness Transformation Today
            </h2>
            <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 px-7 py-3 font-semibold text-slate-950 shadow-[0_0_22px_rgba(59,130,246,0.4)] transition duration-300 hover:-translate-y-1">
              Join Now <FaArrowRight />
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-sky-300/20 bg-slate-950/70 px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-cyan-300">GYMFORGE</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-cyan-300">
              Home
            </a>
            <a href="#" className="hover:text-cyan-300">
              Programs
            </a>
            <a href="#" className="hover:text-cyan-300">
              Pricing
            </a>
            <a href="#" className="hover:text-cyan-300">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3 text-base">
            <a href="#" className="hover:text-cyan-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-cyan-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
