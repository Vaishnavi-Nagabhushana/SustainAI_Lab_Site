export const siteConfig = {
  author: 'Dr. Ayon Borthakur',
  title: 'SustainAI Lab',
  subtitle: 'SustainAI Lab at IIT Guwahati',
  description: 'We are a research lab at IIT Guwahati led by Dr. Ayon Borthakur, focusing on sustainable AI, data-driven decision-making, and interdisciplinary research at the intersection of technology and society.',

  image: {
    src: '/lab_logo_tentative.png',
    alt: 'tentative lab logo',
  },
  email: 'ayon.borthakur@iitg.ac.in',
  socialLinks: [
    {
      text: 'GitHub',
      href: '',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Twitter',
      href: '',
      icon: 'i-simple-icons-x',
      header: 'i-ri-twitter-x-line',
    },
    {
      text: 'Linkedin',
      href: '',
      icon: 'i-simple-icons-linkedin',
    },
    {
      text: 'Instagram',
      href: '',
      icon: 'i-simple-icons-instagram',
    },
    {
      text: 'Youtube',
      href: '',
      icon: 'i-simple-icons-youtube',
    },
  ],

  header: {
    logo: {
      src: '/lab_logo_tentative.png', // You can replace this image in `public/`
      alt: 'tentative lab logo',
    },
    navLinks: [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Patents & Publications', href: '/publications' },
      { text: 'Team', href: '/team' },
      { text: 'Software', href: '/software' },
      // { text: 'Openings', href: '/openings' },
      { text: 'Teaching', href: '/teaching' },
      { text: 'News', href: '/news' },

    ],
  },

  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
    ],
    contact: {
      address: '311, Academic Complex (HSS Building), Mehta Family School of DS & AI, IIT Guwahati',
      phone: '+91-361-258-3511',
      location: 'Assam 781039, India',
      email: 'ayon.borthakur@iitg.ac.in',
    },
  },
}

export default siteConfig
