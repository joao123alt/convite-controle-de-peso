import styles from "./HowItWorks.module.css";
import Image from "next/image";
import { Download, PlaySquare, LineChart, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Download size={24} />,
    title: "Instalar o app",
    desc: "Disponível gratuitamente para Android e iPhone. Baixe agora e inicie sua jornada de transformação de forma imediata.",
    highlight: "Acesso Rápido",
  },
  {
    number: "02",
    icon: <PlaySquare size={24} />,
    title: "Assistir 3 aulas sobre o método",
    desc: "Entenda os fundamentos da nossa abordagem com 3 aulas exclusivas que preparam sua mente para uma mudança real e sustentável.",
    highlight: "Conhecimento Base",
  },
  {
    number: "03",
    icon: <LineChart size={24} />,
    title: "Criar um plano personalizado",
    desc: "Defina suas metas e deixe nosso algoritmo calcular o esforço real necessário, ajustando a trajetória de forma inteligente para você.",
    highlight: "Estratégia Única",
  },
  {
    number: "04",
    icon: <TrendingUp size={24} />,
    title: "Registrar o peso diariamente e acompanhar as métricas",
    desc: "Crie o hábito da pesagem matinal para gerar autoconsciência corporal e monitore sua evolução de perto através das nossas métricas.",
    highlight: "Evolução Contínua",
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`} id="como-funciona">
      <div className="container">
        {/* Header */}
        <div className="section-header animate-fadeInUp">
          <span className="label">A Jornada</span>
          <div className="divider" />
          <h2 className="title-lg">
            Uma Jornada Estratégica{" "}
            <span className="gradient-text">na Palma da Sua Mão</span>
          </h2>
          <p className={`text-body ${styles.subtitle}`}>
            Veja como o aplicativo guia você passo a passo rumo ao controle
            definitivo do seu peso.
          </p>
        </div>

        {/* Illustration */}
        <div className={`${styles.illusWrap} animate-float`}>
          <Image
            src="/assets/women/trilha_de_sucesso-removebg-preview.webp"
            alt="Trilha de sucesso — jornada VidaVem"
            width={280}
            height={280}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`${styles.stepCard} animate-fadeInUp delay-${(i + 1) * 100}`}
            >
              {/* Left: number + connector */}
              <div className={styles.stepLeft}>
                <div className={styles.stepNumber}>{step.number}</div>
                {i < steps.length - 1 && (
                  <div className={styles.connector} />
                )}
              </div>

              {/* Right: card */}
              <div className={`card ${styles.stepContent}`}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepIcon}>{step.icon}</span>
                  <div>
                    <h3 className={`title-sm ${styles.stepTitle}`}>
                      {step.title}
                    </h3>
                    <span className={styles.stepHighlight}>
                      {step.highlight}
                    </span>
                  </div>
                </div>
                <p className={`text-body ${styles.stepDesc}`}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
