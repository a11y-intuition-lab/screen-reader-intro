// Interaktive elementer i øvingsområdene. Alt som skal leses opp, finnes i DOM fra start.
import { useId, useRef, useState, type FormEvent, type MouseEvent, type ReactNode } from 'react';
import { ui } from '../content/ui';
import { useLang } from '../lang';

/** Et navngitt område (landemerke «region») med øvingsinnhold. */
export function Practice({ title, children }: { title: string; children: ReactNode }) {
  const id = useId();
  return (
    <section className="practice" aria-labelledby={id}>
      <h2 id={id}>
        {ui[useLang()].practice}: {title}
      </h2>
      {children}
    </section>
  );
}

/** Knapp som gir en statusmelding. Statusregionen er tom fra start og fylles ved klikk. */
export function StatusButton({ message, children }: { message: string; children: ReactNode }) {
  const [text, setText] = useState('');
  const onClick = () => {
    setText('');
    setTimeout(() => setText(message), 100);
  };
  return (
    <>
      <p>
        <button type="button" onClick={onClick}>
          {children}
        </button>
      </p>
      <p role="status">{text}</p>
    </>
  );
}

/** Av/på-knapp: skjermleseren sier om den er på. */
export function ToggleButton({ children }: { children: ReactNode }) {
  const [pressed, setPressed] = useState(false);
  return (
    <p>
      <button type="button" aria-pressed={pressed} onClick={() => setPressed(!pressed)}>
        {children}
      </button>
    </p>
  );
}

/** Stille endring: teksten endres, men skjermleseren får ikke beskjed. */
export function SilentButton({ message, initial, children }: { message: string; initial: string; children: ReactNode }) {
  const lang = useLang();
  const [text, setText] = useState(initial);
  const onClick = () => {
    const time = new Date().toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setText(`${message} ${time}`);
  };
  return (
    <>
      <p>
        <button type="button" onClick={onClick}>
          {children}
        </button>
      </p>
      <p>{text}</p>
    </>
  );
}

/** Lenke til et sted på samme skjerm. Flytter fokus uten å endre ruten. */
export function InPage({ target, children }: { target: string; children: ReactNode }) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const el = document.getElementById(target);
    if (!el) return;
    el.tabIndex = -1;
    el.focus();
  };
  return (
    <a href={window.location.hash} onClick={onClick}>
      {children}
    </a>
  );
}

const FORM = {
  en: {
    heading: 'Sign up for the book talk',
    name: 'Name',
    nameError: 'Enter your name.',
    email: 'Email',
    emailHint: 'We only use it to send you a reminder.',
    emailError: 'Enter your email address.',
    remind: 'Send me a reminder the day before',
    submit: 'Sign up',
    done: 'Thank you, you are signed up for the book talk.',
  },
  nb: {
    heading: 'Meld deg på bokpraten',
    name: 'Navn',
    nameError: 'Skriv navnet ditt.',
    email: 'E-post',
    emailHint: 'Vi bruker den bare til å sende deg en påminnelse.',
    emailError: 'Skriv e-postadressen din.',
    remind: 'Send meg en påminnelse dagen før',
    submit: 'Meld meg på',
    done: 'Takk, du er meldt på bokpraten.',
  },
};

/** Påmeldingsskjema: feilmeldingen kobles til feltet, og fokus flyttes til første feil. */
export function PracticeForm() {
  const t = FORM[useLang()];
  const id = useId();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState({ name: false, email: false });
  const [status, setStatus] = useState('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = { name: !nameRef.current?.value.trim(), email: !emailRef.current?.value.trim() };
    setErrors(next);
    if (next.name) nameRef.current?.focus();
    else if (next.email) emailRef.current?.focus();
    setStatus(next.name || next.email ? '' : t.done);
  };

  return (
    <>
      <h3>{t.heading}</h3>
      <form onSubmit={onSubmit} noValidate>
        <label htmlFor={`${id}-name`}>{t.name}</label>
        <input type="text" id={`${id}-name`} ref={nameRef} required aria-invalid={errors.name} aria-describedby={`${id}-name-error`} />
        <p className="error" id={`${id}-name-error`}>
          {errors.name ? t.nameError : ''}
        </p>
        <label htmlFor={`${id}-email`}>{t.email}</label>
        <p className="hint" id={`${id}-email-hint`}>
          {t.emailHint}
        </p>
        <input
          type="email"
          id={`${id}-email`}
          ref={emailRef}
          required
          aria-invalid={errors.email}
          aria-describedby={`${id}-email-hint ${id}-email-error`}
        />
        <p className="error" id={`${id}-email-error`}>
          {errors.email ? t.emailError : ''}
        </p>
        <label className="check">
          <input type="checkbox" /> {t.remind}
        </label>
        <p>
          <button type="submit">{t.submit}</button>
        </p>
      </form>
      <p role="status">{status}</p>
    </>
  );
}

