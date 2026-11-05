// Nettsiden til en oppdiktet restaurant, brukt i den avsluttende oppgaven.
// Alt er bygd slik det skal være, så oppgaven er mulig å løse med skjermleser.
import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { useLang } from '../lang';
import { Disclosure, InPage } from './practice';

const DAYS = { en: ['Friday', 'Saturday', 'Sunday'], nb: ['Fredag', 'Lørdag', 'Søndag'] };
const TIMES = ['17:00', '19:00', '21:00'];

const T = {
  en: {
    name: 'Fjordkanten restaurant',
    nav: 'Fjordkanten',
    about: 'About us',
    aboutText: 'Fjordkanten is a small restaurant by the quay in Fjordby. We cook with fish from the fjord and vegetables from the farms nearby.',
    img: 'The dining room at Fjordkanten: six tables by large windows facing the fjord.',
    hours: 'Opening hours',
    hoursCaption: 'Opening hours this week',
    day: 'Day',
    open: 'Open',
    hoursRows: [
      ['Monday', 'Closed'],
      ['Tuesday', '16 to 22'],
      ['Wednesday', '16 to 22'],
      ['Thursday', '16 to 22'],
      ['Friday', '16 to 23'],
      ['Saturday', '13 to 23'],
      ['Sunday', '13 to 20'],
    ],
    menu: 'Menu',
    menuGroups: [
      { title: 'Starters', items: ['Fish soup, 145 kr', 'Beetroot salad with goat cheese, vegetarian, 125 kr'] },
      { title: 'Main courses', items: ['Cod with butter sauce, 295 kr', 'Slow-cooked lamb, 325 kr', 'Mushroom risotto, vegetarian, 245 kr'] },
      { title: 'Desserts', items: ['Chocolate cake with hazelnuts, contains nuts, 115 kr', 'Rhubarb sorbet, 95 kr'] },
    ],
    faq: 'Questions and answers',
    faqItems: [
      ['Do you take allergies into account?', 'Yes. Write it in your booking, and the chef will tell you what you can eat.'],
      ['Can we bring a dog?', 'Yes, in the outdoor seating area.'],
      ['How long do you hold the table?', 'For 15 minutes after the time you booked.'],
    ],
    book: 'Book a table',
    dayLegend: 'Day',
    dayError: 'Choose a day.',
    timeLegend: 'Time',
    timeError: 'Choose a time.',
    guests: 'Number of guests',
    choose: 'Choose',
    guestsError: 'Choose how many you are.',
    yourName: 'Your name',
    nameError: 'Enter your name.',
    phone: 'Mobile number',
    phoneHint: '8 digits. We send you a text message to confirm.',
    phoneError: 'Enter a mobile number with 8 digits.',
    wishes: 'Allergies and other wishes (optional)',
    outside: 'We would like to sit outside',
    submit: 'Continue',
    confirmTitle: 'Is this right?',
    change: 'Change',
    confirm: 'Book the table',
    guestsN: (n: string) => `${n} ${n === '1' ? 'guest' : 'guests'}`,
    at: (d: string, t: string) => `${d} at ${t}`,
    wishesLabel: 'Wishes',
    outsideYes: 'Outside if possible',
    booked: 'The table is booked',
    bookedText: (name: string, d: string, t: string, n: string) =>
      `Thank you, ${name}. You have a table for ${n} on ${d} at ${t}. We have sent you a text message.`,
    again: 'Make a new booking',
  },
  nb: {
    name: 'Restaurant Fjordkanten',
    nav: 'Fjordkanten',
    about: 'Om oss',
    aboutText: 'Fjordkanten er en liten restaurant ved kaia i Fjordby. Vi lager mat av fisk fra fjorden og grønnsaker fra gårdene rundt.',
    img: 'Spisesalen på Fjordkanten: seks bord ved store vinduer ut mot fjorden.',
    hours: 'Åpningstider',
    hoursCaption: 'Åpningstider denne uka',
    day: 'Dag',
    open: 'Åpent',
    hoursRows: [
      ['Mandag', 'Stengt'],
      ['Tirsdag', '16 til 22'],
      ['Onsdag', '16 til 22'],
      ['Torsdag', '16 til 22'],
      ['Fredag', '16 til 23'],
      ['Lørdag', '13 til 23'],
      ['Søndag', '13 til 20'],
    ],
    menu: 'Meny',
    menuGroups: [
      { title: 'Forretter', items: ['Fiskesuppe, 145 kr', 'Rødbetsalat med geitost, vegetar, 125 kr'] },
      { title: 'Hovedretter', items: ['Torsk med smørsaus, 295 kr', 'Langtidsstekt lam, 325 kr', 'Sopprisotto, vegetar, 245 kr'] },
      { title: 'Desserter', items: ['Sjokoladekake med hasselnøtter, inneholder nøtter, 115 kr', 'Rabarbrasorbet, 95 kr'] },
    ],
    faq: 'Spørsmål og svar',
    faqItems: [
      ['Tar dere hensyn til allergier?', 'Ja. Skriv det i bestillingen, så forteller kokken hva du kan spise.'],
      ['Kan vi ta med hund?', 'Ja, på uteserveringen.'],
      ['Hvor lenge holder dere bordet?', 'I 15 minutter etter tiden du har bestilt.'],
    ],
    book: 'Bestill bord',
    dayLegend: 'Dag',
    dayError: 'Velg en dag.',
    timeLegend: 'Klokkeslett',
    timeError: 'Velg et klokkeslett.',
    guests: 'Antall gjester',
    choose: 'Velg',
    guestsError: 'Velg hvor mange dere er.',
    yourName: 'Navnet ditt',
    nameError: 'Skriv navnet ditt.',
    phone: 'Mobilnummer',
    phoneHint: '8 siffer. Vi sender deg en SMS som bekreftelse.',
    phoneError: 'Skriv et mobilnummer med 8 siffer.',
    wishes: 'Allergier og andre ønsker (valgfritt)',
    outside: 'Vi vil gjerne sitte ute',
    submit: 'Gå videre',
    confirmTitle: 'Stemmer dette?',
    change: 'Endre',
    confirm: 'Bestill bordet',
    guestsN: (n: string) => `${n} ${n === '1' ? 'gjest' : 'gjester'}`,
    at: (d: string, t: string) => `${d} klokka ${t}`,
    wishesLabel: 'Ønsker',
    outsideYes: 'Ute hvis det går',
    booked: 'Bordet er bestilt',
    bookedText: (name: string, d: string, t: string, n: string) =>
      `Takk, ${name}. Du har bord til ${n} ${n === '1' ? 'person' : 'personer'} ${d.toLowerCase()} klokka ${t}. Vi har sendt deg en SMS.`,
    again: 'Lag en ny bestilling',
  },
};

