import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export default function SmileGallery() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    // We are using distinct high-quality demonstration images for before/after. 
    // These represent an Invisalign or Veneer makeover transformation.
    const beforeImage = "https://images.unsplash.com/photo-1598256989487-1e58e3f9477e?auto=format&fit=crop&q=80&w=1200&h=800"; // Less straight, off-color teeth example
    const afterImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e94?auto=format&fit=crop&q=80&w=1200&h=800"; // Perfect smile example

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", stopDragging);
            window.addEventListener("touchmove", onTouchMove, { passive: false });
            window.addEventListener("touchend", stopDragging);
        } else {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", stopDragging);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", stopDragging);
        }

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", stopDragging);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", stopDragging);
        };
    }, [isDragging]);

    return (
        <section id="gallery" className="section-padding bg-brand-light overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="subheading-luxury text-brand-teal">
                        Real Results
                    </h2>
                    <h3 className="heading-luxury mb-8">
                        Transforming Smiles Daily
                    </h3>
                    <p className="text-lg text-text-muted">
                        See the difference our advanced cosmetic and restorative treatments can make. Drag the slider to compare before and after.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div
                        ref={containerRef}
                        className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl bg-brand-navy/10"
                        onMouseDown={(e) => {
                            setIsDragging(true);
                            handleMove(e.clientX);
                        }}
                        onTouchStart={(e) => {
                            setIsDragging(true);
                            handleMove(e.touches[0].clientX);
                        }}
                    >
                        {/* After Image (Background) */}
                        <div className="absolute inset-0">
                            <img
                                src={afterImage}
                                alt="After treatment"
                                className="w-full h-full object-cover object-center"
                                draggable={false}
                            />
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-sm font-bold text-brand-navy shadow-sm">
                                After
                            </div>
                        </div>

                        {/* Before Image (Foreground, Clipped) */}
                        <div
                            className="absolute inset-0 z-10"
                            style={{
                                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                            }}
                        >
                            <img
                                src={beforeImage}
                                alt="Before treatment"
                                className="w-full h-full object-cover object-center"
                                draggable={false}
                            />
                            <div className="absolute bottom-4 left-4 bg-brand-navy/90 backdrop-blur px-3 py-1.5 rounded-full text-sm font-bold text-white shadow-sm">
                                Before
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)] touch-none"
                            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-brand-teal">
                                <div className="flex gap-1">
                                    {/* Left Arrow */}
                                    <div className="w-1.5 h-3 bg-slate-400 rounded-full clip-path-polygon-[100%_0,0_50%,100%_100%]">
                                        <svg
                                            width="6"
                                            height="10"
                                            viewBox="0 0 6 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M5 9L1 5L5 1" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    {/* Right Arrow */}
                                    <div className="w-1.5 h-3 bg-slate-400 rounded-full clip-path-polygon-[0_0,100%_50%,0_100%]">
                                        <svg
                                            width="6"
                                            height="10"
                                            viewBox="0 0 6 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1 9L5 5L1 1" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center flex-wrap gap-4">
                        <button className="px-6 py-2.5 rounded-full border border-brand-teal/20 bg-white hover:bg-brand-teal/5 text-[15px] font-semibold text-brand-navy transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md">
                            Invisalign Cases
                        </button>
                        <button className="px-6 py-2.5 rounded-full bg-brand-navy hover:bg-brand-teal hover:text-brand-navy text-[15px] font-bold text-white transition-all shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
                            Veneer Makeovers
                        </button>
                        <button className="px-6 py-2.5 rounded-full border border-brand-teal/20 bg-white hover:bg-brand-teal/5 text-[15px] font-semibold text-brand-navy transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md">
                            Dental Implants
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
