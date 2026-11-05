import { useEffect, useRef, useState, type ReactNode } from 'react';
import en from './content/en';
import nb from './content/nb';
import type { Lang, Platform, PlatformContent } from './content/types';
import { ui } from './content/ui';
import { LangContext, useLang } from './lang';
import { href, useRoute, type Route } from './router';
import { getTheme, setLang, setTheme, type Theme } from './settings';

const CONTENT = { en, nb };

const HOME = {
  en: {
    title: 'Get started with a mobile screen reader',
    body: (
      <>
        <p>
          This is an introduction for sighted people who design, build or test digital services. You learn to use the
          screen reader on your own phone: VoiceOver on iPhone or TalkBack on Android.
        </p>
        <p>Your screen reader reads the introduction to you. You practise while you hear how it works.</p>
      </>
    ),
    choose: 'Choose your phone',
    before: 'Before you start',
    beforeBody: (
      <>
        <p>Parts 1 to 4 have five short steps each and take about 15 minutes. At the end there is a task where you use everything. Headphones help.</p>
        <p>
          You can add the introduction to your home screen, so it opens like an app. On iPhone, tap Share in Safari and
          choose Add to Home Screen. On Android, open the Chrome menu and choose Add to Home screen.
        </p>
        <p>
          This is not a simulation of being blind. People who use a screen reader every day have spent years getting
          good at it, and most of them listen far faster than you will today. The goal is to understand the tool well
          enough to test what you make, and to hear the difference between good and bad code.
        </p>
      </>
    ),
  },
  nb: {
    title: 'Kom i gang med skjermleser på mobil',
    body: (
      <>
        <p>
          Dette er en innføring for deg som ser, og som lager eller tester digitale tjenester. Du lærer å bruke
          skjermleseren på din egen telefon: VoiceOver på iPhone eller TalkBack på Android.
        </p>
        <p>Innføringen leses opp av skjermleseren din. Du øver mens du hører hvordan den fungerer.</p>
      </>
    ),
    choose: 'Velg telefon',
    before: 'Før du starter',
    beforeBody: (
      <>
        <p>Del 1 til 4 har fem korte trinn hver og tar omtrent 15 minutter. Til slutt kommer en oppgave der du bruker alt. Bruk gjerne hodetelefoner.</p>
        <p>
          Du kan legge innføringen på hjemskjermen, så åpnes den som en app. På iPhone trykker du på Del i Safari og
          velger Legg til på Hjem-skjerm. På Android åpner du menyen i Chrome og velger Legg til på startsiden.
        </p>
        <p>
          Dette er ikke en simulering av hvordan det er å være blind. De som bruker skjermleser hver dag, har brukt år på
          å bli gode, og de fleste lytter mye raskere enn du kommer til å gjøre i dag. Målet er at du forstår verktøyet
          godt nok til å teste det du lager, og at du hører forskjellen på god og dårlig koding.
        </p>
      </>
    ),
  },
};

/** Det som vises for en rute: tittel, innhold og eventuell meny nederst. */
interface Screen {
  title: string;
  heading: ReactNode;
  body: ReactNode;
  /** Knapper i menyen nederst. Hjem er alltid med. */
  tabbar: { back?: Route; menu?: Route; pos?: string; next?: Route; nextLabel?: string };
  platform?: PlatformContent;
}

// Siste skjerm før Innstillinger, så Tilbake går dit.
let lastScreen: Route = { lang: 'en' };

function Settings() {
  const lang = useLang();
  const t = ui[lang];
  const [theme, setThemeState] = useState<Theme>(getTheme);
  const chooseLang = (next: Lang) => {
    setLang(next);
    window.location.hash = href({ lang: next, settings: true });
  };
  const chooseTheme = (next: Theme) => {
    setTheme(next);
    setThemeState(next);
  };
  const themes: Theme[] = ['auto', 'light', 'dark'];
  return (
    <>
      <p>{t.settingsIntro}</p>
      <fieldset>
        <legend>{t.language}</legend>
        <label className="check" lang="en">
          <input type="radio" name="lang" checked={lang === 'en'} onChange={() => chooseLang('en')} /> English
        </label>
        <label className="check" lang="nb">
          <input type="radio" name="lang" checked={lang === 'nb'} onChange={() => chooseLang('nb')} /> Norsk
        </label>
      </fieldset>
      <fieldset>
        <legend>{t.appearance}</legend>
        {themes.map((th) => (
          <label className="check" key={th}>
            <input type="radio" name="theme" checked={theme === th} onChange={() => chooseTheme(th)} /> {t[th]}
          </label>
        ))}
      </fieldset>
    </>
  );
}

