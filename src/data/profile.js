
export const profile = {
  name: 'Borys Solorzano',
  role: 'Software Developer',
  location: 'Queens, NY',
  tagline: 'I like taking something that already works and asking what else it could do.',
  // Drop your photo in /public (e.g. public/borys.jpg) and set photo: '/borys.jpg'.
  photo: '/Profile_pic.jpg',
  resume: '/resume.pdf',
  email: 'borys.solo19@gmail.com',
  socials: [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/BSolo-io' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/Borys-Solorzano' },
    { name: 'Email', icon: 'mail', url: 'mailto:borys.solo19@gmail.com' },
  ],
}

// The About section plays like a music player: each entry is one "track" (page).
// Back / next on the player move between them. Each string in body is a paragraph.
export const story = [
  {
    id: 'who',
    question: 'Who am I?',
    body: [
      'Hi, I’m Borys Solorzano, a future graduate from City Tech with a bachelor’s in Computer Systems, on the software development track.',
      'I build things that take work off people’s hands — the kind of work a person shouldn’t have to do by hand twice.',
    ],
  },
  {
    id: 'start',
    question: 'How did I get into this?',
    body: [
      'Minecraft, honestly. My brother and I played together, and we kept noticing the servers we were on didn’t have the things we’d seen on YouTube. So we started hunting down mods and adding them to our own server.',
      'Then we started opening up the open-source ones and tweaking them — small changes, just to make them work the way we wanted. That was the first time it clicked that software isn’t something you only receive. You can open it up and change it.',
    ],
  },
  {
    id: 'now',
    question: 'Where am I going?',
    body: [
      'At my internship, our news platform wanted to expand worldwide, but editors were hand-picking every article out of about 12,000 scraped a day. That doesn’t scale. I took the problem on and built a machine learning model that learned what the editors were already looking for and surfaced the articles our audience would actually want.',
      'The same instinct from the Minecraft days kicked in — I went poking around the database and found we were storing a lot of data we’d never use, so I proposed a fix that saved us significant storage.',
      'That project is what pointed me forward. I want to go deeper into machine learning, and I want to keep building in-house tools: the unglamorous ones that cut a company’s costs and turn a week of manual work into a job that runs on its own.',
    ],
  },
  {
    id: 'next',
    question: 'What kind of engineer do I want to be?',
    body: [
      'Every engineer who has helped me along the way had one thing in common: they explained the why, not just the code. They didn’t hand me an answer — they showed me how they got there, so I could get there myself the next time.',
      'That’s what I’m working toward. Someone reliable, who builds well with other people, and who builds things that are actually useful to them.',
      'And someone who keeps learning — from the people around me and from the craft itself. Eventually I’d like to be that person for somebody else.',
    ],
  },
]

// Flat paragraph list, in case a component still wants the original shape.
export const paragraphs = story.flatMap((section) => section.body)
