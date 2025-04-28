import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data
const featuredProducts = [
  {
    id: "1",
    name: "Luminous Foundation",
    price: "$49.99",
    imageUrl:
      "https://images.unsplash.com/photo-1590422749897-47aae18748c2?q=80&w=1887&auto=format&fit=crop",
    category: "Makeup",
  },
  {
    id: "2",
    name: "Rose Gold Eyeshadow Palette",
    price: "$39.99",
    imageUrl:
      "https://images.unsplash.com/photo-1567007657636-fa246297b03e?q=80&w=1887&auto=format&fit=crop",
    category: "Makeup",
  },
  {
    id: "3",
    name: "Hydrating Face Serum",
    price: "$59.99",
    imageUrl:
      "https://images.unsplash.com/photo-1601049713333-ef75e9562126?q=80&w=1887&auto=format&fit=crop",
    category: "Skincare",
  },
  {
    id: "4",
    name: "Signature Fragrance",
    price: "$79.99",
    imageUrl:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1887&auto=format&fit=crop",
    category: "Fragrance",
  },
];

const featuredArtists = [
  {
    id: "1",
    name: "Sophia Martinez",
    specialty: "Bridal Makeup",
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "James Wilson",
    specialty: "Hair Styling",
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Amara Johnson",
    specialty: "Inclusive Beauty",
    rating: 5.0,
    imageUrl:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1887&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    id: "1",
    text: "The makeup artist transformed my look for my wedding day. Everyone was asking what my beauty secret was!",
    author: "Emma T.",
    role: "Bride",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "2",
    text: "I've tried dozens of skincare brands, but the products here have transformed my skin in just a few weeks.",
    author: "Michael R.",
    role: "Customer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: "3",
    text: "The personalized beauty consultation helped me find products that actually work for my skin type.",
    author: "Sarah L.",
    role: "Customer",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600"></div>
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-pink-300 blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 rounded-full bg-rose-400 blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32 lg:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Discover Your <span className="text-gray-100">Perfect</span>{" "}
                Beauty Look
              </h1>
              <p className="mt-6 text-xl text-gray-100 max-w-lg">
                Premium makeup products and professional artists to help you
                look and feel your best for any occasion.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button
                  asChild
                  className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-6"
                >
                  <Link href="/products">
                    Shop Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  <Link href="/artists">Find Artists</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1771&auto=format&fit=crop"
                  alt="Beauty products and makeup"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    100+
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Premium Products
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    25+
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Professional Artists
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Featured Products
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Discover our bestselling beauty products
              </p>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 font-medium"
            >
              View all products
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                href={`/products#${product.id}`}
                key={product.id}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-rose-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-rose-600 dark:text-rose-400 font-medium">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-rose-500 blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-60 h-60 rounded-full bg-pink-500 blur-3xl opacity-10"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Join thousands of satisfied customers on their beauty journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Featured Artists
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Meet our talented beauty professionals
              </p>
            </div>
            <Link
              href="/artists"
              className="mt-4 md:mt-0 inline-flex items-center text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 font-medium"
            >
              View all artists
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <Link
                href={`/artists/${artist.id}`}
                key={artist.id}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={artist.imageUrl}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {artist.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200">{artist.specialty}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1" />
                        <span className="text-white text-sm">
                          {artist.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-500 to-pink-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Look?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Join MakeupPro today and discover a world of beauty possibilities
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
