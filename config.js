// config.example.js — copy this file to config.js and fill in real values.
// config.js is gitignored and must NEVER be committed.
// Only PUBLIC values belong here — the Turnstile Secret Key never goes in frontend code.

window.APP_CONFIG = {
  WEB_APP_URL: process.env.WEB_APP_URL || '',
  TURNSTILE_SITE_KEY: process.env.TURNSTILE_SITE_KEY || ''
};