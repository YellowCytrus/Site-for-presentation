import React from "react";
import { COOPERATION_MODES } from "../constants";
import { Check, ArrowRight } from "lucide-react";

const Cooperation: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="cooperation" className="py-20 bg-techBlue text-white rounded-t-[40px] md:rounded-t-[60px] relative -mt-10 z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Форматы сотрудничества
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {COOPERATION_MODES.map((mode, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-3xl p-6 md:p-8 flex flex-col h-full border border-slate-700 hover:border-slate-500 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-primary mb-6">
                <mode.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {mode.title}
              </h3>
              <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">
                {mode.description}
              </p>

              <div className="space-y-4 mb-8">
                  {mode.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300 list-none">
                          <Check size={16} className="text-primary mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                      </li>
                  ))}
              </div>

              <a
                href="#contact"
                onClick={handleNavClick}
                className="w-full py-3.5 rounded-xl bg-white text-techBlue font-bold text-center hover:bg-primary hover:text-white transition-colors text-sm flex items-center justify-center gap-2 group"
              >
                Выбрать
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cooperation;