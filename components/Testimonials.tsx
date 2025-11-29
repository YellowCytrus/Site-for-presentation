import React from "react";
import { TESTIMONIALS } from "../constants";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
            <div>
                <h2 className="text-2xl font-bold text-techBlue">
                Говорят партнеры
                </h2>
                <p className="text-sm text-textMuted mt-1">Реальный опыт работы с системой</p>
            </div>
        </div>

        {/* Scroll Container with Snap - Mobile Optimized */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-4 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-0">
          {TESTIMONIALS.map((review, index) => (
            <div 
                key={index} 
                className="min-w-[85vw] md:min-w-0 snap-center bg-white p-6 rounded-3xl border border-stone-100 shadow-card flex flex-col justify-between"
            >
              <div>
                  <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map(star => <Star key={star} size={14} className="fill-primary text-primary" />)}
                  </div>
                  <p className="text-textMain text-sm leading-relaxed mb-6 font-medium">
                    "{review.text}"
                  </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-stone-50">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-textMuted text-sm font-bold">
                    {review.author.charAt(0)}
                </div>
                <div>
                    <h4 className="text-techBlue text-sm font-bold">{review.author}</h4>
                    <p className="text-textMuted text-xs">{review.role}, {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;