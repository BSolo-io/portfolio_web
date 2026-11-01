// Personal info shown in the Hero, About and Contact sections.
// Edit text here, not inside the components.

export const profile = {
  name: 'Borys Solorzano',
  role: 'Software Developer',
  location: 'Queens, NY',
  tagline: 'I like taking something that already works and asking what else it could do.',
  // Drop your photo in /public (e.g. public/borys.jpg) and set photo: '/borys.jpg'.
  photo: null,
  resume: '/resume.pdf',
  email: 'borys.solo19@gmail.com',
  socials: [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/BSolo-io' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/Borys-Solorzano' },
    { name: 'Email', icon: 'mail', url: 'mailto:borys.solo19@gmail.com' },
  ],
}

// Each string is one paragraph of the About section.
export const story = [
  'Hi, I’m Borys Solorzano. A graduated from City Tech with a bachelor’s in Computer Systems, on the software development track.',
  'I got into this through Minecraft, honestly. My brother and I played together, and we kept noticing the servers we were on didn’t have the things we’d seen on YouTube. So we started hunting down mods and adding them to our own server. Then we started opening up the open-source ones and tweaking them — small changes, just to make them work the way we wanted. That was the first time it clicked that software isn’t something you only receive. You can open it up and change it.',
  'That’s pretty much what I’ve been chasing since. At my internship, our news platform wanted to expand worldwide, but editors were hand-picking every article out of about 12,000 scraped a day. That doesn’t scale. So I built a machine learning model that learned what the editors were already looking for and surfaced the articles our audience would actually want. And the same instinct from the Minecraft days kicked in — I went poking around and found we were storing a lot of data we’d never use, so I proposed a fix that saved us significant storage.',
  'That’s the part I like most: taking something that already works and asking what else it could do. I want to keep building things people actually use, and keep learning from engineers who explain the why, not just the code.',
]
