"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import type { ApplicationData } from "@/types/application";

type Field = {
  key: keyof ApplicationData;
  label: string;
  placeholder: string;
  inputType?: "text" | "email" | "tel" | "number";
  multiline?: boolean;
};

const questions: Field[] = [
  {
    key: "fullName",
    label: "Hvad er dit fulde navn?",
    placeholder: "Skriv dit fulde navn",
    inputType: "text",
  },
  {
    key: "age",
    label: "Hvor gammel er du?",
    placeholder: "Skriv din alder",
    inputType: "number",
  },
  {
    key: "email",
    label: "Hvad er din mailadresse?",
    placeholder: "Skriv din mailadresse",
    inputType: "email",
  },
  {
    key: "phone",
    label: "Hvad er dit telefonnummer?",
    placeholder: "Skriv dit telefonnummer",
    inputType: "tel",
  },
  {
    key: "school",
    label: "Hvilken skole går du på?",
    placeholder: "Skriv navnet på din skole",
    inputType: "text",
  },
  {
    key: "availableDays",
    label: "Hvilke dage og tidspunkter kan du arbejde?",
    placeholder: "Fx hverdage efter kl. 16 og weekender",
    multiline: true,
  },
  {
    key: "whyKvickly",
    label: "Hvorfor vil du gerne arbejde i Kvickly?",
    placeholder: "Skriv dit svar her",
    multiline: true,
  },
  {
    key: "strengths",
    label: "Hvad synes du selv, du er god til?",
    placeholder: "Skriv dit svar her",
    multiline: true,
  },
  {
    key: "experience",
    label: "Har du tidligere erfaring med arbejde eller ansvar?",
    placeholder: "Skriv dit svar her",
    multiline: true,
  },
];

const initialData: ApplicationData = {
  fullName: "",
  age: "",
  email: "",
  phone: "",
  school: "",
  availableDays: "",
  whyKvickly: "",
  strengths: "",
  experience: "",
};

export default function ApplicationPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ApplicationData>(initialData);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = useMemo(() => questions[step], [step]);
  const currentValue = formData[currentQuestion.key];
  const isLastStep = step === questions.length - 1;
  const progress = ((step + 1) / questions.length) * 100;

  function updateField(key: keyof ApplicationData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function validateCurrentField() {
    if (!currentValue.trim()) {
      setIsError(true);
      setMessage("Du skal skrive et svar, før du går videre.");
      return false;
    }

    if (currentQuestion.key === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(currentValue.trim())) {
        setIsError(true);
        setMessage("Skriv en gyldig mailadresse.");
        return false;
      }
    }

    setIsError(false);
    setMessage("");
    return true;
  }

  function handleNext() {
    if (!validateCurrentField()) return;
    setStep((prev) => prev + 1);
  }

  function handleBack() {
    setMessage("");
    setIsError(false);
    setStep((prev) => prev - 1);
  }

  async function handleSubmit() {
    if (!validateCurrentField()) return;

    try {
      setIsSubmitting(true);
      setMessage("");
      setIsError(false);

      const response = await fetch("/api/ansoeg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setIsError(true);
        setMessage(result.message || "Noget gik galt.");
        return;
      }

      setFormData(initialData);
      setStep(0);
      setIsError(false);
      setMessage("Tak. Din ansøgning er sendt.");
    } catch {
      setIsError(true);
      setMessage("Der opstod en fejl ved afsendelse.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/" className={styles.backLink}>
            ← Tilbage til forsiden
          </Link>
          <p className={styles.topBarText}>Ungarbejder ansøgning</p>
        </div>
      </section>

      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>Kvickly</p>
            <h1 className={styles.heroTitle}>Ansøg om at blive ungarbejder</h1>
            <p className={styles.heroText}>
              Udfyld formularen trin for trin. Det tager kun få minutter.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formGrid}>
          <aside className={styles.sideCard}>
            <p className={styles.sideLabel}>Ansøgning</p>
            <h2 className={styles.sideTitle}>Vi vil gerne lære dig bedre at kende</h2>
            <p className={styles.sideText}>
              Besvar spørgsmålene så godt du kan. Vi bruger dine svar til at få
              et indtryk af dig, din motivation og hvornår du kan arbejde.
            </p>

            <div className={styles.progressMeta}>
              <span>
                Spørgsmål {step + 1} af {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>

            <ul className={styles.sideList}>
              <li>Udfyld ét spørgsmål ad gangen</li>
              <li>Svar ærligt og kortfattet</li>
              <li>Dobbelttjek mail og telefonnummer</li>
            </ul>
          </aside>

          <div className={styles.formCard}>
            <div className={styles.questionHeader}>
              <p className={styles.questionStep}>Trin {step + 1}</p>
              <h2 className={styles.question}>{currentQuestion.label}</h2>
            </div>

            {currentQuestion.multiline ? (
              <textarea
                className={styles.textarea}
                rows={8}
                placeholder={currentQuestion.placeholder}
                value={currentValue}
                onChange={(e) => updateField(currentQuestion.key, e.target.value)}
              />
            ) : (
              <input
                className={styles.input}
                type={currentQuestion.inputType || "text"}
                placeholder={currentQuestion.placeholder}
                value={currentValue}
                onChange={(e) => updateField(currentQuestion.key, e.target.value)}
              />
            )}

            {message ? (
              <p className={isError ? styles.errorMessage : styles.successMessage}>
                {message}
              </p>
            ) : null}

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={handleBack}
                disabled={step === 0 || isSubmitting}
              >
                Tilbage
              </button>

              {!isLastStep ? (
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={handleNext}
                  disabled={isSubmitting}
                >
                  Næste spørgsmål
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sender..." : "Send ansøgning"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}