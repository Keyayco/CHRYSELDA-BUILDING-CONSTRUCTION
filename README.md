# Chryselda Building Construction — static website

A responsive, five-page static website for Chryselda Building Construction in Mbombela, Mpumalanga. The deliverable in this folder uses plain HTML, CSS and vanilla JavaScript—no build step, framework, backend, or package installation is required.

## Files

- `index.html` — homepage
- `about.html` — company introduction and values
- `services.html` — proposed service categories (confirm with the business)
- `projects.html` — illustrative image gallery, not a claimed company portfolio
- `contact.html` — phone, WhatsApp, address and validated enquiry form
- `styles.css`, `script.js` — shared responsive styles and navigation/form behavior
- `assets/` — locally stored hero photograph

## Preview locally

Open `index.html` in a browser, or serve this folder with any static file server. The website itself has no runtime dependencies. Google Fonts and the gallery photographs load from their image/font hosts; the main hero image is included locally.

## Deploy with GitHub Pages

1. Upload or push the website files and `assets/` directory to the root of a GitHub repository (or place them in a directory you select as the Pages publishing source).
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch and `/ (root)` (or the website directory), then save.
4. Allow GitHub Pages to publish. `index.html` is the entry page; the other pages and their links are relative, so they work on a project subpath too.

A custom domain and HTTPS can be configured in the same Pages settings when available.

## Enquiries and business details

The contact form validates in the browser and prepares a WhatsApp message for `+27 87 095 9230`; the visitor reviews and sends it in WhatsApp. No information is submitted to or stored by this static site. Telephone and address details are shown as supplied. No email address, company history, certifications, credentials or completed project claims have been invented.

Service headings are clearly identified as proposed categories pending confirmation. All project/gallery photographs are illustrative inspiration only and are not represented as Chryselda's completed work.

## Images and accessibility

The hero image is local under `assets/`. Gallery imagery is loaded from Unsplash with descriptive alternative text and lazy loading below the fold. The mobile navigation supports keyboard dismissal, and the enquiry form uses native validation and labelled controls.
