import React from "react";
import { ClipboardCheck, Truck, ChefHat, Timer } from "lucide-react";

const Standards: React.FC = () => {
  return (
    <section id="standards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-mono font-medium text-textMuted mb-4 shadow-sm">
            PROCESS_LOG
          </div>
          <h2 className="text-3xl font-bold text-techBlue mb-4">
            Как мы добиваемся надежности?
          </h2>
          <p className="text-textMuted max-w-xl mx-auto">
             Наш секрет — не магия, а регламент. Каждый этап от поставщика до вашего стола оцифрован и контролируется.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-card border border-stone-100 items-start md:items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                    <Truck size={20} />
                </div>
                <div className="flex-grow">
                    <h3 className="font-bold text-techBlue text-lg">Работа с поставщиками</h3>
                    <p className="text-textMuted text-sm">Гарантируем объемы и финансовую дисциплину. Проверяем сертификаты.</p>
                </div>
                <div className="font-mono text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-md hidden md:block">
                    STATUS: VERIFIED
                </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-card border border-stone-100 items-start md:items-center">
                 <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 font-bold">
                    <ChefHat size={20} />
                </div>
                <div className="flex-grow">
                    <h3 className="font-bold text-techBlue text-lg">Процесс приготовления</h3>
                    <p className="text-textMuted text-sm">Строгие техкарты. Исключаем "авторское видение" там, где нужен стандарт.</p>
                </div>
                <div className="font-mono text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-md hidden md:block">
                    RECIPE: EXACT
                </div>
            </div>

             {/* Step 3 */}
             <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-card border border-stone-100 items-start md:items-center">
                 <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 font-bold">
                    <Timer size={20} />
                </div>
                <div className="flex-grow">
                    <h3 className="font-bold text-techBlue text-lg">Тайминг сервиса</h3>
                    <p className="text-textMuted text-sm">Мы знаем, что обед — это ровно час. Логистика рассчитана по минутам.</p>
                </div>
                <div className="font-mono text-xs text-green-600 bg-green-50 px-3 py-1 rounded-md hidden md:block">
                    DELAY: 0ms
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;