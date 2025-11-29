import React from "react";
import { PHILOSOPHY_FEATURES } from "../constants";
import { Check } from "lucide-react";

const Concept: React.FC = () => {
  const FeatureIcon1 = PHILOSOPHY_FEATURES[0].icon;
  const FeatureIcon2 = PHILOSOPHY_FEATURES[1].icon;

  return (
    <section id="concept" className="py-16 md:py-24 bg-surfaceAlt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-techBlue mb-4">
            Философия продукта
          </h2>
          <p className="text-textMuted text-lg">
             В нашем названии заложен весь код нашей работы. Мы не выбираем между качеством и скоростью.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Card 1 - Tasty (Warm) */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-stone-100 flex flex-col h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-primary flex items-center justify-center mb-6 relative z-10">
                     <FeatureIcon1 size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-techBlue mb-3">
                    {PHILOSOPHY_FEATURES[0].title}
                </h3>
                <p className="text-textMuted leading-relaxed mb-8 flex-grow">
                    {PHILOSOPHY_FEATURES[0].description}
                </p>
                
                <div className="space-y-3 bg-stone-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3 text-sm text-textMain">
                        <Check size={16} className="text-primary" />
                        <span>Свежие фермерские продукты</span>
                    </div>
                     <div className="flex items-center gap-3 text-sm text-textMain">
                        <Check size={16} className="text-primary" />
                        <span>Авторское меню от шефа</span>
                    </div>
                </div>
            </div>

            {/* Card 2 - Sharp (Tech) */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-stone-100 flex flex-col h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-techBlue flex items-center justify-center mb-6 relative z-10">
                     <FeatureIcon2 size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-techBlue mb-3">
                    {PHILOSOPHY_FEATURES[1].title}
                </h3>
                <p className="text-textMuted leading-relaxed mb-8 flex-grow">
                    {PHILOSOPHY_FEATURES[1].description}
                </p>

                <div className="space-y-3 bg-stone-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3 text-sm text-textMain">
                        <Check size={16} className="text-techBlue" />
                        <span>Соблюдение тайминга <span className="font-mono text-xs bg-slate-200 px-1 rounded">±1min</span></span>
                    </div>
                     <div className="flex items-center gap-3 text-sm text-textMain">
                        <Check size={16} className="text-techBlue" />
                        <span>Точность рецептур</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;