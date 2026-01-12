import {
  Menu,
  Heart,
  Calendar,
  Camera,
  Users,
  CheckCircle,
  X,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function ReduWeddingHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    budget: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const portfolioImages = [
    {
      id: 1,
      url: "https://raw.createusercontent.com/1de22b27-f1ea-479a-b8f6-458ab441ef9c/",
      title: "Outdoor Ceremony",
    },
    {
      id: 2,
      url: "https://raw.createusercontent.com/edca2318-4785-47f6-9dcf-4e3115af2533/",
      title: "Reception Details",
    },
    {
      id: 3,
      url: "https://raw.createusercontent.com/479e4d59-a37b-411e-81dd-cc3c3c1b4ab6/",
      title: "Couple Portrait",
    },
    {
      id: 4,
      url: "https://raw.createusercontent.com/0f73883e-5da1-4fb2-b83b-f98ef1efe3ae/",
      title: "Wedding Cake",
    },
    {
      id: 5,
      url: "https://raw.createusercontent.com/5c615df2-5e1e-46ac-af1d-e54c3122ca92/",
      title: "Bridal Bouquet",
    },
    {
      id: 6,
      url: "https://raw.createusercontent.com/90a219a1-46ab-45db-9b20-59708d856fc6/",
      title: "Venue Setup",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      weddingDate: "",
      budget: "",
      message: "",
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative bg-white">
      {/* Vertical guide lines */}
      <div className="fixed top-0 h-full w-px bg-gray-200/40 left-1/4 -z-10"></div>
      <div className="fixed top-0 h-full w-px bg-gray-200/40 left-1/2 -z-10"></div>
      <div className="fixed top-0 h-full w-px bg-gray-200/40 left-3/4 -z-10"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="w-full px-6 py-6 md:px-14">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-16">
            {/* Left Navigation */}
            <div className="flex gap-8">
              <a
                href="#home"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                Portfolio
              </a>
            </div>

            {/* Centered Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-3 h-3 bg-[#D4958D] group-hover:bg-[#C17E75] group-active:bg-[#B06A61] transition-colors duration-200"></div>
              <span className="text-xl font-extrabold text-gray-800 font-inter">
                Redu<span className="text-[#D4958D]">.</span>
              </span>
            </a>

            {/* Right Navigation */}
            <div className="flex gap-8">
              <a
                href="#about"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-xs font-semibold uppercase text-gray-900 hover:text-[#D4958D] active:text-[#C17E75] transition-colors duration-200 focus:outline-none focus:text-[#D4958D] tracking-wide font-inter"
              >
                Contact
              </a>
              <a
                href="https://wa.me/251929148708"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase text-[#D4958D] hover:text-[#C17E75] active:text-[#B06A61] transition-colors duration-200 focus:outline-none tracking-wide font-inter"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#D4958D]"></div>
              <span className="text-lg font-extrabold text-gray-800 font-inter">
                Redu<span className="text-[#D4958D]">.</span>
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-transparent hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-100 focus:outline-none transition-colors duration-200"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-800" />
              ) : (
                <Menu className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-6 space-y-1">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Portfolio
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-gray-900 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Contact
              </a>
              <a
                href="https://wa.me/251929148708"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold uppercase text-[#D4958D] hover:text-[#C17E75] transition-colors duration-200 font-inter border-t border-gray-100 mt-2 pt-5"
              >
                Book Now →
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col min-h-screen pt-24 overflow-hidden"
      >
        <div className="flex-1 flex flex-col justify-center px-6 md:px-14 py-16">
          <h1 className="text-[12vw] md:text-8xl font-extrabold tracking-tight leading-none text-gray-800 font-inter">
            Redu<span className="text-[#D4958D]">.</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-600 tracking-wide font-inter max-w-2xl">
            Wedding Planning & Coordination
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-500 tracking-wide font-inter max-w-xl leading-relaxed">
            Creating unforgettable moments for your special day. From intimate
            gatherings to grand celebrations, we bring your dream wedding to
            life with elegance and precision.
          </p>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#D4958D] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#C17E75] active:bg-[#B06A61] transition-colors duration-200 font-inter"
            >
              Start Planning
            </a>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-2/3 md:w-1/3 max-w-sm opacity-20 select-none pointer-events-none">
          <Heart className="w-full h-full text-[#D4958D]" strokeWidth={0.5} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-14 py-24 bg-gray-50">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-800 mb-4 font-inter">
          Services<span className="text-[#D4958D]">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 tracking-wide mb-16 font-inter">
          Tailored packages for every celebration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {/* Full Planning */}
          <div className="bg-white p-8 border border-gray-200/60 hover:border-[#D4958D]/40 transition-colors duration-200">
            <div className="w-12 h-12 bg-[#D4958D]/10 flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-[#D4958D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-inter">
              Full Planning
            </h3>
            <p className="text-gray-600 mb-6 font-inter leading-relaxed">
              Complete coordination from conception to celebration. We handle
              every detail so you can enjoy the journey.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Venue selection & booking</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Vendor management</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Design & styling</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Timeline creation</span>
              </li>
            </ul>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Starting at $5,000
            </p>
          </div>

          {/* Partial Planning */}
          <div className="bg-white p-8 border border-gray-200/60 hover:border-[#D4958D]/40 transition-colors duration-200">
            <div className="w-12 h-12 bg-[#D4958D]/10 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-[#D4958D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-inter">
              Partial Planning
            </h3>
            <p className="text-gray-600 mb-6 font-inter leading-relaxed">
              Perfect for couples who have started planning but need expert
              guidance to bring it all together.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Vendor recommendations</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Design consultation</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Budget assistance</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Monthly check-ins</span>
              </li>
            </ul>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Starting at $3,000
            </p>
          </div>

          {/* Day-of Coordination */}
          <div className="bg-white p-8 border border-gray-200/60 hover:border-[#D4958D]/40 transition-colors duration-200">
            <div className="w-12 h-12 bg-[#D4958D]/10 flex items-center justify-center mb-6">
              <Camera className="w-6 h-6 text-[#D4958D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 font-inter">
              Day-of Coordination
            </h3>
            <p className="text-gray-600 mb-6 font-inter leading-relaxed">
              Stress-free execution on your wedding day. We ensure everything
              runs smoothly while you celebrate.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Timeline management</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Vendor coordination</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Setup supervision</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600 font-inter">
                <CheckCircle className="w-4 h-4 text-[#D4958D] mt-0.5 flex-shrink-0" />
                <span>Problem solving</span>
              </li>
            </ul>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Starting at $1,500
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 md:px-14 py-24">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-800 mb-4 font-inter">
          Portfolio<span className="text-[#D4958D]">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 tracking-wide mb-16 font-inter">
          Recent celebrations we've brought to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {portfolioImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square bg-gray-100 border border-gray-200/60 hover:border-[#D4958D]/40 transition-all duration-200 overflow-hidden group cursor-pointer relative"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
                <p className="text-white font-inter text-sm font-semibold p-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-14 py-24 bg-gray-50">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-800 mb-4 font-inter">
          Testimonials<span className="text-[#D4958D]">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 tracking-wide mb-16 font-inter">
          Words from our happy couples
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-white p-8 border border-gray-200/60">
            <p className="text-gray-600 font-inter leading-relaxed mb-6 italic">
              "Redu made our dream wedding a reality. Every detail was perfect,
              and we could actually enjoy our day without stress. Highly
              recommend!"
            </p>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Sarah & Michael
            </p>
            <p className="text-xs text-gray-500 font-inter">June 2024</p>
          </div>

          <div className="bg-white p-8 border border-gray-200/60">
            <p className="text-gray-600 font-inter leading-relaxed mb-6 italic">
              "Professional, organized, and creative. The team at Redu exceeded
              our expectations in every way. Our wedding was absolutely
              magical."
            </p>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Emily & David
            </p>
            <p className="text-xs text-gray-500 font-inter">August 2024</p>
          </div>

          <div className="bg-white p-8 border border-gray-200/60">
            <p className="text-gray-600 font-inter leading-relaxed mb-6 italic">
              "From our first meeting to the last dance, Redu was there for us.
              They handled everything with grace and attention to detail. Thank
              you!"
            </p>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Jessica & Ryan
            </p>
            <p className="text-xs text-gray-500 font-inter">October 2024</p>
          </div>

          <div className="bg-white p-8 border border-gray-200/60">
            <p className="text-gray-600 font-inter leading-relaxed mb-6 italic">
              "Best decision we made for our wedding! Redu's expertise and calm
              demeanor kept everything on track. Couldn't have done it without
              them."
            </p>
            <p className="text-sm font-semibold text-gray-800 font-inter">
              Amanda & Chris
            </p>
            <p className="text-xs text-gray-500 font-inter">December 2024</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-14 py-24">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-800 mb-4 font-inter">
          About<span className="text-[#D4958D]">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 tracking-wide mb-16 font-inter">
          Passion meets expertise
        </p>

        <div className="max-w-3xl">
          <p className="text-gray-600 font-inter leading-relaxed mb-6">
            Redu was founded on the belief that every couple deserves a wedding
            that reflects their unique love story. With over 10 years of
            experience in the wedding industry, we've had the privilege of
            planning and coordinating hundreds of celebrations.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed mb-6">
            Our team of dedicated professionals brings creativity, organization,
            and a personal touch to every event. We work closely with you to
            understand your vision and bring it to life with meticulous
            attention to detail.
          </p>
          <p className="text-gray-600 font-inter leading-relaxed">
            From intimate elopements to grand celebrations, we're here to make
            your wedding planning journey as joyful and stress-free as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-14 py-24 bg-gray-50">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-800 mb-4 font-inter">
          Contact<span className="text-[#D4958D]">.</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 tracking-wide mb-16 font-inter">
          Let's start planning your perfect day
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label
                  htmlFor="weddingDate"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Wedding Date
                </label>
                <input
                  type="date"
                  id="weddingDate"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter"
                >
                  <option value="">Select a range</option>
                  <option value="under10k">Under $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over100k">Over $100,000</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2 font-inter"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#D4958D] focus:outline-none transition-colors duration-200 font-inter resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D4958D] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#C17E75] active:bg-[#B06A61] transition-colors duration-200 font-inter"
              >
                Send Inquiry
              </button>

              {formSubmitted && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-inter">
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-inter">
                Get in Touch
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed mb-6">
                We'd love to hear about your wedding plans. Reach out to
                schedule a consultation and let's create something beautiful
                together.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                Email
              </h4>
              <p className="text-gray-600 font-inter">hello@reduweddings.com</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                Phone
              </h4>
              <p className="text-gray-600 font-inter">+251 929 148708</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                Office Hours
              </h4>
              <p className="text-gray-600 font-inter">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600 font-inter">
                Saturday: By appointment
              </p>
              <p className="text-gray-600 font-inter">Sunday: Closed</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2 font-inter">
                Location
              </h4>
              <p className="text-gray-600 font-inter">Addis Ababa</p>
              <p className="text-gray-600 font-inter">Ethiopia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-14 py-12 border-t border-gray-200/60">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-inter">
            © 2026 Redu. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-[#D4958D] transition-colors duration-200 font-inter"
              >
                Terms
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4958D] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4958D] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4958D] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/251929148708"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#D4958D] transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/251929148708"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1BA34C] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-200" />
      </a>
    </div>
  );
}
