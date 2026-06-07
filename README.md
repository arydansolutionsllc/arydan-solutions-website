# Arydan Solutions LLC Website

Static website for Arydan Solutions LLC, an AI company. Built for GitHub Pages.

## Folder Structure

```text
arydan-solutions-website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── ai-core.svg
│   └── README.txt
└── pages/
    ├── about.html
    ├── services.html
    └── contact.html
```

## How to Host on GitHub Pages

1. Create a new GitHub repository, for example: `arydan-solutions-website`.
2. Upload all files and folders from this project.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save. GitHub will give you a live website URL.

## Customize Before Publishing

- Replace `contact@arydansolutions.com` in `pages/contact.html` with your real email.
- Replace the Formspree action URL in `pages/contact.html` with your own form endpoint.
- Replace or add images inside the `images/` folder.
- Edit text in `index.html`, `pages/about.html`, and `pages/services.html` as needed.
