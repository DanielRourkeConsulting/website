# rourkeconsulting.co.uk

Static rebuild of the Daniel Rourke Consulting site (originally on Squarespace), for hosting on GitHub Pages.

## Structure

- `index.html` — Home
- `immigration-advice.html` — Immigration Advice (for individuals)
- `about.html` — Consultancy Services (for NGOs / Legal Aid providers)
- `assets/css/style.css` — all styling
- `assets/js/main.js` — mobile nav toggle + enquiry form submission handling
- `assets/images/` — site images
- `CNAME` — custom domain for GitHub Pages (`www.rourkeconsulting.co.uk`)

## Enquiry forms (Formspree)

The two enquiry forms (`immigration-advice.html` and `about.html`) post to [Formspree](https://formspree.io). Before going live:

1. Create a free Formspree account and a form for each page (or reuse one form for both — the hidden `form_name` field identifies which page a submission came from).
2. Replace `YOUR_FORM_ID` in the `action="https://formspree.io/f/YOUR_FORM_ID"` attribute of each `<form class="enquiry-form">` with your real form ID.
3. In Formspree, set the destination email to `daniel.rourke@lawhivelegal.com` (or wherever enquiries should land).

Until the form IDs are set, submitting a form shows a message asking the visitor to email directly instead — it won't error silently.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In the repo settings, under **Pages**, set the source to the `main` branch, root folder.
3. Because a `CNAME` file is included, GitHub Pages will serve the site at `www.rourkeconsulting.co.uk` once your DNS is pointed at GitHub Pages (A/ALIAS records to GitHub's IPs, and a CNAME for the `www` subdomain — see [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
4. Update your domain registrar's DNS once ready to cut over from Squarespace.

## Local preview

Just open `index.html` in a browser, or serve the folder with any static file server, e.g.:

```bash
python3 -m http.server 8000
```
