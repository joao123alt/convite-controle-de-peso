import { Download, PlaySquare, Target, LineChart, Leaf, Scale, Utensils } from "lucide-react";

export interface Step {
  icon: React.ReactNode;
  label: string;
  desc: string;
}

export interface Pillar {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const steps: Step[] = [
  { icon: <Download size={20} />, label: "Instalar o app", desc: "Disponível para Android e iOS" },
  { icon: <PlaySquare size={20} />, label: "Assistir 3 aulas", desc: "Sobre o nosso método" },
  { icon: <Target size={20} />, label: "Criar um plano", desc: "Totalmente personalizado" },
  { icon: <LineChart size={20} />, label: "Registrar o peso", desc: "E acompanhar as métricas" },
];

export const pillars: Pillar[] = [
  { icon: <Leaf size={24} />, title: "100% Natural e Comportamental", desc: "Sem medicamentos, injeções ou 'canetas mágicas'. Foco no seu acompanhamento psicológico duradouro." },
  { icon: <Scale size={24} />, title: "O Hábito da Pesagem Diária", desc: "Feito de forma especial (de manhã, sem roupas) para gerar autoconsciência e conexões neurais." },
  { icon: <LineChart size={24} />, title: "Cálculo do IRA Real", desc: "Defina seu Índice de Redução Alimentar. O algoritmo calcula seu esforço real e ajusta a trajetória da meta." },
  { icon: <Utensils size={24} />, title: "Liberdade Alimentar Total", desc: "Sem dietas restritivas ou alimentos proibidos. Coma o que gosta e aprenda a dominar seus exageros." },
];