type Field = 'day' | 'time' | 'guests' | 'name' | 'phone';

function BookingForm() {
  const lang = useLang();
  const t = T[lang];
  const id = useId();
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [wishes, setWishes] = useState('');
  const [outside, setOutside] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Field, boolean>>>({});
  const [booked, setBooked] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const submit = useRef<HTMLButtonElement>(null);
  const bookedHeading = useRef<HTMLHeadingElement>(null);
  const firstOf: Record<Field, string> = {
    day: `${id}-day-0`,
    time: `${id}-time-0`,
    guests: `${id}-guests`,
    name: `${id}-name`,
    phone: `${id}-phone`,
  };

  useEffect(() => {
    if (booked) bookedHeading.current?.focus();
  }, [booked]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<Field, boolean>> = {
      day: !day,
      time: !time,
      guests: !guests,
      name: !name.trim(),
      phone: !/^\d{8}$/.test(phone.replace(/\s/g, '')),
    };
    setErrors(next);
    const first = (Object.keys(firstOf) as Field[]).find((f) => next[f]);
    if (first) document.getElementById(firstOf[first])?.focus();
    else dialog.current?.showModal();
  };

  const change = () => {
    dialog.current?.close();
    submit.current?.focus();
  };

  const confirm = () => {
    dialog.current?.close();
    setBooked(true);
  };

  if (booked) {
    return (
      <div className="box">
        <h4 ref={bookedHeading} tabIndex={-1}>
          {t.booked}
        </h4>
        <p>{t.bookedText(name.trim(), day, time, guests)}</p>
        <p>
          <button
            type="button"
            className="secondary"
            onClick={() => {
              setBooked(false);
              setDay('');
              setTime('');
              setGuests('');
              setName('');
              setPhone('');
              setWishes('');
              setOutside(false);
              setErrors({});
            }}
          >
            {t.again}
          </button>
        </p>
      </div>
    );
  }

  const err = (f: Field, text: string) =>
    errors[f] ? (
      <span className="error" id={`${id}-${f}-error`}>
        {text}
      </span>
    ) : null;

  return (
    <>
      <form onSubmit={onSubmit} noValidate>
        <fieldset>
          {/* Feilmeldingen står i legend, så den leses sammen med hvert valg. */}
          <legend>
            {t.dayLegend} {err('day', t.dayError)}
          </legend>
          {DAYS[lang].map((d, i) => (
            <label className="check" key={d}>
              <input type="radio" id={`${id}-day-${i}`} name={`${id}-day`} checked={day === d} onChange={() => setDay(d)} /> {d}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>
            {t.timeLegend} {err('time', t.timeError)}
          </legend>
          {TIMES.map((tm, i) => (
            <label className="check" key={tm}>
              <input type="radio" id={`${id}-time-${i}`} name={`${id}-time`} checked={time === tm} onChange={() => setTime(tm)} /> {tm}
            </label>
          ))}
        </fieldset>

        <label htmlFor={`${id}-guests`}>{t.guests}</label>
        <select
          id={`${id}-guests`}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? `${id}-guests-error` : undefined}
        >
          <option value="">{t.choose}</option>
          {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <p className="error">{err('guests', t.guestsError)}</p>

        <label htmlFor={`${id}-name`}>{t.yourName}</label>
        <input
          type="text"
          id={`${id}-name`}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
        />
        <p className="error">{err('name', t.nameError)}</p>

        <label htmlFor={`${id}-phone`}>{t.phone}</label>
        <p className="hint" id={`${id}-phone-hint`}>
          {t.phoneHint}
        </p>
        <input
          type="tel"
          id={`${id}-phone`}
          inputMode="numeric"
          autoComplete="tel-national"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={`${id}-phone-hint${errors.phone ? ` ${id}-phone-error` : ''}`}
        />
        <p className="error">{err('phone', t.phoneError)}</p>

        <label htmlFor={`${id}-wishes`}>{t.wishes}</label>
        <textarea id={`${id}-wishes`} rows={3} value={wishes} onChange={(e) => setWishes(e.target.value)} />

        <label className="check">
          <input type="checkbox" checked={outside} onChange={(e) => setOutside(e.target.checked)} /> {t.outside}
        </label>
        <p>
          <button type="submit" ref={submit}>
            {t.submit}
          </button>
        </p>
      </form>

      <dialog
        ref={dialog}
        aria-labelledby={`${id}-confirm`}
        onCancel={(e) => {
          e.preventDefault();
          change();
        }}
      >
        <h4 id={`${id}-confirm`}>{t.confirmTitle}</h4>
        <ul>
          <li>{t.at(day, time)}</li>
          <li>{t.guestsN(guests)}</li>
          <li>{name.trim()}</li>
          <li>{phone}</li>
          {wishes.trim() && (
            <li>
              {t.wishesLabel}: {wishes.trim()}
            </li>
          )}
          {outside && <li>{t.outsideYes}</li>}
        </ul>
        <p className="actions">
          <button type="button" className="secondary" onClick={change}>
            {t.change}
          </button>
          <button type="button" onClick={confirm}>
            {t.confirm}
          </button>
        </p>
      </dialog>
    </>
  );
}

/** Hele restaurantsiden. Navigasjonen øverst er et eget landemerke med navn. */
export function Restaurant({ image }: { image: string }) {
  const t = T[useLang()];
  const ids = { hours: 'r-hours', menu: 'r-menu', faq: 'r-faq', book: 'r-book' };
  return (
    <div className="restaurant">
      <nav aria-label={t.nav}>
        <ul className="inline">
          <li>
            <InPage target={ids.hours}>{t.hours}</InPage>
          </li>
          <li>
            <InPage target={ids.menu}>{t.menu}</InPage>
          </li>
          <li>
            <InPage target={ids.faq}>{t.faq}</InPage>
          </li>
          <li>
            <InPage target={ids.book}>{t.book}</InPage>
          </li>
        </ul>
      </nav>

      <h3>{t.about}</h3>
      <p>{t.aboutText}</p>
      <img src={image} alt={t.img} width="320" height="180" />

      <h3 id={ids.hours}>{t.hours}</h3>
      <table>
        <caption>{t.hoursCaption}</caption>
        <thead>
          <tr>
            <th scope="col">{t.day}</th>
            <th scope="col">{t.open}</th>
          </tr>
        </thead>
        <tbody>
          {t.hoursRows.map(([d, o]) => (
            <tr key={d}>
              <th scope="row">{d}</th>
              <td>{o}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 id={ids.menu}>{t.menu}</h3>
      {t.menuGroups.map((g) => (
        <div key={g.title}>
          <h4>{g.title}</h4>
          <ul>
            {g.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 id={ids.faq}>{t.faq}</h3>
      {t.faqItems.map(([q, a]) => (
        <Disclosure key={q} title={q} level={4}>
          <p>{a}</p>
        </Disclosure>
      ))}

      <h3 id={ids.book}>{t.book}</h3>
      <BookingForm />
    </div>
  );
}
