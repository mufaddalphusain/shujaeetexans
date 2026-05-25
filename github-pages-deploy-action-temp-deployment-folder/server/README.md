# Demo server

This is a tiny Express demo server to receive contact form submissions and serve the static site locally.

Install and run:

```bash
cd server
npm install
npm start
```

The server will run on `http://localhost:3000` and serve the site from the parent folder. The `/contact` endpoint accepts POST requests and logs them to the console.
