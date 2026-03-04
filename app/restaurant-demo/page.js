"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";

const featuredDishes = [
  {
    name: "Grilled Steak",
    desc: "Juicy flame-grilled steak served with herb butter and roasted vegetables.",
    price: "$24",
  },
  {
    name: "Italian Pasta",
    desc: "Fresh handmade pasta in creamy tomato basil sauce with parmesan.",
    price: "$18",
  },
  {
    name: "Chef Special Pizza",
    desc: "Wood-fired pizza topped with mozzarella, smoked chicken, and olives.",
    price: "$21",
  },
];

const menu = {
  Starters: [
    { item: "Bruschetta", desc: "Toasted bread with tomato basil topping", price: "$8" },
    { item: "Soup of the Day", desc: "Fresh seasonal soup", price: "$7" },
  ],
  "Main Course": [
    { item: "Herb Chicken", desc: "Grilled chicken with garlic mashed potato", price: "$17" },
    { item: "Seafood Risotto", desc: "Creamy risotto with prawns and herbs", price: "$22" },
  ],
  Desserts: [
    { item: "Chocolate Lava Cake", desc: "Warm cake with vanilla ice cream", price: "$9" },
    { item: "Tiramisu", desc: "Classic coffee-flavored Italian dessert", price: "$10" },
  ],
  Drinks: [
    { item: "Fresh Orange Juice", desc: "Cold-pressed citrus blend", price: "$6" },
    { item: "Classic Mojito", desc: "Refreshing mint and lime cooler", price: "$8" },
  ],
};

const reviews = [
  { text: "Amazing food and wonderful atmosphere.", name: "Priya S." },
  { text: "Best dining experience in the city.", name: "Rahul M." },
  { text: "Excellent service and beautiful presentation.", name: "Ananya K." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function RestaurantDemoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,_rgba(251,146,60,0.25),_transparent_35%),radial-gradient(circle_at_80%_25%,_rgba(245,158,11,0.2),_transparent_35%),linear-gradient(180deg,_#120a05_0%,_#1a1209_45%,_#0f0b08_100%)]" />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        <div className="mb-8 inline-flex rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
          This is demo portfolio, not an actual one
        </div>

        <section className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center p-8 shadow-[0_0_35px_rgba(251,146,60,0.25)] md:p-14">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-900/65 to-amber-900/35" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative z-10 max-w-2xl"
          >
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Experience the Taste of Authentic Cuisine
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-200 md:text-lg">
              Delicious meals prepared with fresh ingredients and passion.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_20px_rgba(251,146,60,0.45)] transition duration-300 hover:-translate-y-1">
                Reserve a Table <FaArrowRight />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-amber-300/50 bg-white/[0.05] px-6 py-3 font-semibold text-amber-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_18px_rgba(251,146,60,0.35)]">
                View Menu
              </button>
            </motion.div>
          </motion.div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Featured Dishes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredDishes.map((dish, index) => (
              <motion.article
                key={dish.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, boxShadow: "0 0 26px rgba(251,146,60,0.28)" }}
                className="group overflow-hidden rounded-2xl border border-amber-300/20 bg-white/[0.06] shadow-[0_10px_25px_rgba(2,6,23,0.55)] backdrop-blur-xl"
              >
                <div className="h-44 bg-gradient-to-br from-amber-500/40 via-orange-500/35 to-slate-900 transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{dish.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{dish.desc}</p>
                  <p className="mt-4 text-lg font-bold text-amber-300">{dish.price}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Menu Preview</h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-8 grid gap-5 md:grid-cols-2"
          >
            {Object.entries(menu).map(([category, items]) => (
              <motion.article
                key={category}
                variants={fadeUp}
                className="rounded-2xl border border-amber-300/20 bg-gradient-to-b from-white/[0.08] to-slate-900/85 p-5 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold text-amber-200">{category}</h3>
                <div className="mt-4 space-y-3">
                  {items.map((entry) => (
                    <div
                      key={entry.item}
                      className="rounded-xl border border-amber-300/15 bg-slate-950/50 p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-white">{entry.item}</p>
                          <p className="text-sm text-slate-400">{entry.desc}</p>
                        </div>
                        <p className="font-semibold text-amber-300">{entry.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="mt-20 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="h-[340px] rounded-3xl border border-amber-300/25 bg-gradient-to-br from-amber-500/25 to-slate-900/80 shadow-[0_0_24px_rgba(251,146,60,0.22)]"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-amber-300/20 bg-white/[0.06] p-7 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">About Restaurant</h2>
            <p className="mt-4 text-slate-300">
              Our restaurant offers a unique dining experience with carefully crafted
              dishes made from the finest ingredients.
            </p>
          </motion.div>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Customer Reviews</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-amber-300/20 bg-white/[0.06] p-6 backdrop-blur-xl"
              >
                <div className="mb-3 flex text-amber-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-slate-200">&quot;{review.text}&quot;</p>
                <p className="mt-4 font-semibold text-amber-200">{review.name}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl border border-amber-300/30 bg-gradient-to-b from-white/[0.08] to-slate-900/85 p-7 backdrop-blur-xl md:p-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Reservation</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                placeholder="Name"
                className="rounded-xl border border-amber-300/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
              />
              <input
                placeholder="Email"
                className="rounded-xl border border-amber-300/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
              />
              <input
                type="date"
                className="rounded-xl border border-amber-300/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
              />
              <input
                placeholder="Number of Guests"
                className="rounded-xl border border-amber-300/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
              />
            </div>
            <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_18px_rgba(251,146,60,0.4)] transition duration-300 hover:-translate-y-1">
              Book Table <FaArrowRight />
            </button>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-amber-300/20 bg-white/[0.06] p-6 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Location & Contact</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-amber-300" />
                22 Gourmet Street, City Center, New Delhi
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-amber-300" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-amber-300" />
                Mon - Sun: 11:00 AM - 11:00 PM
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-500/15 to-slate-900/80 shadow-[0_0_20px_rgba(251,146,60,0.2)]" />
        </section>
      </main>

      <footer className="border-t border-amber-300/20 bg-slate-950/70 px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-amber-200">AURORA RESTAURANT</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-amber-200">
              Home
            </a>
            <a href="#" className="hover:text-amber-200">
              Menu
            </a>
            <a href="#" className="hover:text-amber-200">
              Reservation
            </a>
            <a href="#" className="hover:text-amber-200">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3 text-base">
            <a href="#" className="hover:text-amber-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-amber-200">
              <FaFacebook />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
