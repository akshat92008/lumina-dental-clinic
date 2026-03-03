import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Edge-to-Edge Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Reference the newly moved local video in the public folder */}
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Premium Dark Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(180deg, rgba(14,26,43,0.75) 0%, rgba(14,26,43,0.65) 100%)' }}
        ></div>
      </div>

      <div className="container-custom relative z-10 w-full flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center text-center mt-12 md:mt-20"
        >
          {/* Text Content */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 !text-white drop-shadow-lg text-center max-w-4xl mx-auto"
          >
            Perfecting <span className="text-brand-teal">harmony</span> <br className="hidden md:block" />
            and <span className="text-brand-teal">confidence</span> in
            <br className="hidden md:block" />
            every radiant smile.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl font-light drop-shadow mx-auto text-center"
          >
            Experience state-of-the-art dentistry in a relaxing environment.
            We combine advanced technology with compassionate care to give you
            the smile you deserve.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mb-16 w-full"
          >
            <div className="flex flex-col sm:flex-row justify-center gap-5 w-full">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Request an Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+1234567890"
                className="btn-secondary !text-white !border-white/40 hover:!bg-white/10 hover:!border-white/60"
              >
                Consult Online
              </a>
            </div>
            <p className="mt-4 text-sm font-medium text-white/70 tracking-wide">
              Takes less than 30 seconds
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-8 md:gap-16 pt-8 border-t border-white/20 w-full max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-[#2FD3C6]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wide">Licensed</p>
                <p className="text-sm text-white/70 font-light font-sans">Professionals</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-[#2FD3C6]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-wide">Flexible</p>
                <p className="text-sm text-white/70 font-light font-sans">Scheduling</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
