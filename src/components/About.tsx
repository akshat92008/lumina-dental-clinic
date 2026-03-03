import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const features = [
    "State-of-the-art technology",
    "Comfortable, relaxing environment",
    "Experienced, licensed professionals",
    "Personalized treatment plans",
  ];

  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://picsum.photos/seed/clinic-interior/800/600"
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-brand-aqua/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2 className="subheading-luxury text-brand-teal">
              Welcome to Lumina
            </h2>
            <h3 className="heading-luxury mb-8">
              Redefining the<br />Dental Experience
            </h3>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              At Lumina Dental Clinic, our mission is to provide exceptional,
              comprehensive dental care in a welcoming and stress-free
              environment. We believe that a healthy smile is the foundation of
              overall well-being.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                  <span className="text-text-dark font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-brand-light rounded-2xl border border-white/10">
              <p className="text-text-dark italic font-medium">
                "Our team is dedicated to making every visit comfortable,
                transparent, and tailored to your unique needs. Your smile is
                our top priority."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://picsum.photos/seed/dr-smith/100/100"
                  alt="Dr. Sarah Smith"
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-brand-navy">Dr. Sarah Smith</p>
                  <p className="text-sm text-text-muted">
                    Lead Dentist, DDS, FACS • 15+ Years Experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
