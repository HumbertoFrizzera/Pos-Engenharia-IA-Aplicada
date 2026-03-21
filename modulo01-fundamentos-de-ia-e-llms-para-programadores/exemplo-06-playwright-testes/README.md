# Playwright tests (Chromium-only)

Local setup:

1) Install dev dependency:

```bash
npm i -D @playwright/test
```

2) Install Chromium browser binaries only:

```bash
npx playwright install --with-deps chromium
```

Run tests:

```bash
npm test
```

CI: The repository includes a GitHub Actions workflow that installs and runs Chromium only.
