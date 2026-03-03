import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, Mail, FileText, MessageSquare } from "lucide-react";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const appointmentData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      date: formData.get("date"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit appointment request.");
      }

      setIsSuccess(true);
      // Auto-hide success message after 5 seconds to reset form
      setTimeout(() => setIsSuccess(false), 5000);
      e.currentTarget.reset(); // Clear the form
    } catch (error) {
      console.error("Booking Error:", error);
      setErrorMessage("There was a problem submitting your request. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-aqua/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container-custom">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-5">
            {/* Info Panel */}
            <div className="lg:col-span-2 bg-brand-navy text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/400/800')] opacity-10 mix-blend-overlay"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Book Your Visit</h3>
                <p className="text-brand-light/80 mb-10 leading-relaxed">
                  Ready for a brighter smile? Fill out the form, and our team
                  will get back to you to confirm your appointment.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-light/60 font-medium">
                        Call Us Directly
                      </p>
                      <p className="text-lg font-bold">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-light/60 font-medium">
                        Email Us
                      </p>
                      <p className="text-lg font-bold">
                        hello@luminadental.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-light/60 font-medium">
                        Working Hours
                      </p>
                      <p className="text-base font-bold">
                        Mon - Fri: 8am - 6pm
                      </p>
                      <p className="text-base font-bold">Sat: 9am - 2pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-3 p-10 md:p-12">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10"
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
                  <h4 className="text-3xl font-bold text-brand-navy">
                    Request Sent!
                  </h4>
                  <p className="text-text-muted text-lg max-w-sm">
                    Thank you for reaching out. Our team will contact you
                    shortly to confirm your appointment details.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-brand-teal font-medium hover:underline"
                  >
                    Book another appointment
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-text-dark flex items-center gap-2"
                      >
                        <User className="w-4 h-4 text-slate-400" /> Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light/50 focus:bg-white focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-text-dark flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4 text-slate-400" /> Phone
                        Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light/50 focus:bg-white focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-text-dark flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4 text-slate-400" /> Email
                        Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light/50 focus:bg-white focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium text-text-dark flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4 text-slate-400" /> Service
                        Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light/50 focus:bg-white focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none appearance-none"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="general">General Dentistry</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="implants">Dental Implants</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="emergency">Emergency Care</option>
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="date"
                        className="text-sm font-medium text-text-dark flex items-center gap-2"
                      >
                        <Calendar className="w-4 h-4 text-slate-400" /> Preferred
                        Date
                      </label>
                      <button type="button" className="text-xs text-brand-teal font-medium hover:underline bg-brand-teal/5 px-2 py-0.5 rounded-md">
                        Browse Calendar (Integration Soon)
                      </button>
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light/50 focus:bg-white focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-text-dark flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-slate-400" /> Additional
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-light/50 focus:bg-white focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-colors outline-none resize-y"
                      placeholder="Tell us about your concern or ask any questions..."
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-teal text-brand-navy py-4 rounded-xl font-bold text-lg hover:bg-brand-aqua transition-colors shadow-lg shadow-brand-teal/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Request Appointment"
                    )}
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
