import styles from "./PlatformCTA.module.css";
import Image from "next/image";
import Link from "next/link";

const platforms = [
  {
    id: "android",
    icon: "📱",
    label: "Celular Android",
    sub: "Google Play Store",
    href: "#",
  },
  {
    id: "iphone",
    icon: "📱",
    label: "Celular iPhone",
    sub: "Apple App Store",
    href: "#",
  },
  {
    id: "web",
    icon: "💻",
    label: "Computador / Web",
    sub: "app.vidavem.com",
    href: "https://app.vidavem.com",
  },
];

export default function PlatformCTA() {
  return (
    <section className={`section ${styles.section}`} id="plataformas">
      {/* Top accent line */}
      <div className={styles.topAccent} />

      <div className="container">
        {/* Illustration */}
        <div className={`${styles.illusWrap} animate-float`}>
          <Image
            src="/assets/women/mulher_subindo-removebg-preview.webp"
            alt="Mulher celebrando conquista"
            width={260}
            height={260}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Header */}
        <div className={`section-header animate-fadeInUp`}>
          <span className="label">Comece agora</span>
          <div className="divider" />
          <h2 className="title-lg">
            Escolha como deseja{" "}
            <span className="gradient-text">acompanhar o Método</span>
          </h2>
          <p className={`text-body ${styles.subtitle}`}>
            Selecione sua plataforma abaixo, cadastre-se e receba acesso
            gratuito imediato.
          </p>
        </div>

        {/* Platform buttons */}
        <div className={`${styles.platforms} animate-fadeInUp delay-200`}>
          {platforms.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              id={`cta-${p.id}`}
              className={`btn-platform ${styles.platformBtn}`}
            >
              <span className={styles.platformIcon}>{p.icon}</span>
              <span className={styles.platformLabels}>
                <span className={styles.platformLabel}>{p.label}</span>
                <span className={styles.platformSub}>{p.sub}</span>
              </span>
              <span className={styles.platformArrow}>→</span>
            </Link>
          ))}
        </div>

        {/* Main CTA repeat */}
        <div className={`${styles.mainCta} animate-fadeInUp delay-300`}>
          <Link href="#plataformas" className="btn-primary" id="cta-main-bottom">
            🚀 GARANTIR MINHA VAGA GRATUITA
          </Link>
        </div>

        {/* Closing statement */}
        <div className={`${styles.closing} animate-fadeInUp delay-400`}>
          <p className={styles.closingMain}>
            <strong>Desistir não é uma alternativa.</strong>
          </p>
          <p className={styles.closingSub}>
            Precisa de ajuda com o acesso? Fale conosco pelo{" "}
            <a
              href="https://wa.me/5521989663040"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
              id="contact-whatsapp"
            >
              WhatsApp (21) 98966-3040
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
