import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    tagline: "A comfortable cocoon to make your heart swoon.",
    description:
      "Spacious suite with lake view and private balcony. Awaken to breathtaking views, luxuriate in elegant comfort, and enjoy a private retreat designed for relaxation.",
    features: [
      "Elegant 485 sq. ft. (45 sqm) room",
      "Private balcony with lake view",
      "Bathroom with spacious bathtub and walk-in shower",
      "Separate dressing area",
      "Attentive service on hand 24/7",
    ],
    image: "/room1.jpg",
    price: "From €800/night",
  },
  {
    id: 2,
    name: "Executive Room",
    tagline: "Modern elegance with a touch of serenity.",
    description:
      "Elegant room with garden view and modern amenities. Perfect for business or leisure, offering a tranquil escape with all the comforts you desire.",
    features: [
      "Spacious 400 sq. ft. (37 sqm) room",
      "Garden view",
      "Modern bathroom with walk-in shower",
      "Dedicated workspace",
      "Complimentary high-speed Wi-Fi",
    ],
    image: "/room2.jpg",
    price: "From €600/night",
  },
  {
    id: 3,
    name: "Presidential Suite",
    tagline: "Luxury redefined with panoramic views.",
    description:
      "Luxurious suite with panoramic views and private terrace. Experience the height of sophistication and comfort in an expansive, beautifully appointed space.",
    features: [
      "Expansive 1,200 sq. ft. (110 sqm) suite",
      "Private terrace with panoramic views",
      "Marble bathroom with bathtub and hammam-shower",
      "Separate living and dining areas",
      "Personalized concierge service",
    ],
    image: "/room3.jpg",
    price: "From €1200/night",
  },
];

export default function RoomPage({ params }: { params: { id: string } }) {
  const room = rooms.find((r) => r.id.toString() === params.id);

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif mb-4">Room Not Found</h1>
        <Link href="/" className="text-blue-600 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Image with Overlay */}
      <div className="relative w-full h-80 md:h-[32rem]">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-16 pb-10">
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-2 drop-shadow-lg">
            {room.name}
          </h1>
          <p className="text-lg md:text-2xl text-white font-light drop-shadow-md">
            {room.tagline}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-4xl mx-auto w-full px-4 md:px-0 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        {/* Left: Description */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-serif text-[#5D5D5D] mb-6">
            {room.name}
          </h2>
          <p className="text-lg text-[#666] mb-8 leading-relaxed">
            {room.description}
          </p>
          <div className="text-xl font-semibold text-[#222] mb-4">
            {room.price}
          </div>
          <Link
            href="/#rooms"
            className="inline-block px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded"
          >
            Book Now
          </Link>
        </div>
        {/* Right: Features */}
        <div className="flex-1 bg-[#f7f7f7] rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-serif mb-4 text-[#5D5D5D]">
            Room Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#444]">
            {room.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
