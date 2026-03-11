# Builder.io / Cursor cleanup (professional portfolio)

So the repo and the live site don’t advertise that Builder.io or Cursor was used.

## What was changed

1. **`.env`** — Removed `NEXT_PUBLIC_BUILDER_API_KEY`. It wasn’t used anywhere in the app, so it would never appear in the browser bundle. Removing it avoids any future use and keeps the key out of the repo.

2. **`.vscode/settings.json`** — Removed all `builder.*` settings (serverUrl, command, runDevServer, autoDetectDevServer, launchType). Those were only for the Builder extension in the editor; they’re not needed for the built site and were an obvious “Builder” fingerprint in the repo.

3. **`.gitignore`** — Added `builder.config.json` and `.builderrc` so they’re no longer committed. They were untracked with `git rm --cached`; the files stay on your machine for local Builder use but won’t be in the repo from here on.

4. **Tracking** — `builder.config.json` and `.builderrc` are no longer tracked by Git. They still exist locally; add them to `.gitignore` in any clone if you recreate them.

## What was already fine

- **Browser / dev tools:** No Builder.io SDK, no `data-builder` attributes, no Builder scripts in the app. The built site doesn’t expose Builder.
- **“cursor” in code:** All matches are normal CSS (e.g. `cursor: pointer`) or config, not Cursor the IDE.
- **package.json:** No Builder.io (or Cursor) dependency.

## Repo / docs that still mention Builder

- **BUILDER_IO_MOCKUP_PROMPTS.md** — Prompts for mockups. Rename or delete if you don’t want “Builder” in the repo.
- **IMAGE_CREATION_PLAN.md** — Mentions “Builder.io” as an option. Edit or delete if you want it gone.
- **Git history** — Old commits still contain `.vscode/settings.json` and the builder config files. To purge them from history you’d need a rewrite (e.g. `git filter-branch` or BFG); only do that if you’re sure and have backups.

## Local Builder use

- Keep `builder.config.json` and `.builderrc` only locally (they’re gitignored).
- Don’t re-add `NEXT_PUBLIC_BUILDER_API_KEY` to `.env` if you want the production build to stay free of Builder references.
- Re-add the `builder.*` keys to `.vscode/settings.json` locally if you want the Builder extension to work again; just don’t commit that file (or add `.vscode/settings.json` to `.gitignore` for the builder block).