function screenFor(route: Route): Screen {
  const { lang } = route;
  const t = ui[lang];
  if (route.settings) {
    return { title: `${t.settings} – ${t.home}`, heading: t.settings, body: <Settings />, tabbar: { back: { ...lastScreen, lang } } };
  }
  if (!route.platform) {
    const h = HOME[lang];
    return {
      title: h.title,
      heading: h.title,
      body: (
        <>
          {h.body}
          <h2>{h.choose}</h2>
          <ul className="choices">
            <li>
              <a href={href({ lang, platform: 'iphone' })}>iPhone: VoiceOver</a>
            </li>
            <li>
              <a href={href({ lang, platform: 'android' })}>Android: TalkBack</a>
            </li>
          </ul>
          <h2>{h.before}</h2>
          {h.beforeBody}
        </>
      ),
      tabbar: {},
    };
  }

  const platform: Platform = route.platform;
  const c = CONTENT[lang][platform];
  const menu: Route = { lang, platform };
  // Ukjent eller manglende del gir den første, så gamle adresser ikke ender på en tom side.
  const partIndex = Math.max(c.parts.findIndex((p) => p.id === route.part), 0);
  const part = c.parts[partIndex];

  // Menyen for plattformen: alle delene
  if (route.step === undefined) {
    return {
      title: `${c.name} – ${t.home}`,
      heading: c.name,
      platform: c,
      body: (
        <>
          {c.parts.map((p, i) => (
            <section key={p.id} aria-labelledby={`part-${p.id}`}>
              <h2 id={`part-${p.id}`}>
                {t.part} {i + 1}: {p.title}
              </h2>
              <p>{p.intro}</p>
              <ol className="steps">
                {p.steps.map((s, j) => (
                  <li key={s.title}>
                    <a href={href({ lang, platform, part: p.id, step: j + 1 })}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </section>
          ))}
          <p>
            <a className="cta" href={href({ lang, platform, part: c.parts[0].id, step: 1 })}>
              {t.start}
            </a>
          </p>
        </>
      ),
      tabbar: { menu },
    };
  }

  const total = part.steps.length;
  const partNo = partIndex + 1;
  const at = (step: number | 'done', p = part.id): Route => ({ lang, platform, part: p, step });

  if (route.step === 'done') {
    const nextPart = partNo < c.parts.length;
    return {
      title: `${nextPart ? t.done : t.allDone} – ${c.name}`,
      heading: nextPart ? t.done : t.allDone,
      platform: c,
      body: part.done,
      tabbar: {
        back: at(total),
        menu,
        next: nextPart ? at(1, c.parts[partIndex + 1].id) : { lang },
        nextLabel: nextPart ? `${t.part} ${partNo + 1}` : t.finish,
      },
    };
  }

  const n = Math.min(Math.max(route.step, 1), total);
  const step = part.steps[n - 1];
  const label = partNo > 1 ? `${t.part} ${partNo}, ${t.step.toLowerCase()} ${n} ${t.of} ${total}` : `${t.step} ${n} ${t.of} ${total}`;
  return {
    title: `${label}: ${step.title} – ${c.name}`,
    heading: (
      <>
        <span className="eyebrow">{label}</span> {step.title}
      </>
    ),
    platform: c,
    body: step.body,
    tabbar: {
      back: n > 1 ? at(n - 1) : menu,
      menu,
      pos: `${n} ${t.of} ${total}`,
      next: n < total ? at(n + 1) : at('done'),
      nextLabel: t.next,
    },
  };
}

export default function App() {
  const route = useRoute();
  const lang: Lang = route.lang;
  const t = ui[lang];
  const screen = screenFor(route);
  if (!route.settings) lastScreen = route;
  const heading = useRef<HTMLHeadingElement>(null);
  const key = href(route);
  const previous = useRef(key);

  // Ved bytte av skjerm: flytt fokus til overskriften, så skjermleseren leser den
  // i stedet for å bli stående på knappen du trykket på. Ikke ved første lasting, og ikke to ganger for samme rute.
  useEffect(() => {
    document.title = screen.title;
    document.documentElement.lang = lang;
    document.querySelector('link[rel="manifest"]')?.setAttribute('href', `manifest${lang === 'nb' ? '-nb' : ''}.webmanifest`);
    if (previous.current === key) return;
    previous.current = key;
    window.scrollTo(0, 0);
    // Vent to bildeoppdateringer, så VoiceOver og TalkBack har fått med seg det nye
    // innholdet før fokus flyttes. Ellers mister de plassen og hopper til nettleserens
    // knapper øverst på skjermen.
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => heading.current?.focus());
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  const tb = screen.tabbar;
  const isHome = !route.platform && !route.settings;
  const columns = 1 + Number(!!tb.back) + Number(!!tb.menu) + Number(!!tb.next);

  return (
    <LangContext.Provider value={lang}>
      <header>
        <span className="app-name">{t.home}</span>
        <a href={href({ lang, settings: true })} aria-current={route.settings ? 'page' : undefined}>
          {t.settings}
        </a>
      </header>
      <main>
        {/* key: ny overskrift for hver skjerm. Skjermlesere reagerer ikke alltid når fokus
            settes på et element som allerede fantes og bare har fått ny tekst. */}
        <h1 ref={heading} tabIndex={-1} key={key}>
          {screen.heading}
        </h1>
        {screen.body}
      </main>
      <nav className="tabbar" aria-label={t.nav} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        <a href={href({ lang })} aria-current={isHome ? 'page' : undefined}>
          {t.homeTab}
        </a>
        {tb.back && <a href={href(tb.back)}>{t.back}</a>}
        {tb.menu && (
          <a href={href(tb.menu)} aria-current={route.platform && route.step === undefined ? 'page' : undefined}>
            {t.menu}
            {tb.pos && <span className="pos"> {tb.pos}</span>}
          </a>
        )}
        {tb.next && (
          <a href={href(tb.next)} className="primary">
            {tb.nextLabel}
          </a>
        )}
      </nav>
      {/* Footer bare på forsiden (lab-et) og menyen for hver telefon (kilden), ikke på hvert trinn. */}
      {isHome && (
        <footer>
          <p>
            {t.partOf} <a href="https://a11yintuition.org/">A11y Intuition Lab</a>.
          </p>
        </footer>
      )}
      {screen.platform && route.step === undefined && (
        <footer>
          <p>
            {t.source}: <a href={screen.platform.source.url}>{screen.platform.source.title}</a>.
          </p>
        </footer>
      )}
    </LangContext.Provider>
  );
}
