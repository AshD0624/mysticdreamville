# Mystic Dreamville website

Mobile-first static villa website. The deployable site lives in `dist/` and is hosted with Sites.

## Preview

Run `python3 -m http.server 4173 --directory dist` from this directory, then open `http://localhost:4173`.

## Content

- `dist/index.html`: page content, tour embed, Google Maps embed and contact links.
- `dist/styles.css` and `dist/sections.css`: responsive styling.
- `dist/app.js`: gallery, amenity list, review controls and the eight-second hero title timer.
- `dist/reviews.json`: all 13 supplied Google review texts and individual ratings. No aggregate rating is inferred.
- `dist/images/`: optimized copies of the supplied property photos and original transparent logo.

The property video is intentionally omitted at the owner's request on 14 September 2026. No Drive sharing permissions were changed.

GitHub destination: https://github.com/AshD0624/mysticdreamville

External embeds depend on their respective providers. The virtual tour has a direct link and a photographic background; the map has a directions link. WhatsApp opens an enquiry and does not confirm a booking.
