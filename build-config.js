// build-config.js — generates config.js from environment variables at build time
// Run by Vercel/Netlify before deploy. Output is gitignored, never committed.
const fs = require('fs');

const webAppUrl = process.env.WEB_APP_URL || '';
const siteKey = process.env.TURNSTILE_SITE_KEY || '';

if (!webAppUrl || !siteKey) {
  console.warn('WEB_APP_URL or TURNSTILE_SITE_KEY env var missing — check dashboard settings');
}

const content = `// AUTO-GENERATED at build time — do not edit or commit
window.APP_CONFIG = {
  WEB_APP_URL: "${webAppUrl}",
  TURNSTILE_SITE_KEY: "${siteKey}"
};
`;

fs.writeFileSync('config.js', content);
console.log('config.js generated');
