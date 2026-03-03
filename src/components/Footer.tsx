import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-navy text-slate-300 pt-20 pb-10 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center text-brand-navy font-display font-medium text-xl shadow-md border border-white/10">
                L
              </div>
              <span className="font-display font-semibold text-xl tracking-tight text-white">
                Lumina<span className="text-brand-aqua font-light">Dental</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Providing exceptional dental care with state-of-the-art technology
              in a comfortable, relaxing environment.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal hover:text-brand-navy transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand-teal transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-teal transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="hover:text-brand-teal transition-colors"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/patient-info"
                  className="hover:text-brand-teal transition-colors"
                >
                  Patient Info
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-teal transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-teal transition-colors"
                >
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-teal transition-colors"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-teal transition-colors"
                >
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-teal transition-colors"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-teal transition-colors"
                >
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-brand-teal transition-colors"
                >
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-brand-teal font-bold">A:</span>
                <span>
                  123 Smile Avenue, Suite 400
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-teal font-bold">P:</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-teal font-bold">E:</span>
                <span>hello@luminadental.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Lumina Dental Clinic. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-teal hover:text-brand-navy transition-all duration-300 ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
