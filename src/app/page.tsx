import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Kvickly Prøvestencenteret</p>
            <h1 className={styles.heroTitle}>BLIV MEDARBJEDER HOS OS</h1>
            <p className={styles.heroText}>
              Hos Kvickly Prøvestenscentret leder vi efter unge medarbejdere, der har lyst til at få et fritidsjob, med ansvar
            </p>
            <div className={styles.heroActions}>
              <Link href="/ansoeg" className={styles.primaryButton}>
                Søg jobbet
              </Link>
              <a href="/laesmere" className={styles.secondaryButton}>
                Læs mere
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="info" className={styles.introSection}>
        <div className={styles.introBox}>
          <h2 className={styles.introTitle}>Find dit næste job hos Kvickly</h2>
          <p className={styles.introText}>
            Vi søger unge, der har lyst til at lære, tage ansvar og være en del
            af hverdagen i butikken. Uanset om du har erfaring eller ej. Du kommer til at arbejde med service,
            samarbejde og opgaver, der gør en forskel for både kunder og
            kollegaer.
          </p>

          <div className={styles.introButtons}>
            <Link href="/ansoeg" className={styles.primaryButton}>
              Start ansøgning
            </Link>
            <a href="/forventning" className={styles.secondaryButtonLight}>
              Se forventninger
            </a>
          </div>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          <article className={styles.card}>
            <h3>Om jobbet</h3>
            <p>
              Som medarbejder i Kvickly bliver du en del af butikkens hverdag og
              hjælper med alt fra kundeservice til opfyldning og orden.
            </p>
          </article>

          <article className={styles.card} id="forventninger">
            <h3>Vi forventer</h3>
            <ul>
              <li>At du møder til tiden</li>
              <li>At du er venlig og serviceminded</li>
              <li>At du tager ansvar for dine opgaver</li>
              <li>At du har lyst til at lære nyt</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h3>Hvordan ser en typisk vagt ud?</h3>
            <ul>
              <li>Vagterne afhænger af afdeling og om det er hverdag eller weekend</li>
              <li>Mange unge starter med én vagt om ugen</li>
              <li>Hverdagsvagter ligger typisk kl. 16–20</li>
              <li>I weekender kan man ofte få flere timer, og vagterne varierer mere</li>
            </ul>
          </article>
        </div>
      </section>
    <footer className={styles.footer}>
      <p>Kvickly Prøvestenscentret</p>
      <p>Birkedalsvej 5, 3000 Helsingør</p>
      <p>Tlf: 49 25 66 00</p>
      <p>Åbningstider: Man–Søn 7:00–20:00</p>
    </footer>
    </main>
  );
}