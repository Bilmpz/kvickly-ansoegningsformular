import styles from "./page.module.css";

const sections = [
  { id: "dataansvarlig", title: "Dataansvarlig" },
  { id: "oplysninger", title: "Hvilke oplysninger vi indsamler" },
  { id: "formaal", title: "Formål med behandlingen" },
  { id: "grundlag", title: "Behandlingsgrundlag" },
  { id: "deling", title: "Deling af oplysninger" },
  { id: "opbevaring", title: "Opbevaring" },
  { id: "rettigheder", title: "Dine rettigheder" },
  { id: "klage", title: "Klage" },
  { id: "kontakt", title: "Kontakt" },
];

export default function PrivatlivspolitikPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <span className={styles.kicker}>KVICKLY PROVSTECENTERET</span>
          <h1>Privatlivspolitik</h1>
          <p className={styles.subtitle}>
            Vi passer på dine oplysninger. Her kan du læse, hvordan vi behandler
            persondata, når du bruger vores ansøgningsformular.
          </p>
        </div>
      </section>

      <section className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <p className={styles.sideLabel}>Overblik</p>
            <nav className={styles.sideNav}>
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className={styles.card}>
          <div className={styles.metaRow}>
            <span className={styles.badge}>Juridisk info</span>
            <p className={styles.updated}>Sidst opdateret: 31. marts 2026</p>
          </div>

          <section id="dataansvarlig" className={styles.section}>
            <h2>1. Dataansvarlig</h2>
            <p>
              Vi er dataansvarlige for behandlingen af de personoplysninger, som
              vi modtager om dig i forbindelse med din ansøgning.
            </p>
            <div className={styles.infoBox}>
              <p><strong>Kvickly Prøvestencenteret</strong></p>
              <p>CVR: 26259495</p>
              <p>Adresse: Birkedalsvej 5, 3000 Helsingør</p>
              <p>E-mail: (Kevins mail)</p>
              <p>Telefon: 49 25 66 00</p>
            </div>
          </section>

          <section id="oplysninger" className={styles.section}>
            <h2>2. Hvilke oplysninger indsamler vi?</h2>
            <p>
              Når du udfylder vores ansøgningsformular, kan vi behandle følgende
              oplysninger om dig:
            </p>
            <ul>
              <li>Navn</li>
              <li>Telefonnummer</li>
              <li>E-mailadresse</li>
              <li>Adresse eller by</li>
              <li>Alder eller fødselsdato, hvis du selv oplyser det</li>
              <li>Oplysninger om erfaring, uddannelse og tidligere job</li>
              <li>Tilgængelighed og ønskede arbejdstider</li>
              <li>Motivation og andre oplysninger, du skriver i formularen</li>
              <li>Eventuelle vedhæftede filer, fx CV eller ansøgning</li>
            </ul>
          </section>

          <section id="formaal" className={styles.section}>
            <h2>3. Formålet med behandlingen</h2>
            <p>Vi behandler dine oplysninger for at kunne:</p>
            <ul>
              <li>modtage og vurdere din ansøgning,</li>
              <li>kontakte dig om rekrutteringsforløbet,</li>
              <li>afholde samtaler og vurdere din relevans til stillingen,</li>
              <li>dokumentere rekrutteringsprocessen, hvis det er nødvendigt.</li>
            </ul>
          </section>

          <section id="grundlag" className={styles.section}>
            <h2>4. Behandlingsgrundlag</h2>
            <p>
              Vi behandler som udgangspunkt dine personoplysninger, fordi det er
              nødvendigt for at kunne håndtere din ansøgning og varetage vores
              legitime interesse i rekruttering.
            </p>
            <p>
              Hvis du sender følsomme oplysninger til os, opfordrer vi dig til
              kun at dele det, som er nødvendigt for ansøgningen.
            </p>
          </section>

          <section id="deling" className={styles.section}>
            <h2>5. Hvem deler vi oplysninger med?</h2>
            <p>
              Vi deler kun dine oplysninger, når det er nødvendigt. Det kan fx
              være med:
            </p>
            <ul>
              <li>relevante ledere og medarbejdere involveret i rekrutteringen,</li>
              <li>leverandører, der hoster eller driver ansøgningsløsningen,</li>
              <li>offentlige myndigheder, hvis vi er forpligtet til det.</li>
            </ul>
            <p>Vi sælger ikke dine personoplysninger til tredjeparter.</p>
          </section>

          <section id="opbevaring" className={styles.section}>
            <h2>6. Opbevaring af oplysninger</h2>
            <p>
              Vi opbevarer dine oplysninger så længe, det er nødvendigt for at
              behandle din ansøgning og afslutte rekrutteringsforløbet.
            </p>
            <p>
              Hvis du ikke får stillingen, sletter vi som udgangspunkt dine
              oplysninger inden for <strong>[fx 6 måneder]</strong>, medmindre
              du har givet samtykke til, at vi må gemme dem længere til
              fremtidige jobmuligheder.
            </p>
          </section>

          <section id="rettigheder" className={styles.section}>
            <h2>7. Dine rettigheder</h2>
            <p>Du har efter databeskyttelsesreglerne en række rettigheder:</p>
            <ul>
              <li>ret til indsigt i de oplysninger, vi behandler om dig,</li>
              <li>ret til at få urigtige oplysninger rettet,</li>
              <li>ret til at få oplysninger slettet i visse tilfælde,</li>
              <li>ret til at få behandlingen begrænset,</li>
              <li>ret til at gøre indsigelse mod behandlingen,</li>
              <li>
                ret til at trække et samtykke tilbage, hvis behandlingen bygger
                på samtykke.
              </li>
            </ul>
          </section>

          <section id="klage" className={styles.section}>
            <h2>8. Klage</h2>
            <p>
              Hvis du er utilfreds med den måde, vi behandler dine
              personoplysninger på, kan du kontakte os. Du har også mulighed for
              at klage til Datatilsynet.
            </p>
          </section>

          <section id="kontakt" className={styles.section}>
            <h2>9. Kontakt</h2>
            <p>
              Hvis du har spørgsmål til denne privatlivspolitik eller til vores
              behandling af dine personoplysninger, kan du kontakte os på:
            </p>
            <div className={styles.infoBox}>
              <p><strong>Kvickly Prøvestencenteret</strong></p>
              <p>E-mail: (Kevins mail)</p>
              <p>Telefon: 49 25 66 00</p>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}