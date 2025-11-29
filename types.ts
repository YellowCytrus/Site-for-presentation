import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CooperationMode {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}