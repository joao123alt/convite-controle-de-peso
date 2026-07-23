import Link from "next/link";
import { CigaretteOff, Scale } from "lucide-react";
import styles from "./CrossPromo.module.css";

export default function CrossPromo({ type }: { type: "smoking" | "weight" }) {
  if (type === "smoking") {
    return (
      <section className={styles.section}>
        <div className="container">
          <Link href="/parar-de-fumar" className={styles.card}>
            <div className={styles.iconWrap}>
              <CigaretteOff size={32} />
            </div>
            <div className={styles.content}>
              <h3 className="title-sm">Você ou alguém próximo quer parar de fumar?</h3>
              <p className="text-body">
                Conheça o Programa VidaVem para tabagismo — testado, aprovado e em breve disponível. Sem uso de remédios e sem precisar parar de imediato.
                <span className={styles.arrow}>Saber mais &rarr;</span>
              </p>
            </div>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <Link href="/" className={styles.card}>
        <div className={styles.iconWrap}>
          <Scale size={32} />
        </div>
        <div className={styles.content}>
          <h3 className="title-sm">Lutando contra o efeito sanfona?</h3>
          <p className="text-body">
            Conheça nosso método cognitivo-comportamental em fase Beta e assuma o controle do seu peso definitivamente.
            <span className={styles.arrow}>Saber mais &rarr;</span>
          </p>
        </div>
      </Link>
    </section>
  );
}
