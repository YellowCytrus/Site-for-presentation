import React, { useState } from "react";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import Modal from "./Modal";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-white pt-16 pb-8 border-t border-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          
          {/* Contact Info */}
          <div>
            <div className="inline-block px-3 py-1 bg-orange-50 text-primary rounded-lg text-xs font-bold mb-4">
                READY TO START
            </div>
            <h2 className="text-4xl font-bold text-techBlue mb-6">
              Давайте делать бизнес «Чётко. Вкусно»
            </h2>
            <p className="text-textMuted mb-8 max-w-sm text-lg">
              Оставьте заявку. Мы составим меню и смету для вашего офиса за 24 часа.
            </p>

            <div className="space-y-4">
              <a href="tel:+79990000000" className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-orange-50 transition-colors group">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-textMuted group-hover:text-primary transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-textMuted font-bold uppercase">Телефон</p>
                  <p className="text-techBlue font-mono text-lg group-hover:text-primary transition-colors">+7 (999) 000-00-00</p>
                </div>
              </a>

              <a href="mailto:partners@chetko-vkusno.ru" className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-orange-50 transition-colors group">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-textMuted group-hover:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                   <p className="text-xs text-textMuted font-bold uppercase">Email</p>
                  <p className="text-techBlue font-mono text-lg group-hover:text-primary transition-colors">partners@chetko-vkusno.ru</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-100 shadow-xl shadow-stone-200/50">
            <h3 className="text-xl font-bold text-techBlue mb-6">
                Заявка на подключение
            </h3>
            
            {formStatus === 'success' ? (
              <div className="h-[320px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-techBlue mb-2">Заявка принята!</h4>
                <p className="text-textMuted text-sm">Наш менеджер уже изучает ваш запрос.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs text-textMuted font-bold ml-1 uppercase">Ваше имя</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-textMain focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-textMuted font-bold ml-1 uppercase">Компания</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-textMain focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400"
                    placeholder="Название"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-textMuted font-bold ml-1 uppercase">Телефон</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-textMain focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-stone-400"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-primary hover:bg-primaryHover text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 mt-4 shadow-warm disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
                >
                  {formStatus === 'submitting' ? 'Отправка...' : 'Отправить'}
                  {!formStatus && <ArrowRight size={18} />}
                </button>
                <div className="text-center pt-2">
                    <p className="text-[10px] text-textMuted">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <button 
                        type="button" 
                        onClick={() => setModalType('privacy')}
                        className="text-techBlue hover:text-primary underline decoration-stone-300 hover:decoration-primary underline-offset-2"
                    >
                        политикой обработки данных
                    </button>
                    </p>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-xs font-mono">© 2024 Чётко.Вкусно</p>
          <div className="flex gap-6">
            <button 
              onClick={() => setModalType('privacy')} 
              className="text-textMuted hover:text-primary transition-colors text-xs font-medium"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setModalType('terms')}
              className="text-textMuted hover:text-primary transition-colors text-xs font-medium"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={modalType === 'privacy'} 
        onClose={() => setModalType(null)}
        title="Политика конфиденциальности"
      >
        <div className="space-y-4 font-sans text-sm">
            <p>Настоящая Политика конфиденциальности персональных данных действует в отношении всей информации, которую платформа может получить о Пользователе.</p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <strong className="block text-techBlue mb-2">1. Сбор данных</strong>
                Мы собираем только технические данные, необходимые для обеспечения работы сервиса и обратной связи.
            </div>
        </div>
      </Modal>

      <Modal 
        isOpen={modalType === 'terms'} 
        onClose={() => setModalType(null)}
        title="Публичная оферта"
      >
         <div className="space-y-4 font-sans text-sm">
            <p>Публичная оферта на оказание услуг по организации корпоративного питания.</p>
             <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <strong className="block text-techBlue mb-2">1. Предмет</strong>
                Исполнитель обязуется оказать услуги, а Заказчик оплатить их согласно тарифному плану.
            </div>
        </div>
      </Modal>
    </footer>
  );
};

export default Contact;