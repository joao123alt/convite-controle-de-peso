import Image from "next/image";
import Link from "next/link";
import { AlertCircle, Target, ShieldCheck, PlaySquare, Smartphone } from "lucide-react";
import CrossPromo from "@/features/home/CrossPromo";
import Footer from "@/components/layout/Footer";
import ScrollAnimations from "@/components/layout/ScrollAnimations";
import styles from "./page.module.css";

export default function PararDeFumar() {
  return (
    <main className={styles.main}>
      <ScrollAnimations />

      {/* Header */}
      <section className={styles.hero}>
        {/* Background image */}
        <div className={styles.bgImage}>
          <Image
            src="/assets/parar_de_fumar.webp"
            alt="Pessoa livre do cigarro — VidaVem"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            sizes="100vw"
          />
        </div>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <div className={`${styles.logoWrap} animate-fadeIn`}>
            <Image
              src="/assets/logo-bg-tp.webp"
              alt="VidaVem"
              width={220}
              height={85}
              style={{ objectFit: "contain", margin: "0 auto", width: "auto", height: "auto" }}
            />
          </div>
          
          <div className={`${styles.badgeWrap} animate-fadeInUp delay-100`}>
            <AlertCircle size={16} /> Em breve
          </div>
          
          <h1 className={`${styles.heroTitle} title-xl animate-fadeInUp delay-200`}>
            Programa <span className="gradient-text">VidaVem</span> Parar de Fumar
          </h1>
          
          <p className={`${styles.heroSubtitle} animate-fadeInUp delay-300`}>
            Descubra um caminho <strong>natural</strong> para deixar o cigarro para trás
          </p>
        </div>
      </section>

      {/* Sobre o Programa */}
      <section className={styles.section}>
        <div className={`${styles.sectionHeader} animate-fadeInUp`}>
          <h2 className="title-md" style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', marginBottom: '20px' }}>Sobre o Programa</h2>
          <p className={styles.editorialText}>
            Um programa desenvolvido e validado para ajudar fumantes a <strong>parar de fumar definitivamente</strong>, atacando a raiz do vício, sem o uso de medicamentos.
          </p>
        </div>
        
        <div className="animate-fadeInUp delay-100" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p className={`${styles.editorialParagraph} text-body`}>
            É uma oportunidade de ganhar mais anos de vida e melhorar significativamente a sua qualidade de vida e daqueles que estão à sua volta.
          </p>
          <p className={`${styles.editorialParagraph} text-body`}>
            O programa já foi testado e aprovado. Em breve estará disponível.
          </p>
        </div>
      </section>

      {/* Sobre o Método */}
      <section className={styles.section} style={{ paddingTop: '40px' }}>
        <h2 className="title-lg animate-fadeInUp" style={{ textAlign: "center", marginBottom: "60px" }}>A Abordagem</h2>
        
        <div className={styles.grid}>
          <div className={`${styles.gridCard} animate-fadeInUp delay-100`}>
            <Target size={32} className={styles.cardIcon} />
            <h3 className={`${styles.cardTitle} title-sm`}>Cognitivo-Comportamental</h3>
            <p className={styles.cardDesc}>
              Baseado em informação, reflexão e reinterpretação das experiências que o levaram a ser um fumante. Abordamos a raiz do vício, e não apenas o sintoma.
            </p>
          </div>
          
          <div className={`${styles.gridCard} animate-fadeInUp delay-200`}>
            <ShieldCheck size={32} className={styles.cardIcon} />
            <h3 className={`${styles.cardTitle} title-sm`}>Sem drogas ou remédios</h3>
            <p className={styles.cardDesc}>
              Não usamos adesivos ou medicamentos. Você e sua mente ficam no centro do processo de cura.
            </p>
          </div>
          
          <div className={`${styles.gridCard} animate-fadeInUp delay-300`}>
            <PlaySquare size={32} className={styles.cardIcon} />
            <h3 className={`${styles.cardTitle} title-sm`}>12 Encontros Curtos</h3>
            <p className={styles.cardDesc}>
              Vídeos rápidos (≈10 min) com intervalo de três dias entre eles, garantindo a absorção e reflexão adequadas.
            </p>
          </div>
        </div>
      </section>

      {/* Acesso */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className="title-lg animate-fadeInUp" style={{ marginBottom: "20px" }}>Seja avisado quando lançar</h2>
          <p className="text-body animate-fadeInUp delay-100">O programa estará disponível em breve. Entre em contato para ser notificado:</p>
          
          <div className={`${styles.ctaGrid} animate-fadeInUp delay-200`}>
            <a href="https://wa.me/5521989663040" target="_blank" rel="noopener noreferrer" className={`btn-platform ${styles.platformBtn}`}>
              <Smartphone size={20} />
              Avisar pelo WhatsApp
            </a>
          </div>
          
          <p className={`${styles.disclaimer} animate-fadeInUp delay-300`}>
            Desistir não é uma alternativa.
          </p>
        </div>
      </section>

      {/* Cross Promo */}
      <CrossPromo type="weight" />

      {/* Footer */}
      <Footer />
    </main>
  );
}
