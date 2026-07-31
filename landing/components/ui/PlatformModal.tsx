"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Platform } from "@/data/platforms";
import styles from "./PlatformModal.module.css";

interface PlatformModalProps {
  isOpen: boolean;
  onClose: () => void;
  platforms: Platform[];
}

export default function PlatformModal({ isOpen, onClose, platforms }: PlatformModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>
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
  );
}
