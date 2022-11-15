# Lag en nettside på Girl Tech Fest Workshop

Workshoppen introduserer deg lett til html, css og js (vi har brukt React som et rammeverk). Formålet er å introdusere dere til hvordan man legger til html elementer, kobler på stylingklasser og funksjoner uten at man må redigere altfor mye. Vi ønsker at man skal ha det gøy, og bare se hva man kan få til gjennom å kode.

Denne workshoppen er ment å redigeres på StackBlitz.
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-ch62ue)

For å jobbe med din egen versjon av prosjektet, sørg for å "forke" prosjektet via Stackblitz.

## Oppgaver

Hver "seksjon" er en oppgave og skilles ut med sin egen bakgrunnsfarge.

Totalt er det 4 oppgaver fordelt i sine egne filer: `1-Intro.tsx`, `2-OmGruppa.tsx`, `3-PersonligAvatar.tsx` og `4-Konfetti.tsx`. Oppgaven står forklart i hver sin fil, og de er uavhengige av hverandre. Du kan ta en titt og se hva som interesserer deg mest, og starte hvor enn du vil.

1. `1-Intro.tsx` - Introduserer deg til bruk av html-tagen for overskrifter `<h2>` og css styling av bakgrunnsfarge
2. `2-OmGruppa.tsx` - Hvordan du legger til tekst i lister (bruker html-taggene `<ul>, <li>`) og hvordan man kobler på css styling klasser
3. `3-PersonligAvatar.tsx` -
4. `4-Konfetti.tsx` - Hvordan man legger til en knapp `<button>`, endre bakgrunnsfarge på hoved (vha en pseudoklasse `:hover`) og koble på en funksjon (`<button onClick={() => funksjon()} > *knappTekst* </button>`) på en knapp som toggler konfetti.

# Teknologistack brukt: Elementer, funksjonalitet og styling

Når man lager nettsider er det vanlig å bruke en kombinasjon av tre "språk":

## HTML (HyperText Markup Language)

HTMl brukes for å definere og vise ulike HTML elementer som f.eks. en knapp vil skrives som `<button>..</button>`. Ved å bruke HTML tags når vi lager komponenter (en kombinasjon av elementer, styling og logikk), sier vi også noe om hvilke "props" (aka. "properties" eller norsk: "egenskaper") som vi ønsker at komponenten skal ha. En knapp vil f.eks. ha funksjonalitet slik at man kan bestemme hva som skal skje når man trykker på knappen (Altså, en `onClick` funksjon. F.eks. `<button onClick={funksjon}>`).

Les mer om html og semantiske elementer [her](https://www.w3schools.com/html/html5_semantic_elements.asp)

## CSS (Cascading Style sheets)

CSS er språket man bruker for å formattere HTML elementer på nettsider vha blant annet farger, font, plassering av elementene, og er også det man bruker for å tilpasse nettsiden sin ulike skjermstørrelser. Da sier man at man lager/kodet et "responsivt nettside".

## JS (Javascript)

Javascript er et kodespråk som brukes for å definerer funksjonalitet og logikk, f.eks. hva som skal skje når man trykker på en knapp. Ved hjelp av Javascript kan man lage funksjoner og koble disse på komponenter for å gjøre de interagerbare.

## React

Det finnes rammeverk som gir deg mye bedre rammer og funksjonalitet til kodespråket, som gjør det lettere og gjenbruke komponenter, men også kjappere å lage nettsider. I utviklingsprosjekter, er det veldig vanlig å bruke et av disse, og i dette prosjektet har vi brukt rammeverket "React" som er er laget og vedlikeholdt av Meta (det som brukte å være Facebook).

# Andre ressurser

Har du lyst til å bruke andre farger, så kan du generere fargepaletter via [coolor](https://coolors.co/).
Kopier HEX-fargekoden og lim dem inn der du ønsker å bruke den. F.eks. som bakgrunnsfarge `background-color: #E75A7C`

(Denne workshoppen er laget i samarbeid med Dfind Consulting og Randstand with Heart)
