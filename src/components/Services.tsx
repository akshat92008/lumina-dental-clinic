import { motion } from "motion/react";
import {
  Sparkles,
  Stethoscope,
  Activity,
  ShieldPlus,
  AlertCircle,
  Smile,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "General Dentistry",
      description:
        "Comprehensive exams, cleanings, and preventative care to maintain optimal oral health.",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "bg-brand-teal/10 text-brand-teal",
    },
    {
      title: "Teeth Whitening",
      description:
        "Professional whitening treatments for a brighter, more confident smile.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-brand-teal/10 text-brand-teal",
    },
    {
      title: "Orthodontics",
      description:
        "Clear aligners and traditional braces to correct alignment and bite issues.",
      icon: <Activity className="w-8 h-8" />,
      color: "bg-brand-teal/10 text-brand-teal",
    },
    {
      title: "Dental Implants",
      description: "Permanent, natural-looking replacements for missing teeth.",
      icon: <ShieldPlus className="w-8 h-8" />,
      color: "bg-brand-teal/10 text-brand-teal",
    },
    {
      title: "Emergency Care",
      description:
        "Immediate attention for severe pain, trauma, and urgent dental issues.",
      icon: <AlertCircle className="w-8 h-8" />,
      color: "bg-brand-teal/10 text-brand-teal",
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Veneers, bonding, and smile makeovers tailored to your aesthetic goals.",
      icon: <Smile className="w-8 h-8" />,
      color: "bg-brand-teal/10 text-brand-teal",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="subheading-luxury text-brand-teal">
            Our Services
          </h2>
          <h3 className="heading-luxury mb-8">
            Comprehensive Care for Your Smile
          </h3>
          <p className="text-lg text-text-muted">
            From routine cleanings to advanced restorative procedures, we offer
            a full spectrum of dental services under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/10 text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer flex flex-col items-center"
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${service.color} group-hover:scale-[1.05] transition-transform duration-500 border border-white/10 shadow-sm`}
              >
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 tracking-tight">
                {service.title}
              </h4>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-brand-teal font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
