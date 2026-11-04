# Screen Reader Intro

Part of [A11y Intuition Lab](https://a11y-intuition-lab.github.io) — *Play. Reflect. Design for everyone.*

A hands-on introduction to mobile screen readers — VoiceOver on iPhone and
TalkBack on Android — for sighted designers, developers and testers. The
introduction is read to you by your own screen reader, so you learn the real
tool while using it. One short step per screen, with Back, Menu and Next at the
bottom like an app, and it can be added to the home screen. Test pages with
good and bad examples follow later.

In English, with a Norwegian version under `#/nb`.

## How it is built

A single-page app with React and Vite, using hash routing so it works on
GitHub Pages without server configuration. Each step is one screen. When you
move to a new step, focus moves to the heading, so the screen reader reads the
step title instead of staying on the button you pressed. The app can be added to
the home screen and works offline once opened.

```sh
pnpm install
pnpm dev      # http://localhost:5173, add --port to change
pnpm build    # type check and build to dist/
```

The content lives in `src/content/en.tsx` and `src/content/nb.tsx`. Each part
has a stable `id` that is used in the URL (`#/iphone/find-your-way/3`), so
parts can be reordered by moving them in the `parts` list. Part numbers are
worked out from the order.

## Security

- pnpm only installs package versions that have been public for 7 days
  (`minimumReleaseAge` in `pnpm-workspace.yaml`), and dependency install scripts
  are disabled.
- Dependabot waits 7 days before proposing updates, 30 for major versions.
- GitHub Actions are pinned to commit SHAs, use `permissions: {}` by default,
  and are scanned with [zizmor](https://github.com/zizmorcore/zizmor)
  (`./zizmor.sh` runs it locally). CodeQL scans the code.

Served with GitHub Pages: <https://a11yintuition.org/screen-reader-intro/>
