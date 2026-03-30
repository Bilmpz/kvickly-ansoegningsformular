# Kvickly ansøgningsformular

En webbaseret ansøgningsløsning til **Kvickly Prøvestenscentret**, bygget i **Next.js** og **TypeScript**.  
Projektet gør det muligt for unge ansøgere at læse om jobbet, se forventningerne og sende en ansøgning gennem en trinvis formular.

## Funktioner

- Forside med introduktion til jobbet hos Kvickly
- Side med ekstra information om butikken og ledelsen
- Side med forventninger til ansøgere
- Trin-for-trin ansøgningsformular
- Server-side validering af ansøgning
- Afsendelse af ansøgninger via e-mail med **Nodemailer**
- Privatlivspolitik-side

## Teknologier

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Nodemailer**
- CSS Modules + global CSS

## Ruter

Projektet indeholder blandt andet disse ruter:

- `/` – Forside
- `/laesmere` – Mere information om jobbet og varehuset
- `/forventning` – Forventninger til ansøgere
- `/ansoeg` – Ansøgningsformular
- `/politik` – Privatlivspolitik
- `/api/ansoeg` – API-endpoint til afsendelse af ansøgninger


## Hvordan ansøgningen fungerer

1. Brugeren udfylder formularen ét spørgsmål ad gangen på `/ansoeg`
2. Klienten validerer blandt andet, at felter ikke er tomme, og at e-mail ser gyldig ud
3. Data sendes som `POST` til `/api/ansoeg`
4. API'et validerer felterne igen
5. Ansøgningen sendes videre som e-mail via SMTP/Nodemailer

## Projektstruktur

```text
src/
  app/
    ansoeg/
    api/ansoeg/
    forventning/
    laesmere/
    politik/
  lib/
    mailer.ts
  types/
    application.ts
```

## Bemærkninger

- Projektet bruger miljøvariabler til SMTP og modtageradresse, så mailopsætning skal være korrekt før formularen virker.
- Privatlivspolitikken bør gennemgås og opdateres med endelige kontaktoplysninger, hvis projektet skal bruges i produktion.
- Projektet er målrettet en konkret butik, **Kvickly Prøvestenscentret**.

## Licens

Der er ikke angivet en licens i projektet endnu. Tilføj gerne en `LICENSE`-fil, hvis projektet skal deles offentligt med klare brugsrettigheder.
