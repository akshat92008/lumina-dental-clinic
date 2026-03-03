import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      before: "https://picsum.photos/seed/before1/600/400",
      after: "https://picsum.photos/seed/after1/600/400",
      title: "Invisalign Treatment",
      description: "12 months of clear aligner therapy.",
    },
    {
      before: "https://picsum.photos/seed/before2/600/400",
      after: "https://picsum.photos/seed/after2/600/400",
      title: "Porcelain Veneers",
      description: "Complete smile makeover with 8 veneers.",
    },
    {
      before: "https://picsum.photos/seed/before3/600/400",
      after: "https://picsum.photos/seed/after3/600/400",
      title: "Teeth Whitening",
      description: "Professional in-office whitening session.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-teal tracking-wider uppercase mb-3">
            Real Results
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-brand-navy">
            Before & After Gallery
          </h3>
          <p className="text-lg text-text-muted">
            See the transformative power of our treatments. Slide to compare the
            before and after results of our actual patients.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-slate-100 aspect-[3/4] md:aspect-[16/9]">
            {images.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Before */}
                  <div className="relative h-1/2 md:h-full group">
                    <img
                      src={item.before}
                      alt={`Before ${item.title}`}
                      className="w-full h-full object-cover grayscale-[0.3]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-navy/70 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                      Before
                    </div>
                  </div>
                  {/* After */}
                  <div className="relative h-1/2 md:h-full">
                    <img
                      src={item.after}
                      alt={`After ${item.title}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-brand-teal/90 backdrop-blur-sm text-brand-navy px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                      After
                    </div>
                  </div>
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/60 to-transparent p-8 md:p-10 text-white">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-brand-light/90 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-text-dark hover:text-brand-teal hover:scale-110 transition-all z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-text-dark hover:text-brand-teal hover:scale-110 transition-all z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                    ? "bg-brand-teal w-8"
                    : "bg-brand-navy/20 hover:bg-brand-navy/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
