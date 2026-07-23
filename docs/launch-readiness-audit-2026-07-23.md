# Launch Readiness Audit — July 23, 2026

## Automated results

- Review build: 27 rendered HTML pages, zero SEO errors.
- Formal-domain preflight: 27 rendered HTML pages, zero SEO errors.
- Internal links, assets, fragments, and lowercase paths: zero errors in both builds.
- Structural accessibility audit: zero errors.
- The one accessibility warning is limited to two intentional, noindex legacy redirect pages (`/prolife/` and `/vocations/`) sharing the same redirect-page title.
- MinistryPlatform event, event-details, and event-checkout URLs render successfully.
- Event-details and event-checkout remain hidden from navigation, excluded from the sitemap, and marked `noindex`.

## Performance improvements completed

- The principal visual image is preloaded on the homepage, New Here, and image-header pages.
- Seven large stock photographs were resized to a 1400-pixel maximum.
- Parish-owned photographs were not resized or recompressed.
- The static image library was reduced from approximately 6.0 MB to 3.8 MB.
- Rendered content images retain explicit width, height, lazy-loading, and asynchronous-decoding attributes.

## Link corrections completed

- Removed the defunct My Friend Magazine link.
- Updated the Blessed Stanley Rother Shrine link to HTTPS.
- Updated all three Apple Maps links to HTTPS.
- Verified all internal destinations and downloadable files.
- External destinations were checked. Several official Catholic websites reject automated requests with `403` responses; those are bot-protection responses rather than proof that their browser links are broken.

## Items intentionally remaining

1. Receive and install Angela's approved MinistryPlatform widget code.
2. Replace the three temporary parish-building photographs when the approved images arrive.
3. Confirm current schedules, notices, and bulletin information immediately before launch.
4. Complete phone and desktop visual checks after the final widgets and photographs are installed.
5. Perform the formal-domain cutover no earlier than July 30, using `docs/july-30-launch-runbook.md`.
6. Run PageSpeed Insights again after `triparishok.org` is live and its production cache has settled.
7. Complete Google Business Profile corrections for all three parishes after the formal parish-page URLs are live.

