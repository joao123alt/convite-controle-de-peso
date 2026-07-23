import styles from "./ProblemSection.module.css";
import Image from "next/image";

const pillars = [
  {
    icon: "🌿",
    title: "Totalmente Natural",
    desc: "Sem adesivos, medicamentos de qualquer natureza ou drogas. O processo é 100% comportamental e seguro.",
  },
  {
    icon: "🧠",
    title: "O Foco É Você",
    desc: "O indivíduo, sua mente e suas emoções estão no centro de todo o processo. Sem dietas genéricas.",
  },
  {
    icon: "🏗️",
    title: "A Base do Sucesso",
    desc: "Informação, reflexão e reinterpretação das experiências são os pilares do Método VidaVem.",
  },
];

export default function ProblemSection() {
  return (
    <section className={`section ${styles.section}`} id="problema">
      <div className="container">
        {/* Section Header */}
        <div className={`section-header animate-fadeInUp`}>
          <span className="label">O verdadeiro problema</span>
          <div className="divider" />
          <h2 className={`title-lg ${styles.heading}`}>
            O Problema Não é a Balança,{" "}
            <span className="gradient-text">é o Comportamento</span>
          </h2>
          <p className={`text-body ${styles.subheading}`}>
            Esqueça as soluções temporárias. O Método VidaVem é focado em
            transformar a raiz do problema — seus hábitos e sua relação com a
            comida.
          </p>
        </div>

        {/* Visual + cards layout */}
        <div className={styles.layout}>
          {/* Illustration */}
          <div className={`${styles.illustration} animate-float`}>
            <Image
              src="/assets/women/mulher_se_pesando.webp"
              alt="Mulher na balança — processo de transformação"
              width={320}
              height={320}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Pillar cards */}
          <div className={styles.pillars}>
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`card ${styles.pillarCard} animate-fadeInUp delay-${(i + 2) * 100}`}
              >
                <span className={styles.pillarIcon}>{pillar.icon}</span>
                <div>
                  <h3 className={`title-sm ${styles.pillarTitle}`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-body ${styles.pillarDesc}`}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* Bottom highlight quote */}
        <div className={`${styles.quote} animate-fadeInUp delay-500`}>
          <span className={styles.quoteBar} />
          <p>
            &ldquo;Reprogramar hábitos é a única solução sustentável para o
            controle do peso a longo prazo.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
