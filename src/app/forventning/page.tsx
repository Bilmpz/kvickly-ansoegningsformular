import Link from "next/link";
import styles from "./page.module.css";

export default function ForventningPage() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/" className={styles.backLink}>
            ← Tilbage til forsiden
          </Link>
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Læs mere om</p>
            <h1 className={styles.heroTitle}>Vores forventninger til dig</h1>
            <p className={styles.heroText}>
              Hos Kvickly forventer vi ikke, at du kan det hele fra starten.
              Det vigtigste er, at du har lyst til at lære, tage ansvar og
              være en del af et godt fællesskab i butikken.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introBox}>
          <h2 className={styles.introTitle}>Hvad kigger vi efter?</h2>
          <p className={styles.introText}>
            Vi søger unge medarbejdere, der er klar på at tage del i hverdagen
            i butikken. Du behøver ikke have erfaring, men du skal have den
            rette indstilling og lyst til at udvikle dig.
          </p>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          <article className={styles.card}>
            <h3>9. klasse og klar til job</h3>
            <p>
              Du skal som udgangspunkt være færdig med 9. klasse og være 15 år, samt klar
              til at indgå i et rigtigt arbejdsmiljø med ansvar og faste
              opgaver.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Kunne arbejde i et travlt miljø</h3>
            <p>
              Butikken kan være travl, og der er ofte fart på. Derfor er det
              vigtigt, at du kan bevare overblikket og arbejde godt, også når
              tempoet er højt.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Lyst til at lære</h3>
            <p>
              Du behøver ikke kunne det hele fra dag ét, men du skal have lyst
              til at lære nye opgaver, tage imod vejledning og udvikle dig i
              jobbet.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Møde til tiden</h3>
            <p>
              Vi forventer, at du møder til tiden, er stabil og tager dine
              arbejdsopgaver seriøst. Det er en vigtig del af at være en god
              kollega.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Service og respekt</h3>
            <p>
              Hos os handler det om at møde både kunder og kollegaer med
              respekt, venlighed og god energi i hverdagen.
            </p>
          </article>

          <article className={styles.card}>
            <h3>Ansvar og samarbejde</h3>
            <p>
              Vi lægger vægt på, at du tager ansvar for dine opgaver og bidrager
              positivt til fællesskabet i butikken.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.bottomSection}>
        <div className={styles.bottomBox}>
          <h2 className={styles.bottomTitle}>Det vigtigste er din indstilling</h2>
          <p className={styles.bottomText}>
            Vi ved godt, at mange søger deres første job hos os. Derfor forventer
            vi ikke erfaring, men vi forventer, at du kommer med en positiv
            indstilling, lyst til at lære og mod på at tage ansvar i hverdagen.
          </p>

          <div className={styles.actions}>
            <Link href="/ansoeg" className={styles.primaryButton}>
              Start ansøgning
            </Link>
            <Link href="/laesmere" className={styles.secondaryButton}>
            Læs mere
            </Link>
          </div>
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