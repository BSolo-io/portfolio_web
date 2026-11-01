// Projects shown in the carousel, in display order.
// Put your strongest projects FIRST: recruiters mostly look at the first few.
// The carousel shows at most 15; everything else lives on GitHub.
//
// Fields:
//   title     project name
//   tech      list of technologies (shown as chips)
//   summary   one short sentence
//   image     screenshot path in /public, e.g. '/projects/ml-news.webp' (null = placeholder)
//   preview   short muted clip that plays on hover, e.g. '/projects/ml-news.mp4' (null = demo animation)
//   liveUrl   live demo link (null hides the button; card click falls back to the code link)
//   codeUrl   GitHub repo link
//   hue       placeholder colour (0-360) until a screenshot exists

const GITHUB = 'https://github.com/BSolo-AFK'

export const projects = [
  {
    title: 'ML News Editor',
    tech: ['Python', 'Machine Learning', 'Pandas'],
    summary: 'Ranks ~12,000 scraped articles a day down to a shortlist of 8 per section for editors.',
    image: null,
    preview: null,
    liveUrl: null,
    codeUrl: GITHUB,
    hue: 250,
  },
  {
    title: 'Debt Tracer',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    summary: 'AI-powered app that helps users track and work toward their financial goals.',
    image: null,
    preview: null,
    liveUrl: null,
    codeUrl: GITHUB,
    hue: 170,
  },
  {
    title: 'NYC Flooring Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    summary: 'Responsive business site with a project-estimate contact form.',
    image: null,
    preview: null,
    liveUrl: null,
    codeUrl: GITHUB,
    hue: 30,
  },
  {
    title: 'Placeholder Project 4',
    tech: ['React', 'Vite'],
    summary: 'Replace with a real project.',
    image: null,
    preview: null,
    liveUrl: null,
    codeUrl: GITHUB,
    hue: 320,
  },
  {
    title: 'Placeholder Project 5',
    tech: ['Dart', 'Flutter'],
    summary: 'Replace with a real project.',
    image: null,
    preview: null,
    liveUrl: null,
    codeUrl: GITHUB,
    hue: 200,
  },
  {
    title: 'Placeholder Project 6',
    tech: ['Java'],
    summary: 'Replace with a real project.',
    image: null,
    preview: null,
    liveUrl: null,
    codeUrl: GITHUB,
    hue: 100,
  },
  {
    title: 'Placeholder Project 7',
    tech: ['PostgreSQL', 'Express'],
    summary: 'Replace with a real project.',
    image: null,
    preview: null,
    liveUrl: null,
    codeUrl: GITHUB,
    hue: 0,
  },
  {
    title: 'Placeholder Project 8',
    tech: ['C++'],
    summary: 'Replace with a real project.',
    image: null,
    preview: null,
    liveUrl: null,
    codeUrl: GITHUB,
    hue: 280,
  },
]
