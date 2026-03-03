import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"), // Note: our DB schema didn't include subject, we'll append it to the message
      message: `[Subject: ${formData.get("subject")}] \n\n${formData.get("message")}`,
    };

    try {
      const baseUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${baseUrl}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact request.");
      }

      setIsSuccess(true);
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Contact Error:", error);
      setErrorMessage("There was a problem sending your message. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="subheading-luxury text-brand-teal">
              Get In Touch
            </h2>
            <h3 className="heading-luxury mb-8">
              We'd Love to Hear From You
            </h3>
            <p className="text-lg text-text-muted mb-10">
              Whether you have a question about our services, need to schedule
              an appointment, or just want to say hello, our team is here to
              help.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">
                    Our Location
                  </h4>
                  <p className="text-text-muted">
                    123 Smile Avenue, Suite 400
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">
                    Phone Number
                  </h4>
                  <p className="text-text-muted">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-1">
                    Email Address
                  </h4>
                  <p className="text-text-muted">hello@luminadental.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative shadow-inner">
              <img
                src="https://picsum.photos/seed/map/800/400"
                alt="Map location"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg font-bold text-brand-navy flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-teal" />
                  View on Google Maps
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] border border-brand-light shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h4 className="text-3xl font-bold text-brand-navy mb-8 tracking-tight">
              Send us a Message
            </h4>

            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h5 className="text-2xl font-bold text-brand-navy">
                  Message Sent!
                </h5>
                <p className="text-text-muted">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-text-dark"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-text-dark"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="text-sm font-medium text-text-dark"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-text-dark"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                {errorMessage && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full !py-4"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