/** Ikon som bare er pynt. Skjermleseren hopper over det. */
function ShareIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="24" height="24">
      <path
        d="M18 16a3 3 0 0 0-2.4 1.2l-6.7-3.4a3 3 0 0 0 0-1.6l6.7-3.4A3 3 0 1 0 15 7l-6.7 3.4a3 3 0 1 0 0 3.2L15 17a3 3 0 1 0 3-1z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Ikonknapp. Med label får den et navn; uten blir den bare «knapp». */
export function IconButton({ label }: { label?: string }) {
  return (
    <button type="button" className="icon" aria-label={label}>
      <ShareIcon />
    </button>
  );
}

/** Vis mer: knappen sier om innholdet er skjult eller utvidet. */
export function Disclosure({ title, children }: { title: string; children: ReactNode }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  return (
    <div className="disclosure">
      <h3>
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
          {title}
          <span className="sign" aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
      </h3>
      <div id={id} hidden={!open}>
        {children}
      </div>
    </div>
  );
}

const DIALOG = {
  en: { cancel: 'Cancel', confirm: 'Delete', cancelled: 'Nothing was deleted.', confirmed: 'The list is deleted.' },
  nb: { cancel: 'Avbryt', confirm: 'Slett', cancelled: 'Ingenting ble slettet.', confirmed: 'Lista er slettet.' },
};

/** Modal dialog. Fokus går inn i dialogen, og tilbake til knappen når den lukkes. */
export function PracticeDialog({ open: openLabel, title, children }: { open: string; title: string; children: ReactNode }) {
  const t = DIALOG[useLang()];
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [status, setStatus] = useState('');
  const close = (message: string) => {
    dialog.current?.close();
    opener.current?.focus();
    setStatus('');
    setTimeout(() => setStatus(message), 100);
  };
  return (
    <>
      <p>
        <button type="button" ref={opener} onClick={() => dialog.current?.showModal()}>
          {openLabel}
        </button>
      </p>
      <dialog ref={dialog} aria-labelledby={id} onCancel={(e) => { e.preventDefault(); close(t.cancelled); }}>
        <h3 id={id}>{title}</h3>
        {children}
        <p className="actions">
          <button type="button" className="secondary" onClick={() => close(t.cancelled)}>
            {t.cancel}
          </button>
          <button type="button" onClick={() => close(t.confirmed)}>
            {t.confirm}
          </button>
        </p>
      </dialog>
      <p role="status">{status}</p>
    </>
  );
}

const SEARCH = {
  en: { label: 'Search the catalogue', submit: 'Search', empty: 'Type something to search for.', hits: (n: number, q: string) => `${n} ${n === 1 ? 'hit' : 'hits'} for “${q}”.` },
  nb: { label: 'Søk i katalogen', submit: 'Søk', empty: 'Skriv noe å søke etter.', hits: (n: number, q: string) => `${n} treff på «${q}».` },
};

/** Søkefelt som gir antall treff som statusmelding. Treffene finnes i lista som sendes inn. */
export function SearchForm({ items }: { items: string[] }) {
  const t = SEARCH[useLang()];
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState('');
  const [hits, setHits] = useState<string[]>([]);
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const q = input.current?.value.trim() ?? '';
    const found = q ? items.filter((i) => i.toLowerCase().includes(q.toLowerCase())) : [];
    setHits(found);
    setStatus('');
    setTimeout(() => setStatus(q ? t.hits(found.length, q) : t.empty), 100);
  };
  return (
    <>
      <form role="search" onSubmit={onSubmit}>
        <label htmlFor={id}>{t.label}</label>
        <input type="search" id={id} ref={input} autoComplete="off" />
        <p>
          <button type="submit">{t.submit}</button>
        </p>
      </form>
      <p role="status">{status}</p>
      {hits.length > 0 && (
        <ul>
          {hits.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </>
  );
}
