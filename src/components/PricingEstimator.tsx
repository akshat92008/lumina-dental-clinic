import { useState } from "react";
import { motion } from "motion/react";
import { Calculator } from "lucide-react";

export default function PricingEstimator() {
    const treatments = [
        { id: "invisalign", name: "Invisalign Clear Aligners", basePrice: 4500 },
        { id: "veneers", name: "Porcelain Veneers (per tooth)", basePrice: 1200 },
        { id: "implant", name: "Dental Implant (single)", basePrice: 3500 },
        { id: "whitening", name: "Professional Teeth Whitening", basePrice: 450 },
    ];

    const months = [6, 12, 18, 24];

    const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
    const [selectedMonths, setSelectedMonths] = useState(12);
    const [downPayment, setDownPayment] = useState(500);

    // Simple calculation: (Base Price - Down Payment) / Months + small fixed APR for illustration (e.g. 5% total)
    const calculateMonthly = () => {
        const principal = Math.max(0, selectedTreatment.basePrice - downPayment);
        if (principal === 0) return 0;

        // Simplistic interest calculation for UI illustration
        const interestRate = 0.05;
        const totalWithInterest = principal * (1 + interestRate);
        return Math.round(totalWithInterest / selectedMonths);
    };

    return (
        <section className="section-padding bg-brand-light relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
                >
                    <div className="grid md:grid-cols-5 h-full">
                        {/* Left Side: Controls */}
                        <div className="md:col-span-3 p-8 lg:p-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                                    <Calculator className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-navy">Payment Estimator</h3>
                                    <p className="text-sm text-text-muted">Discover affordable financing options</p>
                                </div>
                            </div>

                            {/* Treatment Selection */}
                            <div className="mb-8">
                                <label className="block text-sm font-bold text-text-dark mb-3">Select Treatment</label>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {treatments.map((t) => (
                                        <button
                                            key={t.id}
                                            onClick={() => setSelectedTreatment(t)}
                                            className={`text-left p-3 rounded-xl border-2 transition-all ${selectedTreatment.id === t.id
                                                ? "border-brand-teal bg-brand-teal/5"
                                                : "border-brand-light bg-white hover:border-brand-teal/20"
                                                }`}
                                        >
                                            <p className={`font-semibold ${selectedTreatment.id === t.id ? "text-brand-teal" : "text-text-dark"}`}>
                                                {t.name}
                                            </p>
                                            <p className={`text-sm ${selectedTreatment.id === t.id ? "text-brand-teal/80" : "text-text-muted"}`}>
                                                Est. ${t.basePrice.toLocaleString()}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Down Payment Slider */}
                            <div className="mb-8">
                                <div className="flex justify-between items-end mb-3">
                                    <label className="block text-sm font-bold text-text-dark">Initial Down Payment</label>
                                    <span className="text-lg font-bold text-brand-teal">${downPayment.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max={selectedTreatment.basePrice}
                                    step="100"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(Number(e.target.value))}
                                    className="w-full h-2 bg-brand-light rounded-lg appearance-none cursor-pointer accent-brand-teal hover:accent-brand-aqua transition-colors"
                                />
                                <div className="flex justify-between mt-2 text-xs font-medium text-text-muted">
                                    <span>$0</span>
                                    <span>${selectedTreatment.basePrice.toLocaleString()} (Paid in full)</span>
                                </div>
                            </div>

                            {/* Term Selection */}
                            <div>
                                <label className="block text-sm font-bold text-text-dark mb-3">Payment Term (Months)</label>
                                <div className="flex gap-3">
                                    {months.map((m) => (
                                        <button
                                            key={m}
                                            onClick={() => setSelectedMonths(m)}
                                            className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${selectedMonths === m
                                                ? "border-brand-teal bg-brand-teal/5 text-brand-teal"
                                                : "border-brand-light bg-white text-text-muted hover:border-brand-teal/20"
                                                }`}
                                        >
                                            {m} mo
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Result */}
                        <div className="md:col-span-2 bg-brand-navy p-8 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                            <p className="text-brand-light/60 font-medium mb-2 relative z-10">Estimated Payment</p>
                            <div className="flex items-end gap-2 mb-6 relative z-10">
                                <span className="text-5xl md:text-6xl font-bold tracking-tight">${calculateMonthly()}</span>
                                <span className="text-brand-light/60 mb-2 font-medium">/mo</span>
                            </div>

                            <div className="space-y-4 mb-8 relative z-10">
                                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                    <span className="text-brand-light/80">Total Treatment</span>
                                    <span className="font-semibold">${selectedTreatment.basePrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                    <span className="text-brand-light/80">Down Payment</span>
                                    <span className="font-semibold">-${downPayment.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-brand-light/80">Amount Financed</span>
                                    <span className="font-semibold">${Math.max(0, selectedTreatment.basePrice - downPayment).toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="mt-auto relative z-10">
                                <p className="text-xs text-brand-light/60 mb-4 leading-relaxed">
                                    *This is an estimate for illustrative purposes only. Actual rates, payments, and terms will vary depending on your specific treatment plan and credit approval.
                                </p>
                                <a href="#booking" className="block text-center w-full py-4 px-6 bg-brand-teal hover:bg-brand-aqua text-brand-navy font-bold tracking-wide rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:scale-[0.98] transition-all">
                                    Discuss Financing Options
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
