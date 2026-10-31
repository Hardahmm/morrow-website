# Morrow design-selection studio

Phase 4 browser delivery. Open the deployed studio at https://hardahmm.github.io/morrow-website/design-lab/ . This is a direction-selection prototype for the Kotlin Android product.

## Explore

1. Choose Serenity, Form & color, Cozy Home, Quiet Gallery or Dreamscape.
2. Browse a collection, open an artwork, favorite it and choose **Make it mine**.
3. In Studio, try Year, Month or Custom dates. Show/hide layers, change fonts and positions, adjust artwork fitting and preview a manual live/depth concept.
4. Save a design, reopen it in Saved and select designs for a mock daily collection.
5. Compare two independently interactive previews. Switch light/dark/system appearance or use Roomy preview.
6. **Choose [direction]** saves a reversible local preference and downloads `morrow-design-choice.json`. Share that file or describe the preferred theme in the chat before Android implementation.

## Real actions and prototype boundaries

PNG and scene-recipe exports create actual downloadable files. PNGs contain static calendar artwork and omit both the live clock and system/launcher preview placeholders. Recipe import validates the supported scene structure, bounds numerical values and rejects malformed files. The demo date is fixed to 31 October 2026 for repeatable comparison; it is not a working background scheduler.

Favorite artwork and explicitly saved included-art designs use concept-specific browser localStorage. Saved scenes may include entered text. A personal photo is decoded locally for the current visit; it is not uploaded or persisted across visits. Personal-photo recipes omit the photo, and exports may contain personal text. Reset a concept in its Settings; clear the chosen direction on the selection page. Clearing site data removes all local records.

Android wallpaper application, calendar permissions, precise alarms and notifications are clearly marked demonstrations. No Android permission is requested, no background task runs, and no device wallpaper changes. Live clock/depth is a labelled manual browser concept, not proof of Android capability or device compatibility. No payment, account, analytics or advertising is enabled.

## Implementation

Framework-free HTML/CSS/ES modules. `lab.js` owns direction comparison and choice; `app.js` owns the isolated interactive app model. `data.js` contains the five briefs and twelve approved sample artworks. `app.css` defines semantic direction tokens with light/dark roles and rem typography. The artwork sample is intentionally a subset of the master collection, kept separate from production app code. `asset-provenance.json` records prompts, source-library IDs and hashes for the twelve generated artworks plus the original mascot.

Serve the parent `website/` directory over HTTP, for example `python -m http.server 8772 --directory website`, then open http://localhost:8772/design-lab/ . ES modules require HTTP; opening the HTML using `file://` is unsupported.

## Verification

Browser checks and evidence live outside the public site in `output/design-lab-qa/`; independent review evidence is in `output/design-lab-review/`. Reproducible local runners are `tmp/test-design-lab.cjs` and `tmp/test-design-lab-extended.cjs` (local Playwright path and Edge executable configured for this workstation).

Exercised all five directions: core home/collection/detail light/dark screens, favorites, calendar periods, leap-month and invalid-date recovery, font/placement, task visibility, save/reopen/reload, PNG and recipe downloads/import, rejected bad recipes, deletion confirmation, rotation, private-photo session lifetime, denied permission example, onboarding and dialog Escape/focus. Checked 320px with 200% text plus desktop layouts. Token-pair contrast checks cover solid UI colors; they do not certify arbitrary user-selected artwork/colors or screen-reader usability. The generic installed design-kit gate expects its own example/token repository and could not run as a project gate here; this is disclosed in the QA evidence, with no kit certification claimed. Browser QA does not certify the Android application.
