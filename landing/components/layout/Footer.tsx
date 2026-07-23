import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Image
          src="/assets/logo-bg-tp.webp"
          alt="VidaVem"
          width={110}
          height={42}
          style={{ objectFit: "contain", opacity: 0.7, width: "auto", height: "auto" }}
        />
        <nav className={styles.links}>
          <Link href="#hero" className={styles.link}>Início</Link>
          <Link href="#metodo" className={styles.link}>O Método</Link>
          <Link href="#plataformas" className={styles.link}>Acesse</Link>
          <a href="https://wa.me/5521989663040" target="_blank" rel="noopener noreferrer" className={styles.link}>
            WhatsApp
          </a>
        </nav>
        <p className={styles.copy}>
          © {new Date().getFullYear()} VidaVem · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
