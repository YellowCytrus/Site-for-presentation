import { 
  Clock, 
  UtensilsCrossed, 
  FileCheck, 
  Briefcase, 
  ChefHat, 
  Truck, 
  Users,
  CalendarCheck
} from "lucide-react";
import { NavItem, Feature, CooperationMode, Testimonial } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Концепция", href: "#concept" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Стандарты", href: "#standards" },
  { label: "Сотрудничество", href: "#cooperation" },
  { label: "Контакты", href: "#contact" },
];

export const PHILOSOPHY_FEATURES: Feature[] = [
  {
    title: "Вкусно",
    description: "Наш базовый продукт: свежие ингредиенты, авторское меню и безупречное качество. Еда — это удовольствие.",
    icon: UtensilsCrossed
  },
  {
    title: "Чётко",
    description: "Наш ключевой актив: скорость подачи, точность рецептур и идеальный тайминг. Сервис — это технология.",
    icon: Clock
  }
];

export const COOPERATION_MODES: CooperationMode[] = [
  {
    title: "Корпоративные аккаунты",
    description: "Персонализированный сервис питания для сотрудников.",
    icon: Users,
    benefits: [
      "Система учета лимитов",
      "Детализированная отчетность",
      "Разнообразное меню каждый день"
    ]
  },
  {
    title: "Площадка для мероприятий",
    description: "Организация банкетов и переговоров «под ключ».",
    icon: CalendarCheck,
    benefits: [
      "Идеальный тайминг",
      "Полная координация служб",
      "Техническое оснащение"
    ]
  },
  {
    title: "Постоянный поставщик",
    description: "Стабильные и долгосрочные контракты.",
    icon: Truck,
    benefits: [
      "Прогнозируемые объемы",
      "Финансовая дисциплина",
      "Своевременная оплата"
    ]
  }
];

export const BENEFITS: Feature[] = [
  {
    title: "Корпоративное питание",
    description: "Вкусные обеды точно в срок. Повышаем лояльность вашей команды.",
    icon: ChefHat
  },
  {
    title: "Бизнес-мероприятия",
    description: "Проведение переговоров и банкетов без накладок.",
    icon: Briefcase
  },
  {
    title: "Прозрачный документооборот",
    description: "Работаем «в белую». Все счета и акты всегда вовремя.",
    icon: FileCheck
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Наконец-то мы нашли партнера, который понимает, что такое 'обед ровно в 13:00'. Никаких задержек за полгода работы.",
    author: "Алексей Смирнов",
    role: "HR-директор",
    company: "TechSoft Corp"
  },
  {
    text: "Документооборот идеальный. Бухгалтерия счастлива, сотрудники сыты. Спасибо за системный подход.",
    author: "Елена Вавилова",
    role: "Финансовый менеджер",
    company: "Logistics Group"
  },
  {
    text: "Проводили совет директоров. Всё было организовано поминутно. Сервис незаметный, но безупречный.",
    author: "Дмитрий Орлов",
    role: "Генеральный директор",
    company: "BuildInvest"
  }
];