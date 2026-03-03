import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Michael T.",
      role: "Patient since 2021",
      content:
        "I've always had anxiety about visiting the dentist, but the team at Lumina completely changed that. They are incredibly gentle, explain everything clearly, and the clinic feels like a spa.",
      rating: 5,
      image: "https://picsum.photos/seed/patient1/100/100",
    },
    {
      name: "Sarah J.",
      role: "Invisalign Patient",
      content:
        "Dr. Smith and her team gave me the smile I've always dreamed of. The Invisalign process was seamless, and the results exceeded my expectations. Highly recommend!",
      rating: 5,
      image: "https://picsum.photos/seed/patient2/100/100",
    },
    {
      name: "David L.",
      role: "Patient since 2023",
      content:
        "State-of-the-art equipment and a very professional staff. I had a complex implant procedure done here, and the recovery was much faster than I anticipated.",
      rating: 5,
      image: "https://picsum.photos/seed/patient3/100/100",
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-brand-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <h2 className="subheading-luxury text-brand-teal">
            Patient Stories
          </h2>
          <h3 className="heading-luxury mb-8">
            Don't Just Take Our<br />Word For It
          </h3>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="User"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-brand-teal text-brand-teal"
                  />
                ))}
              </div>
              <p className="text-sm font-bold text-brand-navy">
                4.9/5 from 500+ Google Reviews
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 relative flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-teal/10 rotate-180" />

              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-brand-teal text-brand-teal"
                  />
                ))}
              </div>

              <p className="text-text-muted leading-relaxed mb-8 relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-brand-navy">{review.name}</p>
                  <p className="text-sm text-text-muted">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
