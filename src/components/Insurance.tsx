import { motion } from "motion/react";
import { CreditCard, ShieldCheck, Banknote } from "lucide-react";

export default function Insurance() {
  const partners = [
    "Aetna",
    "Cigna",
    "Delta Dental",
    "MetLife",
    "UnitedHealthcare",
    "BlueCross",
  ];

  return (
    <section className="section-padding bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="subheading-luxury text-brand-teal mb-4">
              Insurance & Payment
            </h2>
            <h3 className="heading-luxury mb-8">
              Making Dental Care Accessible
            </h3>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              We believe that financial concerns shouldn't stand in the way of
              your oral health. We accept most major insurance plans and offer
              flexible payment options to fit your budget.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">
                    Insurance Accepted
                  </h4>
                  <p className="text-text-muted">
                    We handle the paperwork and maximize your benefits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-aqua/10 flex items-center justify-center text-brand-aqua shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">
                    Flexible Financing
                  </h4>
                  <p className="text-text-muted">
                    0% interest payment plans available through CareCredit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <Banknote className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">
                    Transparent Pricing
                  </h4>
                  <p className="text-text-muted">
                    No hidden fees. We provide clear estimates before any
                    treatment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-brand-light p-10 md:p-12 rounded-3xl border border-white/10"
          >
            <h4 className="text-xl font-bold text-brand-navy mb-8 text-center">
              Major Providers We Accept
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white h-20 rounded-xl shadow-sm border border-brand-light flex items-center justify-center p-4 hover:shadow-md transition-shadow grayscale hover:grayscale-0 opacity-70 hover:opacity-100 cursor-pointer"
                >
                  <span className="font-bold text-brand-navy text-lg text-center">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 mt-8 text-sm">
              Don't see your provider? Contact us to verify your coverage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
