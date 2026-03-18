/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Check, 
  Zap, 
  Home, 
  BookOpen, 
  ArrowRight, 
  Instagram, 
  Mail, 
  ShieldCheck,
  MessageCircle
} from "lucide-react";

const IMAGES = {
  coach: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfoQS5dMSkn7-gmU6-ON6HeZDHcFS_PMrlhjX1H9Vw1cS5uf0CV7_VXnWJfhz0T0FiiQhmvEhrxKQd7cwimHkT_olXZz91VhmeJkRdMp0JO72iT2RH8T0aR7ix9bpKME0cBgMVOdknXVzyKedTLCYPEYLhYRASzTEJhpwjy9eiWDYpBjqZNnGLw5a5ZMLnFUvuIx5W1-1q__X755VY-fK_0cIjN2AXrlOr1uq4DeLJNMRyC7g3e9eRfDV8pKNxtITIuZLakwQ_j2g",
  clients: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBPjVuk2ro7uWLOp4y9LVRz1WGrCy--rXsclyJVftEVdc9ZXBV7vFpRFIQjbZDpJZU37-x218_AhOx5yCOsF1kHlJ8niMrufMwn-zzMyaPzmggkZ5LPe5J5gyiAzlTlMPpujpRDJmL0yWJVZSxlU4cTEoCuG55-UVrylFenZOfild3E5AJi575v8meNR7CUbrlP7keRIQQV9gu8ajbwGlRmljdSHNeyYMGtR-X806DmLzjilo32eFdOzI75EgVHDNa88zPvcDsJ-II",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9golGFFvKYHcmwQapsbzeI-7CvnADyojkujfONqllRBIYhl2xuoKPSvgG65Q5r5lGun3f19KpCJ7lCpA3Sq85dFNN5IZUFCodG6lXgffTqo69HELzYMwJECUXuivHCC_Jt77zJW_cWO1LGCZw6RDnkyesE-lWbtWZuAUao7bSOTzkPwAhfICQBf4fwVc4-DzFfWyx6WEfIDHuDmhtDOiUJAXEgRvHhqQMWzT8oGxO0JnBRcdmMXxZuinGyUO9d9950uYuoocKe4w",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDjz3RtkEcDGqAc0RCKTFtYWFg1Z-Ok5ZwndoBlo3fvpcs8D8ETY14D-BbUWuAFWqahz_I6jTXQyEGllO1FKrv77aH5yFwDUSGO5NO_qL6jxkNGQ6HDV5TV8nzFK0nusQlpKPQEdWDe6GgkAjT-BDZytsfArKgOEZetV6bmTOTw9ZVinWfm8zMqrLoY6KiyRjp6v7UYfcqWjB3N-ZotNZ9wbyzkqIo5NoHa9KvO3dxpTEVvpU8tHsohj0QExne6DDX9w7I9dqDr1fY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA0CnReM0HwPBdXAKu0oTHHZnncsfXNOZbcnPl9wyDDPDgWHBDeUVj1o1MphmbUOhvMYYUaVBWzpSAlbSMJ7oyNL_z9oJ4Mrl12iaxyvet-C8W_DizsCXkDUiZjxuAipdOWmfvjjHnGGWtcU-sLeCOfd74heRrkOj0czGfTfXMna4x6KMG0SuP5kZXDDyvOG7j5AC8644C1GL1UOcR5x630zsZ6b-1I0kNMju-HsGx0-Tjd6QRNcOaAuADaDDyanXIrKadadLw-eYU"
  ]
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-effect border-b border-pink-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-display font-extrabold text-xl tracking-tighter">
            STAYFIT <span className="text-brand-accent italic">WITH RIDDHI</span>
          </div>
          <a 
            href="#pricing" 
            className="bg-brand-dark text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest hover:bg-brand-accent transition-all duration-300"
          >
            Join Now
          </a>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
              Transformation Journey
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6">
              Transform Your Body & Confidence in <span className="gradient-text">28 Days</span>
            </h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
              Personalized fitness and diet plans meticulously designed for real results and long-term habits.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a 
                href="#programs" 
                className="w-full sm:w-auto bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Transformation
              </a>
              <p className="text-xs text-gray-400 italic">No generic plans. Only science-backed results.</p>
            </div>
          </motion.div>

          {/* Coach Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 w-full max-w-md mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent/10 blur-3xl rounded-full -z-10"></div>
              <img 
                src={IMAGES.coach} 
                alt="Coach Riddhi" 
                className="rounded-[2.5rem] shadow-2xl w-full h-[450px] object-cover border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold mb-2">100+ Happy Clients</h2>
              <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {IMAGES.clients.map((src, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <img 
                    src={src} 
                    alt={`Client Transformation ${index + 1}`} 
                    className="rounded-2xl w-full grayscale-[50%] hover:grayscale-0 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 px-6 bg-brand-primary">
          <div className="container mx-auto">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Choose Your Path</h2>
              <p className="text-gray-500">Each program is tailored to your hormonal health and lifestyle needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fat Loss */}
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] border border-pink-50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-pink-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Fat Loss Program</h3>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> Custom Macro-based Diet</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> Metabolism Boosting Workouts</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> 24/7 WhatsApp Support</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> 28-Day Intensive Focus</li>
                </ul>
                <a 
                  href="#pricing" 
                  className="block text-center w-full border-2 border-brand-dark py-4 rounded-xl font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-colors"
                >
                  Join Now
                </a>
              </motion.article>

              {/* Home Workout */}
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-dark text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">Popular</div>
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4 text-white">Home Workout Plan</h3>
                <ul className="space-y-3 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> No Equipment Needed</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> Easy Meal Swaps</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> Form Correction Videos</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> 28-Day Consistency</li>
                </ul>
                <a 
                  href="#pricing" 
                  className="block text-center w-full bg-brand-accent py-4 rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
                >
                  Join Now
                </a>
              </motion.article>

              {/* Diet Plan */}
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-[2rem] border border-pink-50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-pink-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Personal Diet Plan</h3>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> Traditional Indian Meals</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> PCOS/Thyroid Friendly</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> Weekly Grocery List</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> 28-Day Guidance</li>
                </ul>
                <a 
                  href="#pricing" 
                  className="block text-center w-full border-2 border-brand-dark py-4 rounded-xl font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-colors"
                >
                  Join Now
                </a>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Transformation Map */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-16">The Transformation Map</h2>
            <div className="grid grid-cols-1 gap-12 relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-pink-100"></div>
              
              {[
                { step: 1, title: "Choose Program", desc: "Select the plan that fits your current lifestyle and goals." },
                { step: 2, title: "Get Personalized Plan", desc: "Receive a customized workout and diet dashboard within 24 hours." },
                { step: 3, title: "Weekly Check-ins", desc: "We track metrics every 7 days and pivot for continuous progress." },
                { step: 4, title: "Achieve Transformation", desc: "See the new version of yourself with enhanced confidence." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center max-w-sm mx-auto z-10"
                >
                  <div className="bg-brand-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-brand-primary overflow-x-hidden">
          <div className="container mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-16">Stories That Inspire</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm italic text-gray-600 flex-1"
              >
                "I never thought I could lose 4kg in a month without starving. Riddhi's diet is so sustainable!"
                <div className="mt-6 flex items-center gap-4 not-italic">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-bold text-brand-accent">P</div>
                  <div className="text-xs">
                    <span className="font-bold block text-brand-dark">Priya S., 24</span>
                    <span>IT Professional</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm italic text-gray-600 flex-1"
              >
                "The home workouts are game changers. I feel so much stronger and my energy levels are peaking."
                <div className="mt-6 flex items-center gap-4 not-italic">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-bold text-brand-accent">A</div>
                  <div className="text-xs">
                    <span className="font-bold block text-brand-dark">Anjali M., 29</span>
                    <span>Homemaker</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 bg-white">
          <div className="container mx-auto text-center">
            <div className="inline-block bg-pink-50 text-brand-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              Limited slots available
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-12">Invest in Yourself</h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto bg-brand-primary rounded-[2.5rem] p-10 border border-brand-accent/20 shadow-lg"
            >
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Pricing Range</p>
              <div className="text-4xl md:text-5xl font-display font-extrabold mb-8 leading-snug tracking-tight">₹1,999 – ₹3,999</div>
              <div className="space-y-4 text-left mb-10">
                <p className="text-sm font-medium flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-accent" /> Access to Workout Dashboard</p>
                <p className="text-sm font-medium flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-accent" /> Monthly Progress Review</p>
                <p className="text-sm font-medium flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-accent" /> Lifestyle Habit Coaching</p>
              </div>
              <button className="block w-full bg-brand-dark text-white py-5 rounded-2xl font-bold shadow-xl hover:bg-brand-accent transition-colors duration-300">
                Secure My Slot Now
              </button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent via-transparent to-transparent"></div>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="font-display text-4xl font-bold mb-6">Ready to transform?</h2>
            <p className="text-gray-300 mb-10 max-w-sm mx-auto">Start your journey today and feel the difference in your mind and body.</p>
            <a 
              href="https://wa.me/#" 
              className="inline-flex items-center gap-3 bg-white text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle className="w-6 h-6 text-green-500" />
              Join Now on WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-brand-primary border-t border-pink-100">
        <div className="container mx-auto flex flex-col items-center">
          <div className="font-display font-extrabold text-xl mb-8">
            STAYFIT <span className="text-brand-accent italic">WITH RIDDHI</span>
          </div>
          <div className="flex gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors flex items-center gap-1">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors flex items-center gap-1">
              <Mail className="w-4 h-4" /> Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors">Privacy Policy</a>
          </div>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2023 StayFit with Riddhi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
