// Innholdet i innføringen på norsk. Hvert trinn er én skjerm.
import { Disclosure, IconButton, InPage, Practice, PracticeDialog, PracticeForm, SilentButton, StatusButton, ToggleButton } from '../components/practice';
import library from '../assets/library.svg';
import wave from '../assets/wave.svg';
import type { Content } from './types';

const content: Content = {
  iphone: {
    name: "VoiceOver på iPhone",
    source: { url: "https://support.apple.com/guide/iphone/learn-voiceover-gestures-iph3e2e2281/ios", title: "Apple, VoiceOver-bevegelser på iPhone" },
    parts: [
    {
      id: "get-started",
      title: "Kom i gang",
      intro: "Fem korte trinn, omtrent 15 minutter. Les trinn 1 før du slår på VoiceOver.",
      steps: [
          {
            title: "Lær å slå av før du slår på",
            body: (
              <>
                <p>Les dette trinnet før du slår på VoiceOver.</p>
                <p>Når VoiceOver er på, virker telefonen annerledes. Ett trykk velger noe og leser det opp. Du må trykke to ganger for å åpne eller aktivere det du har valgt. Derfor setter du opp en snarvei først.</p>
                <ol>
                  <li>Åpne Innstillinger, så Tilgjengelighet, så Tilgjengelighetssnarvei.</li>
                  <li>Velg VoiceOver.</li>
                  <li>Kom tilbake til denne siden.</li>
                </ol>
                <p>Nå slår du VoiceOver av og på ved å trykke tre ganger raskt på sideknappen. Har telefonen din hjemknapp, trykker du tre ganger på den.</p>
                <div className="box">
                  <p><strong>Står du fast?</strong> Trykk tre ganger på sideknappen. Eller si til Siri: «Slå av VoiceOver».</p>
                </div>
                <p>Når snarveien er klar, trykker du på Neste nederst på skjermen.</p>
              </>
            ),
          },
          {
            title: "Slå på VoiceOver",
            body: (
              <>
                <p>Trykk tre ganger på sideknappen. Du hører en stemme, og det kommer en svart ramme rundt det VoiceOver har valgt.</p>
                <p>Fra nå av leser VoiceOver denne siden for deg. Du går videre ved å sveipe til høyre med én finger, hvor som helst på skjermen. Prøv nå.</p>
                <p>Bra. Hvert sveip til høyre går til neste ting på siden. Sveip til venstre for å gå tilbake.</p>
                <p>Nederst på skjermen er det en meny med Hjem, Tilbake, Meny og Neste, som fanelinjen i en app. Sveip til høyre til du hører «Neste». Trykk så to ganger hvor som helst på skjermen.</p>
              </>
            ),
          },
          {
            title: "Lytte og stoppe",
            body: (
              <>
                <p>Du kommer til å høre mye mer enn du trenger. Den viktigste ferdigheten er å stoppe talen.</p>
                <p>Trykk én gang med to fingre for å stoppe. Trykk med to fingre igjen for å fortsette.</p>
                <p>Øv på dette avsnittet. Det er langt med vilje. Skjermleserbrukere skummer ved å høre de første ordene og så hoppe videre hvis det ikke er det de leter etter. Derfor er det viktig at det viktigste står først i en tekst, i en lenke og i en knapp. Når du hører at et avsnitt ikke er det du trenger, sveiper du bare videre. Du trenger ikke vente til det er ferdig lest. Prøv å stoppe talen nå, med to fingre.</p>
                <p>Vil du lese hele siden fra toppen, sveiper du opp med to fingre. For å lese fra der du er og videre, sveiper du ned med to fingre. Stopp med to fingre når du vil.</p>
                <p>VoiceOver ruller siden når du sveiper. Vil du rulle selv, sveiper du opp eller ned med tre fingre.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Utforske ved berøring og aktivere",
            body: (
              <>
                <p>Du kan også dra én finger rundt på skjermen. VoiceOver leser det du rører ved. Slik finner du ting raskt hvis du vet omtrent hvor de er.</p>
                <p>Når VoiceOver har valgt noe, trykker du to ganger raskt hvor som helst på skjermen for å aktivere det. Du trenger ikke treffe selve knappen.</p>
                <p>Prøv på knappen under. Sveip til den, eller finn den med fingeren. Trykk så to ganger.</p>
                <StatusButton message="Bra! Du aktiverte knappen. VoiceOver leste denne meldingen uten at du flyttet deg.">Prøv meg</StatusButton>
                <p>Finn nå Neste med fingeren. Den er nederst til høyre på skjermen. Rør den, lytt, og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Skjermgardin",
            body: (
              <>
                <p>Skjermgardinen gjør skjermen svart mens VoiceOver fortsatt virker. Da må du stole på det du hører, slik mange skjermleserbrukere gjør.</p>
                <p>Den skrus av og på med samme bevegelse: trykk tre ganger med tre fingre. Har du slått på Zoom, trykker du fire ganger med tre fingre.</p>
                <p>Prøv: slå på skjermgardinen. Sveip gjennom denne siden, finn så Neste nederst til høyre med fingeren, og trykk to ganger. Du kan la skjermgardinen stå på.</p>
                <div className="box">
                  <p><strong>Får du ikke skjermen tilbake?</strong> Trykk tre ganger med tre fingre igjen. Hjelper ikke det, slår du av VoiceOver med tre trykk på sideknappen.</p>
                </div>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>Du kan nå slå VoiceOver av og på, gå frem og tilbake, stoppe talen, finne ting med fingeren, aktivere dem og bruke skjermgardinen.</p>
          <p>Står skjermgardinen fortsatt på, trykker du tre ganger med tre fingre for å slå den av.</p>
          <p>Neste del handler om overskrifter, landemerker, lenker og knapper, skjemaer og statusmeldinger.</p>
          <p>Vil du øve mer, har Apple sin egen øvelse. Åpne Innstillinger, så Tilgjengelighet, så VoiceOver, og velg VoiceOver-øvelse.</p>
          <p>Husk å slå av VoiceOver når du er ferdig: trykk tre ganger på sideknappen.</p>
        </>
      ),
    },
    {
      id: "find-your-way",
      title: "Finn fram på en side",
      intro: "Fem trinn om å finne det du trenger uten å lese alt. Det er slik de fleste bruker skjermleser.",
      steps: [
          {
            title: "Overskrifter",
            body: (
              <>
                <p>De fleste skjermleserbrukere leser ikke en side fra toppen. De hopper mellom overskriftene for å få oversikt, slik du skumleser med øynene. To av tre begynner slik på en lang side.</p>
                <p>Du hopper mellom overskrifter med rotoren. Roter to fingre på skjermen som om du dreier på et hjul. VoiceOver sier navnet på hver innstilling. Fortsett til du hører «Overskrifter». Sveip så ned for å gå til neste, og opp for å gå til forrige.</p>
                <p>Hører du aldri «Overskrifter», legger du det til: åpne Innstillinger, så Tilgjengelighet, så VoiceOver, så Rotor, og slå på Overskrifter.</p>
                <p>VoiceOver sier også nivået på overskriften, for eksempel «overskrift nivå 3». Nivåene forteller hvordan siden er bygd opp.</p>
                <p>Prøv: finn ut når Fjordby bibliotek stenger på lørdag. Bruk overskriftene til å hoppe dit.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Arrangementer</h3>
                <p>Lesesirkelen møtes første tirsdag hver måned. Eventyrstund for barn er på onsdager klokka 11.</p>
                <h3>Låne bøker</h3>
                <p>Du kan låne opptil 20 bøker i fire uker. Lån på nytt i appen eller i skranken.</p>
                <h3>Åpningstider</h3>
                <p>Mandag til fredag 9 til 20. Lørdag 10 til 15. Stengt på søndager.</p>
                <h3>Kontakt</h3>
                <p>Ring oss eller kom innom skranken. Vi svarer på telefonen på hverdager.</p>
                </Practice>
                <p>Svaret står under overskriften Åpningstider: 15.</p>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva rotoren står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Landemerker",
            body: (
              <>
                <p>Landemerker er hovedområdene på en side: toppen, navigasjonsmenyer, hovedinnholdet og bunnen. Noen skjermleserbrukere hopper mellom dem for å slippe det som går igjen på hver side, som menyer.</p>
                <p>Landemerker ligger også i rotoren. Roter to fingre på skjermen som om du dreier på et hjul. VoiceOver sier navnet på hver innstilling. Fortsett til du hører «Landemerker». Sveip så ned for å gå til neste, og opp for å gå til forrige.</p>
                <p>Hører du aldri «Landemerker», legger du det til: åpne Innstillinger, så Tilgjengelighet, så VoiceOver, så Rotor, og slå på Landemerker.</p>
                <p>Prøv: denne siden har en topp, hovedinnholdet med et øvingsområde, menyen nederst som heter «Trinn», og en bunn. Hopp til menyen som heter «Trinn», og så tilbake til hovedinnholdet.</p>
                <p>Hvert landemerke trenger et navn når det finnes flere av samme slag. Derfor heter menyen nederst «Trinn», så du vet hva slags navigasjon det er.</p>
                <Practice title="Fjordby bibliotek">
                <p>Dette øvingsområdet er et eget landemerke, fordi det har et navn. Hørte du det da du hoppet mellom landemerkene?</p>
                </Practice>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva rotoren står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Lenker og knapper",
            body: (
              <>
                <p>VoiceOver sier «lenke» eller «knapp» etter navnet. En lenke tar deg et annet sted. En knapp gjør noe på siden du er på. Derfor betyr det noe hva vi bruker.</p>
                <p>Du kan hoppe mellom lenker med rotoren. Roter to fingre på skjermen som om du dreier på et hjul. VoiceOver sier navnet på hver innstilling. Fortsett til du hører «Lenker». Sveip så ned for å gå til neste, og opp for å gå til forrige.</p>
                <p>Prøv på nyhetene under. Hopp mellom lenkene og lytt. Hvilken lenke forstår du uten å høre teksten rundt?</p>
                <Practice title="Fjordby bibliotek">
                <h3 id="news-1">Nye bøker på krimhylla</h3>
                <p>Tjue nye nordiske krimromaner har kommet. <InPage target="news-1">Les mer</InPage></p>
                <h3 id="news-2">Lesesalen pusses opp</h3>
                <p>Lesesalen er stengt til desember. <InPage target="news-2">Les mer</InPage></p>
                <h3 id="news-3">Bokprat med en lokal forfatter</h3>
                <p>Vi inviterer til en kveld om å skrive. <InPage target="news-3">Les mer</InPage></p>
                <p><InPage target="news-3">Les mer om bokpraten med en lokal forfatter</InPage></p>
                <ToggleButton>Favoritt</ToggleButton>
                </Practice>
                <p>Tre lenker heter «Les mer». Når du hopper mellom lenkene, vet du ikke hvor de går. Den siste lenken sier hva den handler om.</p>
                <p>Favoritt-knappen sier om den er på eller av. Trykk to ganger på den og lytt til hva VoiceOver sier.</p>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva rotoren står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Skjemafelt",
            body: (
              <>
                <p>I et skjema leser VoiceOver navnet på feltet, hva slags felt det er, og eventuell hjelpetekst som hører til.</p>
                <p>Du kan hoppe mellom skjemafelt med rotoren. Roter to fingre på skjermen som om du dreier på et hjul. VoiceOver sier navnet på hver innstilling. Fortsett til du hører «Skjemakontroller». Sveip så ned for å gå til neste, og opp for å gå til forrige.</p>
                <p>Trykk to ganger på et tekstfelt for å få opp tastaturet. Det tar tid å skrive med skjermleser, så skriv bare noen få bokstaver. Finn en bokstav med fingeren og løft fingeren, eller trykk to ganger, for å skrive den.</p>
                <p>Mens tastaturet er oppe, kan du gå til neste felt med rotoren: velg Skjemakontroller og sveip ned.</p>
                <p>Prøv: trykk først på «Meld meg på» uten å fylle ut noe. Lytt til hva som skjer. Fyll så ut skjemaet og meld deg på.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Meld deg på bokpraten</h3>
                <PracticeForm />
                </Practice>
                <p>Når noe er feil, flytter siden deg til feltet, og VoiceOver leser navnet på feltet sammen med feilmeldingen. Hadde feilen bare vært vist i rødt, hadde du ikke hørt den.</p>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva rotoren står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Statusmeldinger",
            body: (
              <>
                <p>Noen endringer på en side leses opp uten at du flytter deg, for eksempel «Lagret». Det kalles statusmeldinger. Andre endringer skjer i stillhet, og da vet ikke en skjermleserbruker at noe har skjedd.</p>
                <p>Prøv begge knappene under. Sveip etterpå til teksten under den siste knappen.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Lista di</h3>
                <StatusButton message="Lagret i lista di.">Lagre med melding</StatusButton>
                <SilentButton message="Lagret klokka" initial="Ikke lagret ennå.">Lagre uten melding</SilentButton>
                </Practice>
                <p>Den første knappen ga en melding du hørte. Den andre endret teksten på skjermen, men du hørte ingenting. En seende ser endringen. Du finner den bare hvis du leter.</p>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva rotoren står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>Du kan nå hoppe mellom overskrifter, landemerker, lenker og skjemafelt, og du har hørt forskjellen på en statusmelding og en stille endring.</p>
          <p>Tenk på en side du har laget selv. Hva ville du hørt hvis du hoppet mellom overskriftene? Finnes det lenker som heter «Les mer»? Leses feilmeldingene opp?</p>
          <p>Husk å slå av VoiceOver når du er ferdig.</p>
        </>
      ),
    },
    {
      id: "more-than-text",
      title: "Mer enn tekst",
      intro: "Fem trinn om innhold som er mer enn tekst: bilder, lister, tabeller, innhold som kan vises og skjules, og dialoger.",
      steps: [
          {
            title: "Bilder og ikoner",
            body: (
              <>
                <p>Et bilde trenger en tekst som sier hva det viser. Den kalles alternativ tekst. Uten den vet ikke en skjermleserbruker hva bildet er, eller om det er viktig. Bilder som bare er pynt, skal ikke leses opp i det hele tatt.</p>
                <p>Det samme gjelder knapper som bare er et ikon. Knappen trenger et navn, selv om navnet ikke vises.</p>
                <p>Prøv: sveip til høyre gjennom øvingsområdet. Lytt til hva VoiceOver sier om bildet og om de to knappene.</p>
                <Practice title="Fjordby bibliotek">
                <img src={library} alt="Fjordby bibliotek: et lavt hus med fire vinduer og en blå dør." width="320" height="180" />
                <img src={wave} alt="" width="320" height="24" />
                <p>Del siden med en venn:</p>
                <p><IconButton label="Del" /><IconButton /></p>
                </Practice>
                <p>Bildet av biblioteket ble lest opp med beskrivelsen. Bølgestreken under er pynt, så VoiceOver hoppet over den. De to knappene ser like ut, men bare den første sier «Del». Den andre har ikke noe navn, så du vet ikke hva den gjør før du trykker på den.</p>
                <p>Mangler et bilde beskrivelse, kan VoiceOver prøve å beskrive det selv. Det heter VoiceOver-gjenkjenning, og du finner det under Innstillinger, så Tilgjengelighet, så VoiceOver, så VoiceOver-gjenkjenning. Beskrivelsen kan være feil, og den vet ikke hvorfor bildet er der.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Lister",
            body: (
              <>
                <p>Når du kommer til en liste, sier VoiceOver at det er en liste og hvor mange punkter den har. Da vet du hvor mye som kommer, og om du vil høre alt.</p>
                <p>Vil du forbi en lang liste, hopper du til neste overskrift med rotoren.</p>
                <p>Prøv: sveip til høyre inn i den første lista og lytt til hva VoiceOver sier i starten. Hopp så forbi den lange lista med filialer til overskriften Kontakt.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Dette trenger du for å låne</h3>
                <ul>
                <li>Lånekort</li>
                <li>En PIN-kode du velger selv</li>
                <li>Bøkene du vil låne</li>
                </ul>
                <h3>Alle filialer</h3>
                <ul>
                <li>Fjordby sentrum</li>
                <li>Nordhavna</li>
                <li>Lia</li>
                <li>Strand</li>
                <li>Bakkeby</li>
                <li>Øvre Fjordby</li>
                <li>Sjøsiden</li>
                <li>Skogen</li>
                </ul>
                <h3>Kontakt</h3>
                <p>Ring oss eller kom innom skranken.</p>
                </Practice>
                <p>Hadde lista bare vært linjer med bindestrek foran, hadde ikke VoiceOver sagt at det var en liste. Da vet du ikke hvor lang den er før du har hørt alt.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Tabeller",
            body: (
              <>
                <p>I en tabell leser VoiceOver én celle om gangen. I en godt laget tabell vet VoiceOver også hvilken kolonne cellen hører til, så du hører at «35 kr» er et beløp og ikke noe annet.</p>
                <p>Sveip til høyre for å gå fra celle til celle, rad for rad. Lytt etter om VoiceOver sier navnet på kolonnen sammen med innholdet i cellen.</p>
                <p>Prøv: finn ut hvor mye du måtte betale for å levere en bok for sent.</p>
                <Practice title="Fjordby bibliotek">
                <table>
                <caption>Kontoen din i oktober</caption>
                <thead><tr><th scope="col">Dato</th><th scope="col">Hva</th><th scope="col" className="amount">Beløp</th></tr></thead>
                <tbody>
                <tr><td>2. okt.</td><td>Reservering</td><td className="amount">10 kr</td></tr>
                <tr><td>9. okt.</td><td>Kopier, 12 sider</td><td className="amount">24 kr</td></tr>
                <tr><td>16. okt.</td><td>Levert for sent</td><td className="amount">35 kr</td></tr>
                <tr><td>23. okt.</td><td>Tapt lånekort</td><td className="amount">50 kr</td></tr>
                </tbody>
                </table>
                </Practice>
                <p>Svaret er 35 kr, på raden Levert for sent. Hadde tabellen vært laget med vanlig tekst og mellomrom, hadde du hørt tallene uten å vite hva de betyr.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Vis mer og trekkspill",
            body: (
              <>
                <p>Mange sider skjuler tekst bak en knapp, for eksempel spørsmål og svar. En god knapp sier om innholdet er skjult eller vist. VoiceOver sier det etter navnet på knappen.</p>
                <p>Prøv: finn ut om du kan levere bøker når biblioteket er stengt. Trykk to ganger på spørsmålet, og sveip til høyre for å høre svaret. Lytt til hva VoiceOver sier om knappen før og etter at du trykker.</p>
                <Practice title="Fjordby bibliotek">
                <Disclosure title="Kan jeg levere når dere er stengt?"><p>Ja. Ved inngangen er det en luke for innlevering. Den er åpen hele døgnet.</p></Disclosure>
                <Disclosure title="Hva koster det å levere for sent?"><p>35 kroner per bok.</p></Disclosure>
                <Disclosure title="Kan jeg låne e-bøker?"><p>Ja, i appen.</p></Disclosure>
                </Practice>
                <p>Svaret kom rett etter knappen. Hadde det dukket opp et annet sted på siden, hadde du ikke funnet det. Og hadde ikke knappen sagt at innholdet var skjult, hadde du ikke visst at det var noe å åpne.</p>
                <p>Spørsmålene er også overskrifter, så du kan hoppe mellom dem med overskrifter.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Dialoger",
            body: (
              <>
                <p>En dialog legger seg over siden og venter på et svar, for eksempel «Er du sikker?». Når den åpnes, skal VoiceOver flytte deg inn i den. Mens den er åpen, skal du ikke kunne sveipe deg ut til siden bak.</p>
                <p>Prøv: trykk to ganger på «Slett lista di». Sveip til høyre gjennom dialogen, og videre forbi den siste knappen. Kommer du ut av dialogen? Velg så Avbryt.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Lista di</h3>
                <PracticeDialog open="Slett lista di" title="Vil du slette lista di?"><p>Du mister de fire bøkene du har lagret.</p></PracticeDialog>
                </Practice>
                <p>Da dialogen lukket seg, kom du tilbake til knappen du trykket på, og du hørte hva som skjedde. Uten det havner du ofte øverst på siden og må lete deg tilbake.</p>
                <p>Mange dialoger kan også lukkes med en sikksakkbevegelse med to fingre: beveg to fingre raskt fram og tilbake tre ganger, som en «z». Det virker ikke på alle nettsider. Da bruker du knappen for å lukke.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>Du har hørt hvordan bilder, lister, tabeller, innhold som kan skjules, og dialoger leses opp, og hva du går glipp av når de er laget dårlig.</p>
          <p>Tenk på en side du har laget selv. Har ikonknappene navn? Er tabellene ekte tabeller? Hører du om noe er skjult eller vist?</p>
          <p>Husk å slå av VoiceOver når du er ferdig.</p>
        </>
      ),
    },
    ],
  },
  android: {
    name: "TalkBack på Android",
    source: { url: "https://support.google.com/accessibility/android/answer/6151827", title: "Google, TalkBack-bevegelser" },
    parts: [
    {
      id: "get-started",
      title: "Kom i gang",
      intro: "Fem korte trinn, omtrent 15 minutter. Les trinn 1 før du slår på TalkBack.",
      steps: [
          {
            title: "Lær å slå av før du slår på",
            body: (
              <>
                <p>Les dette trinnet før du slår på TalkBack. Finner du ikke et valg, søk etter «TalkBack» i Innstillinger.</p>
                <p>Når TalkBack er på, virker telefonen annerledes. Ett trykk velger noe og leser det opp. Du må trykke to ganger for å åpne eller aktivere det du har valgt. Derfor setter du opp en snarvei først.</p>
                <ol>
                  <li>Åpne Innstillinger, så Tilgjengelighet, så TalkBack.</li>
                  <li>Slå på TalkBack-snarveien.</li>
                  <li>Kom tilbake til denne siden.</li>
                </ol>
                <p>Nå slår du TalkBack av og på ved å holde inne begge volumknappene i tre sekunder. Første gang spør telefonen om du vil bruke snarveien.</p>
                <div className="box">
                  <p><strong>Står du fast?</strong> Hold inne begge volumknappene i tre sekunder. Eller si til Google Assistent: «Slå av TalkBack».</p>
                </div>
                <p>Når snarveien er klar, trykker du på Neste nederst på skjermen.</p>
              </>
            ),
          },
          {
            title: "Slå på TalkBack",
            body: (
              <>
                <p>Hold inne begge volumknappene i tre sekunder. Du hører en stemme, og det kommer en farget ramme rundt det TalkBack har valgt.</p>
                <p>Fra nå av leser TalkBack denne siden for deg. Du går videre ved å sveipe til høyre med én finger, hvor som helst på skjermen. Prøv nå.</p>
                <p>Bra. Hvert sveip til høyre går til neste ting på siden. Sveip til venstre for å gå tilbake.</p>
                <p>Trykk én gang med tre fingre. Åpnes en meny, kan telefonen din bruke bevegelser med flere fingre, og det er det denne innføringen bruker. Lukk menyen ved å sveipe ned og så til venstre i én bevegelse. Åpnes ingen meny, bruker telefonen bare bevegelser med én finger. Da finner du dem i TalkBack-opplæringen, under TalkBack-innstillingene.</p>
                <p>Nederst på skjermen er det en meny med Hjem, Tilbake, Meny og Neste, som fanelinjen i en app. Sveip til høyre til du hører «Neste». Trykk så to ganger hvor som helst på skjermen.</p>
              </>
            ),
          },
          {
            title: "Lytte og stoppe",
            body: (
              <>
                <p>Du kommer til å høre mye mer enn du trenger. Den viktigste ferdigheten er å stoppe talen.</p>
                <p>Trykk én gang med to fingre for å stoppe. Trykk med to fingre igjen for å fortsette.</p>
                <p>Øv på dette avsnittet. Det er langt med vilje. Skjermleserbrukere skummer ved å høre de første ordene og så hoppe videre hvis det ikke er det de leter etter. Derfor er det viktig at det viktigste står først i en tekst, i en lenke og i en knapp. Når du hører at et avsnitt ikke er det du trenger, sveiper du bare videre. Du trenger ikke vente til det er ferdig lest. Prøv å stoppe talen nå, med to fingre.</p>
                <p>Vil du lese hele siden fra toppen, åpner du TalkBack-menyen ved å trykke med tre fingre, og velger «Les fra toppen». Stopp med to fingre når du vil.</p>
                <p>TalkBack ruller siden når du sveiper. Vil du rulle selv, sveiper du opp eller ned med to fingre.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Utforske ved berøring og aktivere",
            body: (
              <>
                <p>Du kan også dra én finger rundt på skjermen. TalkBack leser det du rører ved. Slik finner du ting raskt hvis du vet omtrent hvor de er.</p>
                <p>Når TalkBack har valgt noe, trykker du to ganger raskt hvor som helst på skjermen for å aktivere det. Du trenger ikke treffe selve knappen.</p>
                <p>Prøv på knappen under. Sveip til den, eller finn den med fingeren. Trykk så to ganger.</p>
                <StatusButton message="Bra! Du aktiverte knappen. TalkBack leste denne meldingen uten at du flyttet deg.">Prøv meg</StatusButton>
                <p>Finn nå Neste med fingeren. Den er nederst til høyre på skjermen. Rør den, lytt, og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Skjul skjermen",
            body: (
              <>
                <p>TalkBack kan gjøre skjermen svart mens TalkBack fortsatt virker. Da må du stole på det du hører, slik mange skjermleserbrukere gjør.</p>
                <p>Åpne TalkBack-menyen ved å trykke med tre fingre, og velg «Skjul skjermen». Skjermen vises igjen når du velger det samme i menyen.</p>
                <p>Prøv: skjul skjermen. Sveip gjennom denne siden, finn så Neste nederst til høyre med fingeren, og trykk to ganger. Du kan la skjermen være skjult.</p>
                <div className="box">
                  <p><strong>Får du ikke skjermen tilbake?</strong> Åpne TalkBack-menyen med tre fingre og velg å vise skjermen. Hjelper ikke det, slår du av TalkBack ved å holde inne begge volumknappene.</p>
                </div>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>Du kan nå slå TalkBack av og på, gå frem og tilbake, stoppe talen, finne ting med fingeren, aktivere dem og skjule skjermen.</p>
          <p>Er skjermen fortsatt skjult, åpner du TalkBack-menyen med tre fingre og velger å vise den.</p>
          <p>Neste del handler om overskrifter, landemerker, lenker og knapper, skjemaer og statusmeldinger.</p>
          <p>Vil du øve mer, har TalkBack sin egen opplæring. Åpne TalkBack-menyen med tre fingre, velg TalkBack-innstillinger, og så Opplæring og hjelp.</p>
          <p>Husk å slå av TalkBack når du er ferdig: hold inne begge volumknappene.</p>
        </>
      ),
    },
    {
      id: "find-your-way",
      title: "Finn fram på en side",
      intro: "Fem trinn om å finne det du trenger uten å lese alt. Det er slik de fleste bruker skjermleser.",
      steps: [
          {
            title: "Overskrifter",
            body: (
              <>
                <p>De fleste skjermleserbrukere leser ikke en side fra toppen. De hopper mellom overskriftene for å få oversikt, slik du skumleser med øynene. To av tre begynner slik på en lang side.</p>
                <p>Du hopper mellom overskrifter med lesekontrollene. Sveip opp og så ned i én bevegelse for å bytte lesekontroll. På telefoner med bevegelser med flere fingre kan du også sveipe opp eller ned med tre fingre. TalkBack sier navnet på hver kontroll. Fortsett til du hører «Overskrifter». Sveip så ned for å gå til neste, og opp for å gå til forrige.</p>
                <p>Hører du aldri «Overskrifter», legger du det til: åpne TalkBack-menyen med tre fingre, velg TalkBack-innstillinger, så Tilpass menyer, så Tilpass lesekontroller, og slå på Overskrifter.</p>
                <p>TalkBack sier også nivået på overskriften, for eksempel «overskrift nivå 3». Nivåene forteller hvordan siden er bygd opp.</p>
                <p>Prøv: finn ut når Fjordby bibliotek stenger på lørdag. Bruk overskriftene til å hoppe dit.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Arrangementer</h3>
                <p>Lesesirkelen møtes første tirsdag hver måned. Eventyrstund for barn er på onsdager klokka 11.</p>
                <h3>Låne bøker</h3>
                <p>Du kan låne opptil 20 bøker i fire uker. Lån på nytt i appen eller i skranken.</p>
                <h3>Åpningstider</h3>
                <p>Mandag til fredag 9 til 20. Lørdag 10 til 15. Stengt på søndager.</p>
                <h3>Kontakt</h3>
                <p>Ring oss eller kom innom skranken. Vi svarer på telefonen på hverdager.</p>
                </Practice>
                <p>Svaret står under overskriften Åpningstider: 15.</p>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva lesekontrollene står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Landemerker",
            body: (
              <>
                <p>Landemerker er hovedområdene på en side: toppen, navigasjonsmenyer, hovedinnholdet og bunnen. Noen skjermleserbrukere hopper mellom dem for å slippe det som går igjen på hver side, som menyer.</p>
                <p>Landemerker ligger også i lesekontrollene. Sveip opp og så ned i én bevegelse for å bytte lesekontroll. På telefoner med bevegelser med flere fingre kan du også sveipe opp eller ned med tre fingre. TalkBack sier navnet på hver kontroll. Fortsett til du hører «Landemerker». Sveip så ned for å gå til neste, og opp for å gå til forrige.</p>
                <p>Hører du aldri «Landemerker», legger du det til: åpne TalkBack-menyen med tre fingre, velg TalkBack-innstillinger, så Tilpass menyer, så Tilpass lesekontroller, og slå på Landemerker. Har ikke TalkBack-versjonen din noe valg for Landemerker, leser du dette trinnet og går videre.</p>
                <p>Prøv: denne siden har en topp, hovedinnholdet med et øvingsområde, menyen nederst som heter «Trinn», og en bunn. Hopp til menyen som heter «Trinn», og så tilbake til hovedinnholdet.</p>
                <p>Hvert landemerke trenger et navn når det finnes flere av samme slag. Derfor heter menyen nederst «Trinn», så du vet hva slags navigasjon det er.</p>
                <Practice title="Fjordby bibliotek">
                <p>Dette øvingsområdet er et eget landemerke, fordi det har et navn. Hørte du det da du hoppet mellom landemerkene?</p>
                </Practice>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva lesekontrollene står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Lenker og knapper",
            body: (
              <>
                <p>TalkBack sier «lenke» eller «knapp» etter navnet. En lenke tar deg et annet sted. En knapp gjør noe på siden du er på. Derfor betyr det noe hva vi bruker.</p>
                <p>Du kan hoppe mellom lenker med lesekontrollene. Sveip opp og så ned i én bevegelse for å bytte lesekontroll. På telefoner med bevegelser med flere fingre kan du også sveipe opp eller ned med tre fingre. TalkBack sier navnet på hver kontroll. Fortsett til du hører «Lenker». Sveip så ned for å gå til neste, og opp for å gå til forrige.</p>
                <p>Prøv på nyhetene under. Hopp mellom lenkene og lytt. Hvilken lenke forstår du uten å høre teksten rundt?</p>
                <Practice title="Fjordby bibliotek">
                <h3 id="news-1">Nye bøker på krimhylla</h3>
                <p>Tjue nye nordiske krimromaner har kommet. <InPage target="news-1">Les mer</InPage></p>
                <h3 id="news-2">Lesesalen pusses opp</h3>
                <p>Lesesalen er stengt til desember. <InPage target="news-2">Les mer</InPage></p>
                <h3 id="news-3">Bokprat med en lokal forfatter</h3>
                <p>Vi inviterer til en kveld om å skrive. <InPage target="news-3">Les mer</InPage></p>
                <p><InPage target="news-3">Les mer om bokpraten med en lokal forfatter</InPage></p>
                <ToggleButton>Favoritt</ToggleButton>
                </Practice>
                <p>Tre lenker heter «Les mer». Når du hopper mellom lenkene, vet du ikke hvor de går. Den siste lenken sier hva den handler om.</p>
                <p>Favoritt-knappen sier om den er på eller av. Trykk to ganger på den og lytt til hva TalkBack sier.</p>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva lesekontrollene står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Skjemafelt",
            body: (
              <>
                <p>I et skjema leser TalkBack navnet på feltet, hva slags felt det er, og eventuell hjelpetekst som hører til.</p>
                <p>Du kan hoppe mellom skjemafelt med lesekontrollene. Sveip opp og så ned i én bevegelse for å bytte lesekontroll. På telefoner med bevegelser med flere fingre kan du også sveipe opp eller ned med tre fingre. TalkBack sier navnet på hver kontroll. Fortsett til du hører «Kontroller». Sveip så ned for å gå til neste, og opp for å gå til forrige.</p>
                <p>Trykk to ganger på et tekstfelt for å få opp tastaturet. Det tar tid å skrive med skjermleser, så skriv bare noen få bokstaver. Finn en bokstav med fingeren og løft fingeren for å skrive den.</p>
                <p>Mens tastaturet er oppe, kan du gå til neste felt med lesekontrollene: velg Kontroller og sveip ned.</p>
                <p>Prøv: trykk først på «Meld meg på» uten å fylle ut noe. Lytt til hva som skjer. Fyll så ut skjemaet og meld deg på.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Meld deg på bokpraten</h3>
                <PracticeForm />
                </Practice>
                <p>Når noe er feil, flytter siden deg til feltet, og TalkBack leser navnet på feltet sammen med feilmeldingen. Hadde feilen bare vært vist i rødt, hadde du ikke hørt den.</p>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva lesekontrollene står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Statusmeldinger",
            body: (
              <>
                <p>Noen endringer på en side leses opp uten at du flytter deg, for eksempel «Lagret». Det kalles statusmeldinger. Andre endringer skjer i stillhet, og da vet ikke en skjermleserbruker at noe har skjedd.</p>
                <p>Prøv begge knappene under. Sveip etterpå til teksten under den siste knappen.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Lista di</h3>
                <StatusButton message="Lagret i lista di.">Lagre med melding</StatusButton>
                <SilentButton message="Lagret klokka" initial="Ikke lagret ennå.">Lagre uten melding</SilentButton>
                </Practice>
                <p>Den første knappen ga en melding du hørte. Den andre endret teksten på skjermen, men du hørte ingenting. En seende ser endringen. Du finner den bare hvis du leter.</p>
                <p>Sveip til høyre og venstre går fortsatt én ting om gangen, uansett hva lesekontrollene står på. Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>Du kan nå hoppe mellom overskrifter, landemerker, lenker og skjemafelt, og du har hørt forskjellen på en statusmelding og en stille endring.</p>
          <p>Tenk på en side du har laget selv. Hva ville du hørt hvis du hoppet mellom overskriftene? Finnes det lenker som heter «Les mer»? Leses feilmeldingene opp?</p>
          <p>Husk å slå av TalkBack når du er ferdig.</p>
        </>
      ),
    },
    {
      id: "more-than-text",
      title: "Mer enn tekst",
      intro: "Fem trinn om innhold som er mer enn tekst: bilder, lister, tabeller, innhold som kan vises og skjules, og dialoger.",
      steps: [
          {
            title: "Bilder og ikoner",
            body: (
              <>
                <p>Et bilde trenger en tekst som sier hva det viser. Den kalles alternativ tekst. Uten den vet ikke en skjermleserbruker hva bildet er, eller om det er viktig. Bilder som bare er pynt, skal ikke leses opp i det hele tatt.</p>
                <p>Det samme gjelder knapper som bare er et ikon. Knappen trenger et navn, selv om navnet ikke vises.</p>
                <p>Prøv: sveip til høyre gjennom øvingsområdet. Lytt til hva TalkBack sier om bildet og om de to knappene.</p>
                <Practice title="Fjordby bibliotek">
                <img src={library} alt="Fjordby bibliotek: et lavt hus med fire vinduer og en blå dør." width="320" height="180" />
                <img src={wave} alt="" width="320" height="24" />
                <p>Del siden med en venn:</p>
                <p><IconButton label="Del" /><IconButton /></p>
                </Practice>
                <p>Bildet av biblioteket ble lest opp med beskrivelsen. Bølgestreken under er pynt, så TalkBack hoppet over den. De to knappene ser like ut, men bare den første sier «Del». Den andre har ikke noe navn, så du vet ikke hva den gjør før du trykker på den.</p>
                <p>Mangler et bilde beskrivelse, kan TalkBack prøve å beskrive det med kunstig intelligens: sett fokus på bildet, åpne TalkBack-menyen med tre fingre og velg Beskriv bildet. Det finnes ikke på alle telefoner. Beskrivelsen kan være feil, og den vet ikke hvorfor bildet er der.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Lister",
            body: (
              <>
                <p>Når du kommer til en liste, sier TalkBack at det er en liste og hvor mange punkter den har. Da vet du hvor mye som kommer, og om du vil høre alt.</p>
                <p>Vil du forbi en lang liste, hopper du til neste overskrift. Du kan også legge til Lister i lesekontrollene: åpne TalkBack-menyen med tre fingre, velg TalkBack-innstillinger, så Tilpass menyer, så Tilpass lesekontroller, og slå på Lister.</p>
                <p>Prøv: sveip til høyre inn i den første lista og lytt til hva TalkBack sier i starten. Hopp så forbi den lange lista med filialer til overskriften Kontakt.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Dette trenger du for å låne</h3>
                <ul>
                <li>Lånekort</li>
                <li>En PIN-kode du velger selv</li>
                <li>Bøkene du vil låne</li>
                </ul>
                <h3>Alle filialer</h3>
                <ul>
                <li>Fjordby sentrum</li>
                <li>Nordhavna</li>
                <li>Lia</li>
                <li>Strand</li>
                <li>Bakkeby</li>
                <li>Øvre Fjordby</li>
                <li>Sjøsiden</li>
                <li>Skogen</li>
                </ul>
                <h3>Kontakt</h3>
                <p>Ring oss eller kom innom skranken.</p>
                </Practice>
                <p>Hadde lista bare vært linjer med bindestrek foran, hadde ikke TalkBack sagt at det var en liste. Da vet du ikke hvor lang den er før du har hørt alt.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Tabeller",
            body: (
              <>
                <p>I en tabell leser TalkBack én celle om gangen. I en godt laget tabell vet TalkBack også hvilken kolonne cellen hører til, så du hører at «35 kr» er et beløp og ikke noe annet.</p>
                <p>Sveip til høyre går som vanlig fra celle til celle. Når du er inne i en tabell, får lesekontrollene også valgene Rader og Kolonner. Sveip opp og så ned i én bevegelse til du hører «Rader», og sveip ned for å gå til neste rad. Lytt etter om TalkBack sier navnet på kolonnen sammen med innholdet i cellen.</p>
                <p>Prøv: finn ut hvor mye du måtte betale for å levere en bok for sent.</p>
                <Practice title="Fjordby bibliotek">
                <table>
                <caption>Kontoen din i oktober</caption>
                <thead><tr><th scope="col">Dato</th><th scope="col">Hva</th><th scope="col" className="amount">Beløp</th></tr></thead>
                <tbody>
                <tr><td>2. okt.</td><td>Reservering</td><td className="amount">10 kr</td></tr>
                <tr><td>9. okt.</td><td>Kopier, 12 sider</td><td className="amount">24 kr</td></tr>
                <tr><td>16. okt.</td><td>Levert for sent</td><td className="amount">35 kr</td></tr>
                <tr><td>23. okt.</td><td>Tapt lånekort</td><td className="amount">50 kr</td></tr>
                </tbody>
                </table>
                </Practice>
                <p>Svaret er 35 kr, på raden Levert for sent. Hadde tabellen vært laget med vanlig tekst og mellomrom, hadde du hørt tallene uten å vite hva de betyr.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Vis mer og trekkspill",
            body: (
              <>
                <p>Mange sider skjuler tekst bak en knapp, for eksempel spørsmål og svar. En god knapp sier om innholdet er skjult eller vist. TalkBack sier det etter navnet på knappen.</p>
                <p>Prøv: finn ut om du kan levere bøker når biblioteket er stengt. Trykk to ganger på spørsmålet, og sveip til høyre for å høre svaret. Lytt til hva TalkBack sier om knappen før og etter at du trykker.</p>
                <Practice title="Fjordby bibliotek">
                <Disclosure title="Kan jeg levere når dere er stengt?"><p>Ja. Ved inngangen er det en luke for innlevering. Den er åpen hele døgnet.</p></Disclosure>
                <Disclosure title="Hva koster det å levere for sent?"><p>35 kroner per bok.</p></Disclosure>
                <Disclosure title="Kan jeg låne e-bøker?"><p>Ja, i appen.</p></Disclosure>
                </Practice>
                <p>Svaret kom rett etter knappen. Hadde det dukket opp et annet sted på siden, hadde du ikke funnet det. Og hadde ikke knappen sagt at innholdet var skjult, hadde du ikke visst at det var noe å åpne.</p>
                <p>Spørsmålene er også overskrifter, så du kan hoppe mellom dem med overskrifter.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          },
          {
            title: "Dialoger",
            body: (
              <>
                <p>En dialog legger seg over siden og venter på et svar, for eksempel «Er du sikker?». Når den åpnes, skal TalkBack flytte deg inn i den. Mens den er åpen, skal du ikke kunne sveipe deg ut til siden bak.</p>
                <p>Prøv: trykk to ganger på «Slett lista di». Sveip til høyre gjennom dialogen, og videre forbi den siste knappen. Kommer du ut av dialogen? Velg så Avbryt.</p>
                <Practice title="Fjordby bibliotek">
                <h3>Lista di</h3>
                <PracticeDialog open="Slett lista di" title="Vil du slette lista di?"><p>Du mister de fire bøkene du har lagret.</p></PracticeDialog>
                </Practice>
                <p>Da dialogen lukket seg, kom du tilbake til knappen du trykket på, og du hørte hva som skjedde. Uten det havner du ofte øverst på siden og må lete deg tilbake.</p>
                <p>Mange dialoger kan også lukkes med Tilbake: sveip ned og så til venstre i én bevegelse. Det virker ikke på alle nettsider. Da bruker du knappen for å lukke.</p>
                <p>Sveip til høyre til du hører «Neste», og trykk to ganger.</p>
              </>
            ),
          }
        ],
      done: (
        <>
          <p>Du har hørt hvordan bilder, lister, tabeller, innhold som kan skjules, og dialoger leses opp, og hva du går glipp av når de er laget dårlig.</p>
          <p>Tenk på en side du har laget selv. Har ikonknappene navn? Er tabellene ekte tabeller? Hører du om noe er skjult eller vist?</p>
          <p>Husk å slå av TalkBack når du er ferdig.</p>
        </>
      ),
    },
    ],
  },
};

export default content;
