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
