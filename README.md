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

## Enquiry forms (Formspark)

The two enquiry forms post to [Formspark](https://formspark.io):

- `immigration-advice.html` → `https://submit-form.com/rAv71weBW`
- `about.html` → `https://submit-form.com/s6k4mG76z`

Submissions land wherever each Formspark form is configured to notify (check the Formspark dashboard for each form's destination email). If you ever need to change the endpoint, just edit the `action` attribute on the `<form class="enquiry-form">` in the relevant page.

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
