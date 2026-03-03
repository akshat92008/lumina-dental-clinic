import { motion } from "motion/react";
import { CheckCircle2, Shield, Sparkles, Smile } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <Shield className="w-8 h-8 text-brand-teal" />,
            title: "Advanced Equipment",
            description: "State-of-the-art dental technology ensuring precise diagnoses and comfortable treatments.",
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-brand-teal" />,
            title: "Experienced Dentists",
            description: "Our highly trained professionals have years of clinical experience in modern dentistry.",
        },
        {
            icon: <Smile className="w-8 h-8 text-brand-teal" />,
            title: "Comfortable Environment",
            description: "A calming, spa-like atmosphere designed to reduce dental anxiety and promote relaxation.",
        },
        {
            icon: <Sparkles className="w-8 h-8 text-brand-teal" />,
            title: "Affordable Pricing",
            description: "Transparent costs, flexible payment plans, and most major insurances accepted.",
        },
    ];

    return (
        <section id="why-us" className="section-padding bg-brand-light relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="subheading-luxury text-brand-teal">The Lumina Difference</h2>
                        <h3 className="heading-luxury mb-6">Why Choose Us</h3>
                        <p className="text-lg text-text-muted">
                            We are committed to providing the highest standard of dental care in a
                            professional, caring, and comfortable environment.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                            className="bg-white rounded-[2rem] p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 border border-white/10 flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-8 border border-brand-teal/20 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-text-muted leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
