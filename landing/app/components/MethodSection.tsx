"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./MethodSection.module.css";
import Image from "next/image";
import { PlaySquare, Hourglass, MessageCircle, Target, Leaf, Scale, LineChart, Utensils, Download } from "lucide-react";

const steps = [
  { icon: <Download size={20} />, label: "Instalar o app", desc: "Disponível para Android e iOS" },
  { icon: <PlaySquare size={20} />, label: "Assistir 3 aulas", desc: "Sobre o nosso método" },
  { icon: <Target size={20} />, label: "Criar um plano", desc: "Totalmente personalizado" },
  { icon: <LineChart size={20} />, label: "Registrar o peso", desc: "E acompanhar as métricas" },
];

const pillars = [
  { icon: <Leaf size={24} />, title: "100% Natural e Comportamental", desc: "Sem medicamentos, injeções ou 'canetas mágicas'. Foco no seu acompanhamento psicológico duradouro." },
  { icon: <Scale size={24} />, title: "O Hábito da Pesagem Diária", desc: "Feito de forma especial (de manhã, sem roupas) para gerar autoconsciência e conexões neurais." },
  { icon: <LineChart size={24} />, title: "Cálculo do IRA Real", desc: "Defina seu Índice de Redução Alimentar. O algoritmo calcula seu esforço real e ajusta a trajetória da meta." },
  { icon: <Utensils size={24} />, title: "Liberdade Alimentar Total", desc: "Sem dietas restritivas ou alimentos proibidos. Coma o que gosta e aprenda a dominar seus exageros." },
];

export default function MethodSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % pillars.length);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={`section ${styles.section}`} id="metodo">
      <div className="container">

        {/* Top label */}
        <div className={`section-header ${styles.header} animate-fadeInUp`}>
          <span className="label">O Método VidaVem</span>
          <div className="divider" />
          <h2 className="title-lg">
            Reprogramação da <span className="gradient-text">Raiz do Problema</span>
          </h2>
          <p className={`text-body ${styles.subtitle}`}>
            O problema não é a balança, é o comportamento. Uma jornada de aumento da autoconsciência 
            corporal para eliminar o efeito sanfona sem o uso de medicamentos.
          </p>
        </div>

        {/* Main grid: illustration + content */}
        <div className={styles.grid}>

         

          {/* Right: pillars + steps */}
          <div className={styles.rightCol}>

            {/* Pillars Carousel */}
            <div 
              className={styles.carouselContainer}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className={styles.carouselCard}
                onClick={() => setActiveIndex((prev) => (prev + 1) % pillars.length)}
              >
                <div key={activeIndex} className={`${styles.animateContent} ${styles.carouselInnerContent}`}>
                  <div className={styles.carouselHeader}>
                    <span className={styles.carouselIcon}>{pillars[activeIndex].icon}</span>
                    <h3 className={styles.carouselTitle}>{pillars[activeIndex].title}</h3>
                  </div>
                  <p className={styles.carouselDesc}>{pillars[activeIndex].desc}</p>
                </div>
                
                {/* Progress bar indicator */}
                <div className={styles.carouselProgress}>
                  <div 
                    key={activeIndex}
                    className={`${styles.carouselProgressBar} ${styles.activeProgressBar} ${isHovered ? styles.pausedProgressBar : ""}`}
                  />
                </div>
              </div>

              {/* Dots Indicators */}
              <div className={styles.dotsContainer}>
                {pillars.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ""}`}
                    aria-label={`Pilar ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className={styles.innerDivider} />

            {/* Steps - 4 compact items in 2x2 grid */}
            <div className={styles.stepsLabel}>
              <span className="label" style={{ fontSize: "11px" }}>A Jornada — Passo a Passo</span>
            </div>
            <div className={styles.stepsGrid}>
              {steps.map((step, i) => (
                <div key={step.label} className={`${styles.step} animate-fadeInUp delay-${(i + 3) * 100}`}>
                  <span className={styles.stepIcon}>{step.icon}</span>
                  <div>
                    <p className={styles.stepLabel}>{step.label}</p>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
