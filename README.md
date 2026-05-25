# Shujaee Texans - Static Website

This folder contains a simple static website for the Shujaee Texans cricket team.

Files:
- `index.html` - Home page with photo gallery, sponsors, and 2026 leagues.
- `news.html`, `team.html`, `fixtures.html`, `shop.html`, `contact.html` - supporting pages.
- `styles.css` - site stylesheet.
- `scripts.js` - small JS for mobile nav and gallery lightbox.

To preview locally, open `index.html` in your browser or serve with a static server (e.g. `npx http-server`).

Deployment options:

- GitHub Pages (recommended):

	Initialize git, commit and push to a GitHub repo. The included GitHub Action will publish the site to GitHub Pages on push to `main`/`master`.

	Example commands:

	```bash
	git init
	git add .
	git commit -m "Initial site"
	git branch -M main
	git remote add origin <your-github-repo-url>
	git push -u origin main
	```

- Netlify: Drag-and-drop the site folder to Netlify or connect the repo; the contact form is Netlify-ready (it uses `data-netlify="true"`).

- Local demo server: An optional Express demo server is in the `server/` folder. Run it with:

	```bash
	cd server
	npm install
	npm start
	```

# shujaeetexans