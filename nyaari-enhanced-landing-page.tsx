import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sprout, Users, Dumbbell, ShoppingBag, ChevronRight, Star } from 'lucide-react'

export default function Component() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  const areas = [
    { icon: <Heart className="w-12 h-12 text-pink-500" />, title: 'Health', description: 'Comprehensive health management tools and resources.' },
    { icon: <Sprout className="w-12 h-12 text-green-500" />, title: 'Personal Development', description: 'Courses and tools to help you grow and achieve your goals.' },
    { icon: <Users className="w-12 h-12 text-blue-500" />, title: 'Community', description: 'Connect with like-minded women and build lasting relationships.' },
    { icon: <Dumbbell className="w-12 h-12 text-purple-500" />, title: 'Fitness', description: 'Personalized fitness plans and tracking for your wellness journey.' },
    { icon: <ShoppingBag className="w-12 h-12 text-yellow-500" />, title: 'Products', description: 'Curated selection of health and wellness products just for you.' },
  ]

  const testimonials = [
    { name: 'Sarah J.', text: 'Nyaari has transformed my approach to health and personal growth. It\'s an all-in-one solution that every woman needs!' },
    { name: 'Emily R.', text: 'The community aspect of Nyaari is incredible. I\'ve made lifelong friends and found support I never knew I needed.' },
    { name: 'Lisa M.', text: 'From fitness tracking to personal development courses, Nyaari offers everything I need to stay on top of my game.' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-10 h-10 text-pink-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
            </svg>
            <span className="ml-2 text-2xl font-bold text-pink-600">Nyaari</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-pink-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-pink-600 mb-6">Empower Your Journey with Nyaari</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your one-stop solution for managing health, fostering personal growth, and building supportive communities. Join us in creating a better you!
            </p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-3">Get Started</Button>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-pink-600 text-center mb-12">Our Key Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{area.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-pink-600 text-center mb-12">Why Choose Nyaari?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
                <p className="text-gray-600">We address all aspects of a woman's life for complete well-being.</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
                <p className="text-gray-600">Connect with like-minded women on similar journeys.</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <Sprout className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Growth</h3>
                <p className="text-gray-600">Tailored plans and resources for your unique needs and goals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-pink-600 text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-pink-600">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're working hard to bring you the best experience. Sign up to stay updated!
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow"
                />
                <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
                  Stay Updated
                </Button>
              </div>
            </form>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-pink-600 text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {[
                { q: "What is Nyaari?", a: "Nyaari is a comprehensive platform designed to empower women in managing their health, personal growth, fitness, and community connections." },
                { q: "How can I join the Nyaari community?", a: "Once launched, you'll be able to sign up through our app or website. For now, you can join our waitlist to be notified when we launch." },
                { q: "Is Nyaari only for women?", a: "While Nyaari is primarily designed with women's needs in mind, we welcome anyone who resonates with our mission and values." },
                { q: "What kind of resources does Nyaari offer?", a: "Nyaari offers a wide range of resources including health tracking tools, personal development courses, fitness plans, community forums, and curated products." },
              ].map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Nyaari</h3>
              <p className="text-gray-600">Empowering women through holistic well-being and community support.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902  4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} Nyaari. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}