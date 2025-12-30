type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Member = {
  name: string
  company: string
  subheading: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const MEMBERS: Member[] = [
  { name: 'Abdullah Nauman', company: 'Claybird (YC F25)', subheading: 'Led infra for $1b project at Google', start: '', end: '', link: '', id: 'member1' },
  { name: 'Yasin Ehsaan', company: 'Headstarter', subheading: 'a16z Scout', start: '', end: '', link: '', id: 'member2' },
  { name: 'Saad Jamal', company: 'Claybird (YC F25)', subheading: 'On leave from UChicago Law', start: '', end: '', link: '', id: 'member3' },
  { name: 'Faizan Syed', company: 'TikTok Influencer (500M views)', subheading: 'Created the Muslim niche', start: '', end: '', link: '', id: 'member13' },
  { name: 'Hassan Syed', company: 'Doublespeed', subheading: 'Built Google\'s data warehouse for Ads ML', start: '', end: '', link: '', id: 'member4' },
  { name: 'Zuhair Lakhani', company: 'Doublespeed', subheading: 'Scaled creative agency for top brands', start: '', end: '', link: '', id: 'member5' },
  { name: 'Ahmad Khan', company: 'Anytool (YC F25)', subheading: 'First intern class at OpenAI', start: '', end: '', link: '', id: 'member10' },
  { name: 'Prama Yudhistra', company: 'Anytool (YC F25)', subheading: 'Founding Eng at Codegen', start: '', end: '', link: '', id: 'member11' },
  { name: 'Bilal Asmatullah', company: 'Sciloop (YC F25)', subheading: 'Represented Pakistan at the IPhO', start: '', end: '', link: '', id: 'member15' },
  { name: 'Osman Siddique', company: 'Sciloop (YC F25)', subheading: 'Represented Pakistan at the IPhO', start: '', end: '', link: '', id: 'member14' },
  { name: 'Mark Benliyan', company: 'Jooba', subheading: 'Worked on the Mars Rover', start: '', end: '', link: '', id: 'member6' },
  { name: 'Burhan Drak Sibai', company: 'Jooba', subheading: 'Did pre-training for Ashish Vaswani', start: '', end: '', link: '', id: 'member7' },
  { name: 'Roy Jad', company: 'Head of Design @ Context', subheading: 'Scaled 7-figure design agency', start: '', end: '', link: '', id: 'member8' },
  { name: 'Joseph Jojoe', company: 'sampling latent space', subheading: 'with elad gil', start: '', end: '', link: '', id: 'member9' },
  { name: 'Essam Sleiman', company: 'Canvas (YC F25)', subheading: 'Trained Twitch\'s video foundation model', start: '', end: '', link: '', id: 'member16' },
  { name: 'Shrey Pandya', company: 'Growth @ Browserbase', subheading: 'Created the startup scene at Michigan', start: '', end: '', link: '', id: 'member18' },
  { name: 'Tawsif Kamal', company: 'Founding Engineer @ Google Jules', subheading: '', start: '', end: '', link: '', id: 'member12' },
  { name: 'Sameel Arif', company: 'Founding Engineer @ Browserbase', subheading: '', start: '', end: '', link: '', id: 'member17' },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'The Vulnerability Explosion Memo',
    description: 'Anytool Team',
    link: 'https://www.anytool.sh/memo',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/abdullahnauman2/powell',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/powelldotst',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/company/powellst',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/powelldotst/',
  },
]

export const EMAIL = 'mail@powell.st'
