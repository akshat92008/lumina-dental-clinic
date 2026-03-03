import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Patient Info", href: "/patient-info" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
          }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white font-display font-medium text-xl shadow-md group-hover:shadow-lg transition-all duration-300">
              L
            </div>
            <span className={`font-display font-semibold text-xl tracking-tight transition-colors ${isScrolled ? "text-brand-navy" : "text-white"}`}>
              Lumina<span className={`${isScrolled ? "text-text-muted" : "text-white/70"} font-light`}>Dental</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium transition-colors text-brand-teal hover:text-brand-aqua"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-[15px] font-medium transition-colors text-brand-teal hover:text-brand-aqua"
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary !px-6 !py-3 !rounded-xl !text-[14px]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-text-dark hover:bg-brand-teal/10" : "text-white hover:bg-white/10"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg lg:hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-medium py-2 border-b border-brand-light text-brand-teal"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4 mb-20">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center gap-2 bg-brand-light text-brand-teal px-5 py-3 rounded-xl font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(555) 123-4567</span>
                  </a>
                  <Link
                    to="/contact"
                    className="btn-primary !w-full"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Sticky Booking Bar (Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-3 bg-brand-light/90 backdrop-blur-xl border-t border-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] z-[60] flex gap-3 pb-safe">
        <a
          href="tel:+1234567890"
          className="flex-1 flex items-center justify-center gap-2 bg-white/50 hover:bg-white text-brand-teal py-3.5 rounded-xl font-medium text-sm transition-colors border border-white/20"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <Link
          to="/contact"
          className="flex-[2] btn-primary !py-3.5 !rounded-xl !text-sm"
        >
          <Calendar className="w-4 h-4" />
          Book Now
        </Link>
      </div>
    </>
  );
}
