import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
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
            <h1 className={styles.heroTitle}>Kvickly Prøvestencenteret</h1>
            <p className={styles.heroText}>
              Hos Kvickly leder vi efter unge medarbejdere, der har lyst til at
              tage ansvar, hjælpe kunderne og blive en del af et stærkt hold i
              butikken.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <div className={styles.introLabel}>Job og muligheder</div>
          <h2 className={styles.introTitle}>Et arbejde i Kvickly</h2>
          <p className={styles.introText}>
            Måske er det dit første job, eller måske har du allerede erfaring.
            Uanset hvad lægger vi i Kvickly stor vægt på den rette indstilling.
            Hos os handler det om at møde både kunder og kollegaer med respekt,
            engagement og god service.
          </p>
        </div>
      </section>

      <section className={styles.departmentsSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Afdelinger</p>
          <h2 className={styles.sectionTitle}>
            Hvad laver man i de forskellige afdelinger?
          </h2>
        </div>

        <div className={styles.departmentList}>
          <article className={styles.departmentCard}>
            <div>
              <p className={styles.departmentTag}>Butikken</p>
              <h3>Nonfood</h3>
              <p>
                I nonfood arbejder man med varer uden for fødevarer, fx
                husholdning, sæsonvarer og praktiske produkter til hjemmet.
              </p>
            </div>
            <ul>
              <li>Fylde varer op</li>
              <li>Trimme og holde hylderne pæne</li>
              <li>Hjælpe kunder med at finde varer</li>
            </ul>
          </article>

          <article className={styles.departmentCard}>
            <div>
              <p className={styles.departmentTag}>Dagligvarer</p>
              <h3>Tørvare / Food</h3>
              <p>
                Her arbejder man med butikkens klassiske dagligvarer og hjælper
                med at holde afdelingen velopfyldt og overskuelig.
              </p>
            </div>
            <ul>
              <li>Vareopfyldning</li>
              <li>Frontning og orden på hylderne</li>
              <li>Hjælpe kunder i afdelingen</li>
            </ul>
          </article>

          <article className={styles.departmentCard}>
            <div>
              <p className={styles.departmentTag}>Friske varer</p>
              <h3>Frugt &amp; grønt</h3>
              <p>
                I frugt og grønt handler det om friskhed, kvalitet og at skabe
                en flot afdeling, der ser indbydende ud hele dagen.
              </p>
            </div>
            <ul>
              <li>Fylde varer op løbende</li>
              <li>Tjekke kvalitet og friskhed</li>
              <li>Holde afdelingen pæn og overskuelig</li>
            </ul>
          </article>

          <article className={styles.departmentCard}>
            <div>
              <p className={styles.departmentTag}>Service</p>
              <h3>Kasselinjen</h3>
              <p>
                Ved kasselinjen er god service og overblik vigtigt, så kunderne
                får en venlig og hurtig oplevelse.
              </p>
            </div>
            <ul>
              <li>Betjene kunderne ved kassen</li>
              <li>Holde orden i kasseområdet</li>
              <li>Yde god og imødekommende service</li>
            </ul>
          </article>

          <article className={styles.departmentCard}>
            <div>
              <p className={styles.departmentTag}>Bageren</p>
              <h3>Bagerafdelingen</h3>
              <p>
                I bageren hjælper man med at fylde op, holde afdelingen flot og
                hjælpe kunder med spørgsmål og varer.
              </p>
            </div>
            <ul>
              <li>Fylde brød og kager op</li>
              <li>Holde montre og hylder indbydende</li>
              <li>Hjælpe kunder i afdelingen</li>
            </ul>
          </article>
        </div>
      </section>

        <section className={styles.leadersSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Mød ledelsen</p>
          <h2 className={styles.sectionTitle}>Varehusets ledere og chefer</h2>
          <p className={styles.sectionText}>
            Her kan du se ledelsen i Kvickly Prøvestenscentret og få et indblik
            i, hvem der har ansvar for de forskellige områder i varehuset.
          </p>
        </div>

        <div className={styles.leadersGrid}>
          <article className={styles.personCard}>
            <img
              src="/unknown.png"
              alt="Kevin Handberg"
              className={styles.personImage}
            />
            <div className={styles.personContent}>
              <h3>Kevin Handberg</h3>
              <p className={styles.personRole}>Varehuschef</p>
              <p>
                Har det overordnede ansvar for varehuset og sikrer, at butikken
                fungerer godt i hverdagen for både kunder og medarbejdere.
              </p>
            </div>
          </article>

          <article className={styles.personCard}>
            <img
              src="/unknown.png"
              alt="Carina Evers"
              className={styles.personImage}
            />
            <div className={styles.personContent}>
              <h3>Carina Evers</h3>
              <p className={styles.personRole}>Souschef</p>
              <p>
                Er med til at sikre den daglige drift og støtter op om både
                ledelse, medarbejdere og butikkens daglige opgaver.
              </p>
            </div>
          </article>

          <article className={styles.personCard}>
            <img
              src="/unknown.png"
              alt="Betina Falk"
              className={styles.personImage}
            />
            <div className={styles.personContent}>
              <h3>Betina Falk</h3>
              <p className={styles.personRole}>Leder af Nonfood</p>
              <p>
                Har ansvar for nonfood-afdelingen og arbejder med
                vareopfyldning, overblik og en flot præsentation af varerne.
              </p>
            </div>
          </article>

          <article className={styles.personCard}>
            <img
              src="/unknown.png"
              alt="Kim Demskov"
              className={styles.personImage}
            />
            <div className={styles.personContent}>
              <h3>Kim Demskov</h3>
              <p className={styles.personRole}>Leder af Tørvare / Food</p>
              <p>
                Har ansvar for food-området og sikrer, at afdelingen altid
                fremstår indbydende, velopfyldt og klar til kunderne.
              </p>
            </div>
          </article>

          <article className={styles.personCard}>
            <img
              src="/unknown.png"
              alt="Frederik Frisner"
              className={styles.personImage}
            />
            <div className={styles.personContent}>
              <h3>Frederik Frisner</h3>
              <p className={styles.personRole}>Leder af Frugt &amp; grønt</p>
              <p>
                Har fokus på friske varer, kvalitet i afdelingen og en
                præsentation, der gør området overskueligt og indbydende.
              </p>
            </div>
          </article>

          <article className={styles.personCard}>
            <img
              src="/unknown.png"
              alt="Maja Dadaucic"
              className={styles.personImage}
            />
            <div className={styles.personContent}>
              <h3>Maja Dadaucic</h3>
              <p className={styles.personRole}>Leder af Kasselinjen</p>
              <p>
                Har ansvar for kasselinjen og arbejder med service, struktur og
                gode kundeoplevelser ved butikkens kasseområde.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Det forventer vi</p>
          <h2 className={styles.sectionTitle}>Hvad kigger vi efter?</h2>
        </div>

        <div className={styles.valuesGrid}>
          <article className={styles.valueCard}>
            <h3>Serviceminded</h3>
            <p>
              Du møder kunderne med et smil og har lyst til at hjælpe i
              hverdagen.
            </p>
          </article>

          <article className={styles.valueCard}>
            <h3>Ansvarlig</h3>
            <p>
              Du tager dine opgaver seriøst og bidrager positivt til butikken.
            </p>
          </article>

          <article className={styles.valueCard}>
            <h3>God kollega</h3>
            <p>
              Du arbejder godt sammen med andre og bidrager til et stærkt
              fællesskab.
            </p>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
<<<<<<<<< Temporary merge branch 1
        <p>KVICKLY PRØVESTENSCENTRET</p>
=========
        <p>Kvickly Prøvestencenteret</p>
>>>>>>>>> Temporary merge branch 2
        <p>Birkedalsvej 5, 3000 Helsingør</p>
        <p>Tlf: 49 25 66 00</p>
        <p>Åbningstider: Man–Søn 7:00–20:00</p>
      </footer>
    </main>
  );
}