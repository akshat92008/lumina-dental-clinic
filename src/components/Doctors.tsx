import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Twitter, Mail, X, Play, Award, GraduationCap } from "lucide-react";

interface Doctor {
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
  longBio: string;
  credentials: string;
  education: string;
}

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const doctors: Doctor[] = [
    {
      name: "Dr. Sarah Smith",
      role: "Lead Dentist & Founder",
      specialty: "Cosmetic Dentistry",
      image: "https://picsum.photos/seed/dr-smith-full/400/500",
      bio: "With over 15 years of experience, Dr. Smith specializes in creating beautiful, natural-looking smiles.",
      longBio: "Dr. Sarah Smith founded Lumina Dental Clinic with a vision of providing exceptional, patient-centered care in a relaxing environment. She is known internationally for her aesthetic eye and minimally invasive cosmetic procedures. When she is not transforming smiles, she lectures at dental conferences and enjoys painting.",
      credentials: "DDS, FACS",
      education: "NYU College of Dentistry",
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      specialty: "Invisalign & Braces",
      image: "https://picsum.photos/seed/dr-chen/400/500",
      bio: "Dr. Chen is passionate about helping patients achieve perfect alignment and functional bites.",
      longBio: "Dr. Michael Chen is a board-certified Orthodontist with a passion for integrating the latest digital technology into tooth alignment. He is a Diamond Plus Invisalign provider and has successfully treated thousands of complex cases. He loves hiking and photography in his free time.",
      credentials: "DMD, MS",
      education: "Harvard School of Dental Medicine",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Dentist",
      specialty: "Children's Care",
      image: "https://picsum.photos/seed/dr-rodriguez/400/500",
      bio: "Known for her gentle approach, Dr. Rodriguez makes dental visits fun and stress-free for kids.",
      longBio: "Dr. Emily Rodriguez has a unique gift for working with children, including those with special needs. Her gentle patience and fun-loving attitude create a dental home where kids actually look forward to visiting. She is an active member of the American Academy of Pediatric Dentistry.",
      credentials: "DDS, Board Certified",
      education: "UCLA School of Dentistry",
    },
  ];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedDoctor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedDoctor]);

  return (
    <section id="doctors" className="section-padding bg-brand-light relative">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="subheading-luxury text-brand-teal mb-4">
            Meet Our Specialists
          </h2>
          <h3 className="heading-luxury mb-8">
            Expert Care You Can Trust
          </h3>
          <p className="text-lg text-text-muted">
            Our highly skilled and compassionate team is dedicated to providing
            you with the best possible dental experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="group cursor-pointer"
              onClick={() => setSelectedDoctor(doctor)}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 shadow-md hover:shadow-2xl transition-all duration-500">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-2xl font-bold text-white mb-1">
                      {doctor.name}
                    </h4>
                    <p className="text-brand-teal font-medium text-sm">
                      {doctor.specialty}
                    </p>
                  </div>

                  {/* "View Profile" indicator */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Modal Overlay */}
      <AnimatePresence>
        {selectedDoctor && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
              className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl bg-white rounded-3xl shadow-2xl z-[60] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 backdrop-blur-md hover:bg-brand-light rounded-full flex items-center justify-center text-brand-navy transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image & Video Placeholder */}
              <div className="w-full md:w-2/5 relative h-64 md:h-auto shrink-0">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover"
                />

                {/* Play Video Overlay */}
                <div className="absolute inset-0 bg-slate-900/30 group flex items-center justify-center cursor-pointer hover:bg-slate-900/40 transition-colors">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-teal transition-all duration-300 shadow-xl border border-white/40">
                      <Play className="w-6 h-6 text-brand-navy ml-1 fill-brand-navy" />
                    </div>
                    <span className="text-white mt-3 font-medium text-sm drop-shadow-md">Watch Greeting</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Info */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">{selectedDoctor.name}</h3>
                  <p className="text-xl text-brand-teal font-medium">{selectedDoctor.role}</p>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted font-medium">Credentials</p>
                      <p className="font-semibold text-brand-navy">{selectedDoctor.credentials}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted font-medium">Education</p>
                      <p className="font-semibold text-brand-navy">{selectedDoctor.education}</p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-slate prose-p:leading-relaxed mb-8">
                  <p className="text-text-muted">{selectedDoctor.longBio}</p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-brand-light">
                  <p className="text-sm font-bold text-brand-navy uppercase tracking-wide mr-2">Connect:</p>
                  <a href="#" className="w-10 h-10 rounded-full bg-brand-light border border-white/10 flex items-center justify-center text-text-dark hover:bg-brand-teal/10 hover:text-brand-teal hover:border-brand-teal/20 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-brand-light border border-white/10 flex items-center justify-center text-text-dark hover:bg-brand-teal/10 hover:text-brand-teal hover:border-brand-teal/20 transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-brand-light border border-white/10 flex items-center justify-center text-text-dark hover:bg-brand-teal/10 hover:text-brand-teal hover:border-brand-teal/20 transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section >
  );
}
