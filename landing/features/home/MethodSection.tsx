"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./MethodSection.module.css";
import { steps, pillars } from "@/data/method";

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

        {/* Main grid: video + content */}
        <div className={styles.grid}>

          {/* Left: Video */}
          <div className={`${styles.videoCol} animate-fadeInUp delay-100`}>
            <div className={styles.videoWrapper}>
              <video
                src="/videos/apresentacaometodo.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                className={styles.videoElement}
                poster="/assets/welcome-bg.webp"
              />
              <div className={styles.videoGlow} />
            </div>
          </div>

          {/* Right: pillars + steps */}
          <div className={`${styles.rightCol} animate-fadeInUp delay-200`}>

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
