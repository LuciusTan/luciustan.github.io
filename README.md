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
