export const navbar_kr: Partial<any> = [
  {
    text: 'Home',
    link: '/home/'
  },
  {
    text: "Docs",
    link: '/life'
  },
  {
    text: "Code",
    children: [
      {
        text: 'audition',
        children: [
          {
            text: 'code audition',
            link: '/code/audition/'
          },
        ]
      },
    ]
  },
  {
    text: 'Links',
    children: [
      {
        text: 'Royal Family',
        children: [
          {
            text: 'Windsor Family',
            link: 'https://augusmeow.cn/RoyalFamily/'
          },
        ]
      },
      {
        text: 'Blog',
        children: [
          {
            text: 'bolg',
            link: 'https://augusmeow.cn/'
          },
          {
            text: 'genshin',
            link: 'https://augusmeow.cn/list/genshin'
          },
        ]
      },
    ]
  },
  {
    text: 'Sponsor',
    link: '/life/statement/sponsor.md'
  },
]