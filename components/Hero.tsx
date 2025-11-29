import React from "react";
import { ArrowRight, ChevronDown, CheckCircle2, Clock, Leaf, ChefHat } from "lucide-react";

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      
      {/* Background Decor - Warm Organic Blob */}
      <div className="absolute top-[-10%] right-[-20%] w-[600px] h-[600px] bg-orange-100/60 rounded-full blur-[100px] pointer-events-none md:w-[800px] md:h-[800px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Tech Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono font-medium text-textMuted uppercase">System Online</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-techBlue mb-6 leading-[1.1]">
              Понятная еда. <br />
              <span className="text-primary">Прозрачный бизнес.</span>
            </h1>
            
            <p className="text-textMuted text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Мы объединили искусство кулинарии с IT-точностью. Операционная система для вашего корпоративного питания.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-8 py-4 bg-techBlue hover:bg-slate-800 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 active:scale-95"
              >
                Подключить компанию
                <ArrowRight size={20} />
              </a>
              <a
                href="#concept"
                onClick={(e) => handleNavClick(e, 'concept')}
                className="px-8 py-4 bg-white border border-stone-200 hover:border-orange-200 text-textMain rounded-2xl font-bold text-lg transition-all shadow-card hover:shadow-md active:scale-95"
              >
                Как это работает
              </a>
            </div>

            {/* Stats / Trust */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 text-sm text-textMuted font-medium">
               <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg">
                   <Clock size={16} className="text-primary" />
                   <span>Тайминг <span className="text-techBlue font-bold font-mono">100%</span></span>
               </div>
               <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg">
                   <Leaf size={16} className="text-green-600" />
                   <span>Свежие продукты</span>
               </div>
            </div>
          </div>

          {/* Visual Element - "App Card" Style */}
          <div className="flex-1 w-full max-w-md lg:max-w-full relative hidden md:block">
             <div className="relative bg-white rounded-3xl p-6 shadow-2xl shadow-stone-200/50 border border-stone-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Header of Card */}
                <div className="flex justify-between items-center mb-6 border-b border-stone-100 pb-4">
                    <div className="flex gap-3 items-center">
                         <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-primary">
                            <ChefHat size={20} />
                         </div>
                         <div>
                             <h3 className="font-bold text-techBlue">Заказ #2491</h3>
                             <p className="text-xs text-textMuted font-mono">Сегодня, 12:30</p>
                         </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">В пути</span>
                </div>

                {/* Content of Card */}
                <div className="space-y-4">
                     <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                        <div className="flex items-center gap-3">
                             <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div> {/* Placeholder for food img */}
                             <div>
                                 <p className="font-bold text-sm text-techBlue">Ланч "Системный"</p>
                                 <p className="text-xs text-textMuted">450 ккал • Белки: 20г</p>
                             </div>
                        </div>
                        <span className="font-mono font-bold text-techBlue">x1</span>
                     </div>
                     
                     <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                        <div className="flex items-center gap-3">
                             <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                             <div>
                                 <p className="font-bold text-sm text-techBlue">Салат "Green Tech"</p>
                                 <p className="text-xs text-textMuted">120 ккал • Свежий урожай</p>
                             </div>
                        </div>
                        <span className="font-mono font-bold text-techBlue">x1</span>
                     </div>
                </div>

                {/* Footer of Card */}
                <div className="mt-6 flex justify-between items-center pt-4 border-t border-stone-100">
                    <span className="text-sm text-textMuted">Итого к оплате</span>
                    <span className="text-xl font-bold text-techBlue font-mono">0.00 ₽ <span className="text-xs text-primary bg-orange-50 px-2 py-0.5 rounded ml-2">Корп. счет</span></span>
                </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-techBlue text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                 <CheckCircle2 className="text-green-400" size={24} />
                 <div>
                     <p className="text-xs opacity-70">Статус системы</p>
                     <p className="font-bold">Работаем без сбоев</p>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;