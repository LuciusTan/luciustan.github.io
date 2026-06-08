# Content audit

Last checked: 2026-06-09

## Summary

- 19 posts build successfully with Hexo 8.1.2 and Butterfly 5.5.4.
- The home page, a representative article, gallery, music page, and movie
  page were checked in desktop and mobile layouts.
- Local site images such as the avatar, favicon, loading placeholder, default
  cover, and home banner are stored under `source/image/`.
- Comments, chat, analytics, automatic music playback, and PWA are disabled.

## External images

Historical article images are still hosted by:

- `z3.ax1x.com`
- `i.loli.net`

The images rendered in browser checks on 2026-06-09. Direct automated downloads
from `z3.ax1x.com` were reset by the host, so those images have not yet been
migrated into the repository.

Future content work should copy the original images into `source/images/posts/`
and replace the remote Markdown URLs with local paths.

## Compatibility note

The invalid post date `2020-05-04 90:00:00` was corrected while preserving its
existing public permalink:

`/2020/05/07/image_verification_code/`
