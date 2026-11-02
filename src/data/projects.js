// Loads the carousel projects from projects.json and tidies them for display.
//
// To add a project: add one block to projects.json. Fields:
//   slug         unique id, lowercase-with-dashes (also used for the placeholder colour)
//   title        project name
//   tagline      one line shown on the card
//   description  longer write-up (kept for a future details view)
//   year         number or null
//   featured     true = shown before non-featured projects
//   status       "complete" or "in-progress" (in-progress shows a badge)
//   tech         list of technologies (chips; first 4 shown)
//   highlights   short bullet points (first 2 shown on the card)
//   media        { type: "gif" | "video" | "image", src, alt, poster? }
//                gif/video play on hover (desktop) or when centred (phones);
//                poster is an optional still image shown until then
//   links        { repo, demo } — demo may be null; clicking the card opens demo, else repo
//
// Any text that starts with "TODO" is hidden on the site, so unfinished entries
// never show placeholder text to recruiters.

import data from './projects.json'
import { asset } from '../lib/asset.js'

const MAX_PROJECTS = 15

const isTodo = (value) => typeof value === 'string' && value.trim().toUpperCase().startsWith('TODO')
const clean = (value) => (isTodo(value) ? '' : value)

// Stable colour per project for the placeholder art, derived from its slug
function hueFromSlug(slug) {
  let hash = 0
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) % 360
  return hash
}

export const projects = data
  // featured first; otherwise keep the order from the JSON file
  .map((p, order) => ({ ...p, order }))
  .sort((a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order)
  .slice(0, MAX_PROJECTS)
  .map((p) => ({
    ...p,
    tagline: clean(p.tagline),
    description: clean(p.description),
    highlights: (p.highlights || []).filter((h) => !isTodo(h)),
    tech: p.tech || [],
    // asset() adds the GitHub Pages subpath, so JSON paths stay as "/projects/…"
    media: p.media
      ? {
          ...p.media,
          src: asset(p.media.src),
          poster: asset(p.media.poster),
          alt: clean(p.media.alt) || `Preview of ${p.title}`,
        }
      : null,
    hue: hueFromSlug(p.slug),
  }))
