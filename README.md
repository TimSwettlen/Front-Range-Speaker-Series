## v1.2

Fixed the desktop hero layout so it remains wide and balanced on large/ultrawide monitors.

# Front Range Professional Speaker Series website

A static, responsive landing page designed for GitHub Pages.

## Files
- `index.html` — page content and structure
- `styles.css` — visual design
- `script.js` — navigation and registration-button behavior
- `site-config.js` — registration links and external URLs
- `assets/` — local images used by the page
- `.nojekyll` — tells GitHub Pages to serve the site as plain static files

## Connect registration links
Open `site-config.js` and replace the empty strings with your Google Form links:

```js
mainRegistrationUrl: "https://docs.google.com/forms/...",
registrationUrls: {
  marvell: "https://docs.google.com/forms/...prefilled-for-marvell...",
  intel: "https://docs.google.com/forms/...prefilled-for-intel...",
  panasonic: "https://docs.google.com/forms/...prefilled-for-panasonic...",
  student: "https://docs.google.com/forms/...prefilled-for-student-event..."
}
```

The speaker-specific URLs can all point to the same Google Form using pre-filled form links.

## Publish with GitHub Pages
1. Create a GitHub repository (for example `front-range-speaker-series`).
2. Upload all files in this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save. GitHub will provide the public site URL after deployment.

## Updating events
Speaker details are currently written directly in `index.html`. Search for the `speaker-card` sections to edit Fall events and `spring-list` for Spring preview events.

## Current course tracking displayed publicly
- ECEN 1100 — Exploring ECE — Bogatin
- ECEN 1400 — Intro to Digital/Analog Electronics — Piket-May
- ECEN 3/5730 — Practical PCB Design & Manufacture — Swettlen

The site intentionally states only that attendance/no-show records *may* be shared with instructors and that course-credit/no-show policy is set by each instructor.


## v1.1 updates
- Replaced text-only company labels with consistent logo panels for Marvell, Intel, Panasonic, and AMD.
- Added speaker profile links for Chris Fieldsend, Darren Hitchcock, and Dean Gonzales.
- Speaker/company links open in a new tab.
- Judd Gerber remains unlinked until a verified profile URL is supplied.

### Updating the existing GitHub Pages site
Upload/replace `index.html` and `styles.css` in the repository root. No changes to `site-config.js` or `script.js` are required for this update.

## v1.12 update
Chris Fieldsend's Sept. 10 event is archived with event photos and registration removed.


## v1.13 update
- Added Judd Gerber headshot to the Oct. 8 event page.
- Kept the speaker bio placeholder until an approved bio is available.


## v1.15 update
- Added Chris Fieldsend's presentation PDF to the Sept. 10 event archive.
- Added a presentation-cover preview and direct PDF link on Chris's event page.
- Presentation file is stored under `assets/presentations/`.


## v1.16 update
- Added Judd Gerber's approved speaker bio and full Intel title to his Oct. 8 event page.
- Updated the homepage Judd link label to “Speaker bio + talk details.”


## v1.17 — Judd Gerber event archive
- Converted the Oct. 8 Intel event from upcoming registration to a past-event recap.
- Added a curated seven-photo event gallery (six user-designated best photos plus one additional audience-wide image).
- Added Judd's final presentation PDF and cover thumbnail.
- Added a recording placeholder for `Chiplets What Why and Where.mp4`; the large MP4 is intentionally not bundled.
- Removed the obsolete Intel registration link from the homepage and `site-config.js`.


## v1.18 update
- Added embedded YouTube recording to Judd Gerber event page.
- Recording: https://youtu.be/AkQ-3yPgVKY
