import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Are you accepting new patients?",
      answer:
        "Yes, we are currently welcoming new patients of all ages to our practice. You can easily book your first appointment online or by calling our office.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit will include a comprehensive exam, digital x-rays, a professional cleaning, and a consultation with the dentist to discuss your oral health goals and any necessary treatment plans.",
    },
    {
      question: "Do you offer emergency dental care?",
      answer:
        "Yes, we reserve time in our daily schedule for dental emergencies. If you are experiencing severe pain, a broken tooth, or other urgent issues, please call us immediately.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "The American Dental Association recommends visiting the dentist for a routine checkup and cleaning at least twice a year. However, depending on your oral health needs, we may recommend more frequent visits.",
    },
    {
      question: "Do you offer teeth whitening?",
      answer:
        "Yes, we offer both in-office professional whitening for immediate results and custom take-home kits for your convenience.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="subheading-luxury text-brand-teal mb-4">
            Common Questions
          </h2>
          <h3 className="heading-luxury mb-8">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-text-muted">
            Find answers to some of the most common questions we receive from
            our patients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="bg-white border border-brand-light rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-brand-navy pr-8">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index
                    ? "bg-brand-teal/10 text-brand-teal"
                    : "bg-brand-light text-text-muted"
                    }`}
                >
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-muted leading-relaxed border-t border-brand-light pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
