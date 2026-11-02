// Turns a path to a file in /public (like "/projects/demo.gif") into a URL that
// works wherever the site is hosted.
//
// The site lives at https://bsolo-io.github.io/portfolio_web/, so "/resume.pdf"
// must become "/portfolio_web/resume.pdf". Vite exposes the `base` from
// vite.config.js as import.meta.env.BASE_URL (always ending in "/").
// If the site later moves to https://bsolo-io.github.io/, change base to '/'
// in vite.config.js; nothing else needs to change.

export function asset(path) {
  if (!path) return path
  // Leave full URLs (https://…, //cdn…) and inline data alone
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith('data:')) return path
  return import.meta.env.BASE_URL + path.replace(/^\/+/, '')
}
