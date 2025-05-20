"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious suite with lake view and private balcony",
    image: "/room1.jpg",
    price: "From €800/night",
  },
  {
    id: 2,
    name: "Executive Room",
    description: "Elegant room with garden view and modern amenities",
    image: "/room2.jpg",
    price: "From €600/night",
  },
  {
    id: 3,
    name: "Presidential Suite",
    description: "Luxurious suite with panoramic views and private terrace",
    image: "/room3.jpg",
    price: "From €1200/night",
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl text-[#5D5D5D] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Rooms
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-light mb-2">{room.name}</h3>
                <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {room.description}
                </p>
                <p className="text-sm mb-4">{room.price}</p>
                <button className="px-8 py-3 text-sm font-light tracking-wider border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
