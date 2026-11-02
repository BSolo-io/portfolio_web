CLAUDE.md - Portfolio Website Rebuild
Context
I'm a developer rebuilding my personal portfolio for job hunting. My first site, built about a year ago, used plain HTML with inline CSS. I'm rebuilding it in React to show my current skills. Keep the old HTML version in its own repo as a before-and-after comparison.
Tech Stack
• React (Vite recommended)
• Swiper for the projects carousel
• CSS in separate files or modules, no inline styles
• Hosted free on GitHub Pages at https://bsolo-io.github.io/portfolio_web/ (vite.config.js base is /portfolio_web/). Reference files in /public through asset() from src/lib/asset.js, never a bare "/file" path. Deploys via .github/workflows/deploy.yml on push to main.
Layout: Single Page, Top to Bottom
1. Hero: my name, social links directly underneath, and a photo of me.
2. About / Story: a short story of how I decided to become a software developer.
3. Projects Carousel: my top 10 projects (maximum 15).
4. More Work: a link to my GitHub for everything else.
5. Contact / Footer: socials and contact info.
Projects Carousel Details
• Horizontal slider with one active project in the centre.
• On desktop, show 3 slides: the active one plus the two neighbours peeking in on either side.
• On mobile, show 1 slide, with touch swiping.
• Each card has a screenshot, the project name, the tech used, a Live Demo button and a Code (GitHub) button.
• Clicking a card opens the live demo.
• Hover preview: a static screenshot by default; on hover (desktop) or when it's the active slide (touch), play a short muted .mp4/.webm clip instead of a heavy GIF. Clips load only when played.
• Project content lives in src/data/projects.json (one block per project; field guide at the top of src/data/projects.js). Featured projects show first; text starting with "TODO" is hidden. Personal info and the About story live in src/data/profile.js.
• Put the strongest projects first, since recruiters mostly look at the first few.
Style Goals
• Mix of three styles: one-page scroll, project-first, and a touch of personality (subtle animations, possibly a dark-mode toggle).
• Fancy but fast: keep it optimized and responsive.
Constraints
• Free hosting only. Don't host every project on the site; link to GitHub for the rest to avoid maintenance costs.
• Security isn't a major concern for this static site.
Working Style
• I iterate by voice, using Claude Code's /voice.
• Make small, incremental changes and commit often so I can rewind or compare versions.
• Explain Git and terminal commands briefly: what each one does and why it comes first.
Next Steps
1. Scaffold the React app with Vite in a new repo.
2. Build the Hero and About sections.
3. Build the Swiper projects carousel using placeholder data.
4. Add real projects, screenshots and links.
5. Deploy to GitHub Pages.