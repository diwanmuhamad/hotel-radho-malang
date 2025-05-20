"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoomsSection from "@/components/RoomsSection";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
      });

      // Navigation animation
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className="h-screen relative bg-[url('/hero-bg.jpg')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h1
                className="hero-text text-6xl md:text-8xl font-light mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Hotel Radho
              </motion.h1>
              <motion.p
                className="hero-text text-xl md:text-2xl font-light mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                Experience Luxury
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <button className="px-8 py-3 text-sm font-light tracking-wider border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                  Book Your Stay
                </button>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <motion.nav
            className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center"
            style={{ opacity }}
          >
            <div className="text-white text-2xl nav-item">Hotel Radho</div>
            <div className="flex gap-8 text-white">
              <a
                href="#rooms"
                className="nav-item hover:opacity-80 transition-opacity"
              >
                Rooms
              </a>
              <a
                href="#dining"
                className="nav-item hover:opacity-80 transition-opacity"
              >
                Dining
              </a>
              <a
                href="#spa"
                className="nav-item hover:opacity-80 transition-opacity"
              >
                Spa
              </a>
              <a
                href="#contact"
                className="nav-item hover:opacity-80 transition-opacity"
              >
                Contact
              </a>
            </div>
          </motion.nav>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-light mb-6">
                  Welcome to Luxury
                </h2>
                <p className="text-gray-600 mb-8">
                  Experience unparalleled luxury at Hotel Radho, where every
                  detail is crafted to perfection. Our historic building has
                  been transformed into a modern sanctuary of comfort and
                  elegance.
                </p>
                <button className="px-8 py-3 text-sm font-light tracking-wider border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                  Discover More
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px]"
              >
                <div className="absolute inset-0 bg-[url('/about-image.jpg')] bg-cover bg-center" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <RoomsSection />

        {/* Dining Section */}
        <section id="dining" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-8">
                Fine Dining
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Indulge in culinary excellence at our award-winning restaurants,
                where our master chefs create unforgettable dining experiences.
              </p>
              <button className="px-8 py-3 text-sm font-light tracking-wider border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                View Menus
              </button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light mb-8"
              >
                Contact Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 mb-8"
              >
                Ready to experience luxury? Get in touch with us to plan your
                perfect stay.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <button className="px-8 py-3 text-sm font-light tracking-wider border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                  Contact Us
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
