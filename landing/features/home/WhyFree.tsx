"use client";
import { useState } from "react";
import styles from "./WhyFree.module.css";
import Image from "next/image";
import Link from "next/link";
import { Bug, ClipboardList, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import { platforms } from "@/data/platforms";
import PlatformModal from "@/components/ui/PlatformModal";

const asks = [
  { icon: <Bug size={20} />, text: "Reportar eventuais falhas na plataforma" },
  { icon: <ClipboardList size={20} />, text: "Responder questionários de acompanhamento" },
  { icon: <MessageSquare size={20} />, text: "Fazer um depoimento ao atingir a meta (opcional)" },
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
                gratuitas para construir nossos casos de sucesso. Quem garantir 
                sua vaga durante a fase Beta terá <strong>1 ano de acesso 100% gratuito</strong>. 
                O acesso não é vitalício, mas o seu primeiro ano está totalmente 
                garantido sem nenhum custo.
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
                1 ano de acesso gratuito garantido para cadastrados na fase Beta.
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

      <PlatformModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        platforms={platforms}
      />
    </section>
  );
}
