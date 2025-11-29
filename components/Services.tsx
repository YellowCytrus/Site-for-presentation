import React from "react";
import { BENEFITS } from "../constants";

const Services: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center md:text-left">
            <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-2 block">
                Для бизнеса
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-techBlue">
                Комплексные решения
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="bg-stone-50 p-6 md:p-8 rounded-3xl border border-stone-100 hover:border-orange-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-techBlue mb-6 group-hover:text-primary transition-colors border border-stone-100">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-techBlue mb-3">
                {benefit.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;