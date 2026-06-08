# L-Zone

Personal blog built with Hexo and the Butterfly theme.

## Project status

This repository contains the recovered Hexo source. The previous generated
GitHub Pages site is preserved separately in `.deploy_git` and is not part of
the source repository.

The recovery baseline is commit `08e95a5`. Deployment remains disabled until
the dependency upgrade and local verification are complete.

## Local development

```bash
npm install
npm run server
```

The local site is served at `http://localhost:4000`.

## Build

```bash
npm run build
```

Generated files are written to `public/` and are not committed.

## Deployment

The repository includes a GitHub Pages workflow at
`.github/workflows/pages.yml`. It builds the site from the `main` branch and
deploys the generated `public/` directory.

Before the first deployment:

1. Push this source repository to the `main` branch.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Run the workflow manually or push a new commit.

The site currently uses `https://luciustan.github.io` without a custom domain.
