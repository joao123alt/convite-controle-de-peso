import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background image */}
      <div className={styles.bgImage}>
        <Image
          src="/assets/welcome-bg.webp"
          alt="Mulher caminhando ao amanhecer"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        {/* Logo */}
        <div className={`${styles.logoWrap} animate-fadeIn`}>
          <Image
            src="/assets/logo-bg-tp.webp"
            alt="VidaVem"
            width={320}
            height={120}
            style={{ objectFit: "contain", width: "auto", height: "auto" }}
          />
        </div>

        {/* Badge */}
        <div className={`${styles.badgeWrap} animate-fadeInUp delay-100`}>
          <span className="badge">
            <AlertCircle size={14} /> Vagas Limitadas
          </span>
        </div>

        {/* Heading */}
        <h1 className={`title-xl ${styles.heading} animate-fadeInUp delay-200`}>
          Assuma o Controle do Seu Peso{" "}
          <span className="gradient-text">Definitivamente</span>
        </h1>

        {/* Subheading */}
        <p className={`${styles.subheading} animate-fadeInUp delay-300`}>
          Sem fórmulas mágicas. O <strong>Método VidaVem</strong> reprograma
          sua mente através de uma abordagem cognitivo-comportamental.{" "}
          <strong>Aproveite o acesso 100% gratuito por tempo limitado na fase Beta.</strong>
        </p>

        {/* CTA */}
        <div className={`${styles.ctaRow} animate-fadeInUp delay-400`}>
          <Link href="#plataformas" className={`btn-primary ${styles.ctaBtn}`} id="cta-hero">
            Quero Minha Vaga Gratuita <ArrowRight size={18} />
          </Link>
          <p className={styles.ctaNote}>
            Sem cartão de crédito · Grátis apenas durante a fase Beta
          </p>
        </div>

        {/* Stats strip */}
        <div className={`${styles.stats} animate-fadeInUp delay-500`}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1 min</span>
            <span className={styles.statLabel}>Dedicação diária</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Sem</span>
            <span className={styles.statLabel}>Dietas restritivas</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Beta</span>
            <span className={styles.statLabel}>Acesso temporário</span>
          </div>
        </div>
      </div>
    </section>
  );
}
