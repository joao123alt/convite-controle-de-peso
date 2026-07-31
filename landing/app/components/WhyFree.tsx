"use client";
import { useState } from "react";
import styles from "./WhyFree.module.css";
import Image from "next/image";
import Link from "next/link";
import { Bug, ClipboardList, MessageSquare, Calendar, ArrowRight, X } from "lucide-react";
import { FaAndroid, FaApple } from "react-icons/fa";

const asks = [
  { icon: <Bug size={20} />, text: "Reportar eventuais falhas na plataforma" },
  { icon: <ClipboardList size={20} />, text: "Responder questionários de acompanhamento" },
  { icon: <MessageSquare size={20} />, text: "Fazer um depoimento ao final do Método" },
];

const platforms = [
  { id: "android", icon: <FaAndroid size={24} />, label: "Android", sub: "Google Play", href: "https://play.google.com/apps/testing/com.vidavem.controlepeso" },
  { id: "iphone",  icon: <FaApple size={24} />, label: "iPhone",  sub: "App Store",   href: "https://apps.apple.com/br/app/controle-de-peso-vidavem/id6757395665?l=en-GB" },
];

export default function WhyFree() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className={`section ${styles.section}`} id="plataformas">
      <div className={styles.topAccent} />

      <div className="container">
        <div className={styles.grid}>

          {/* LEFT — Why Free */}
          <div className={styles.leftCol}>
            <div className="animate-fadeInUp">
              <span className="label">Transparência total</span>
              <div className="divider" style={{ margin: "10px 0 14px" }} />
              <h2 className={`title-md ${styles.heading}`}>
                Por que o acesso é{" "}
                <span className="gradient-text">gratuito?</span>
              </h2>
              <p className={`text-body ${styles.intro}`}>
                O Método VidaVem está em fase final de testes. Liberamos vagas 
                gratuitas para construir nossos casos de sucesso. Mas atenção: 
                <strong> o acesso gratuito não é vitalício</strong>. Quando a fase Beta terminar, 
                a assinatura gratuita será encerrada e a plataforma passará a ser paga.
              </p>
              <p className={`text-body ${styles.intro}`} style={{ marginTop: "10px", fontSize: "14px", color: "var(--text-muted)" }}>
                Em contrapartida por usar gratuitamente agora, pedimos apenas:
              </p>
            </div>

            <div className={styles.asks}>
              {asks.map((ask, i) => (
                <div
                  key={ask.text}
                  className={`${styles.askItem} animate-fadeInUp delay-${(i + 2) * 100}`}
                >
                  <span className={styles.askIcon}>{ask.icon}</span>
                  <p className={styles.askText}>{ask.text}</p>
                </div>
              ))}
            </div>

            {/* 1-year badge */}
            <div className={`${styles.yearBadge} animate-fadeInUp delay-500`}>
              <span className={styles.yearIcon}>
                <Calendar size={28} />
              </span>
              <div>
                <p className={styles.yearTitle}>Acompanhamento de 1 Ano</p>
                <p className={styles.yearDesc}>
                  E-mails para celebrar seu sucesso ou ajudar em uma recaída.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Platform CTA */}
          <div className={styles.rightCol}>
            {/* Illustration */}
            <div className={`${styles.illusWrap} animate-float`}>
              <Image
                src="/assets/women/mulher_subindo-removebg-preview.webp"
                alt="Mulher celebrando conquista"
                width={180}
                height={180}
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Main CTA */}
            <div className={`${styles.mainCta} animate-fadeInUp delay-400`}>
              <button onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="btn-primary" id="cta-main" style={{ border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                Garantir Minha Vaga Gratuita <ArrowRight size={18} />
              </button>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "8px", textAlign: "center" }}>
                Grátis por tempo indeterminado apenas durante a fase Beta. Acesso não vitalício.
              </p>
            </div>

            <p className={`${styles.closing} animate-fadeInUp delay-500`}>
              <strong>Desistir não é uma alternativa.</strong>{" "}
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
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Escolha sua plataforma</h3>
              <p className={styles.modalSub}>Cadastre-se e receba acesso gratuito imediato.</p>
            </div>
            <div className={styles.platforms}>
              {platforms.map((p) => (
                <Link
                  key={p.id}
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  id={`cta-modal-${p.id}`}
                  className={`btn-platform ${styles.platformBtn}`}
                >
                  <span className={styles.pIcon}>{p.icon}</span>
                  <span className={styles.pLabels}>
                    <span className={styles.pLabel}>{p.label}</span>
                    <span className={styles.pSub}>{p.sub}</span>
                  </span>
                  <span className={styles.pArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
