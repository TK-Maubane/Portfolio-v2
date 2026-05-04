
// category: 'web' | 'data' | 'scripting' | 'fun'


const PROJECTS = [
  {
    id: 'babyboard',
    category: 'web',
    categoryLabel: 'Web App',
    title: 'Wedding Management System',
    summary: "A mobile-friendly web app, designed to simplify wedding planning and general management",
    // icon: any emoji used as placeholder until you add real screenshots
    icon: '💻',
    tags: ['Javascript', 'Django', 'Python', 'Postgres'],
    reason: " Designed and built a full-stack wedding planning platform to centralise every aspect ofthe event — from guest management to vendor tracking — driven by a genuine problem worth solving.",
    problems: [
      "Implemented a smart guest list with capacity-aware RSVP tracking: guests marked as '+1 eligible' fed into live availability calculations, ensuring the venue limit was never breached.",
      "Built a vendor management module tracking contact details, outstanding balances, and delivery status for every supplier — keeping finances and logistics in one place.",
      "Developed an interactive seating guide on the front-end: guests could enter their name and instantly see a visual map of their seat in the venue.",
      "Implemented role-based authorisation so family members could be assigned tasks and granted tiered access "
    ],
    learnings: [
      "Vanilla javascript is very underrated. Simplicity goes a long way.",
      "The end user cares almost entirely about the aesthetics and ease of use. React vs Angular vs Next.js is like debating over the best knife to butter bread with. Who cares?? Is the bread buttered?",
      "All the guardrails in the world can't replace real user-feedback.",
      'Developer experience matters — investing time in environment setup pays dividends throughout the build.',
      "Not knowing how/where to host an app can be costly learning curve..."
    ],
    tools: ['Python', 'Django', 'Javascript', 'Postgres', 'Heroku'],
    status: 'Deployed',
    type: 'Personal Project',
    liveLink: null,
    githubLink: 'https://github.com/yourhandle/babyboard',
    screenshots: [],
  },


  {
    id: 'Forever Birthday App',
    category: 'data',
    categoryLabel: 'Data Collection & Visualization',
    title: 'Forever Birthday App',
    summary: 'An interactive app for the display and perusal of birthday wishes...',
    icon: '🎈',
    tags: ['Python', 'Streamlit', 'Javascript', 'Google forms'],
    reason: 'Birthday gift for my mom. Needed a rapid way to collect, transform and display birthday messages from anyone around the world who wished to wish my mom a happy birthday',
    problems: [
      'Keep things simple. Keep instructions explicit',
      'Building a pipeline that could refresh data without manual intervention.',
      'Designing charts that are actually readable for non-technical stakeholders.',
    ],
    learnings: [
      'Streamlit makes deploying data-driven apps a breeze',
      'Streamlit allows for raw html injection. Which means javascript injection. Which means a world of possibilities for the UI, even though its a python based app',
      'Focus first on function, then aesthetics',
      'Procrastination sucks'
    ],
    tools: ['Python', 'Streamlit', 'Javascript', 'SQLite'],
    status: 'Deployed',
    type: 'Person Project',
    liveLink: null,
    githubLink: null,
    screenshots: [
        {src: 'assets/forever_birthday_app/forever_01.png'}],
  },
  {
    id: 'Forbes-richest-athletes EDA',
    category: 'data',
    categoryLabel: 'Fun | Play| Data',
    title: "Forbes-richest-athletes EDA",
    summary: "Exploratory Data Analysis and Visualisation of the richest Forbes athletes (1990-2021).",
    icon: '📊',
    tags: ['Data Analysis', 'Data Visualization', 'Python', 'Kaggle'],
    reason: "This was just a really fun dataset to play with",
    problems: [
      'None.',
    ],
    learnings: [
      'There is an art to visualzation',
      'Displaying a full idea from a single diagram is challenging'
    ],
    tools: ['Jupyter Notebook', 'Python', 'Seaborn', 'matplotlib'],
    status: 'Deployed',
    type: 'Personal Project',
    liveLink: 'https://www.kaggle.com/code/tique12/forbes-richest-athletes-eda',
    githubLink: null,
    screenshots: [
        { src: 'assets/forbes/forbes_01.png'},
        { src: 'assets/forbes/forbes_02.png'},
        { src: 'assets/forbes/forbes_03.png'},
    ],
  },

   {
    id: 'Where Is Picasso?',
    category: 'web',
    categoryLabel: 'Web app',
    title: 'Where Is Picasso?',
    summary: 'React based app to help find my dog',
    icon: '🐶',
    tags: ['HTML', 'JavaScript', 'React', 'Vercel'],
    reason: "A Next.js app to help retrieve my dog should he go missing. As well as provide general information about him to whoever should find the little guy",
    problems: [
      'Determining what information about him is safe to share publicly',
      'The whole point is to have a QR code on his tag, that people can scan and find out his info and how to contact me. The issue here is strangers getting close enough to scan the code, without frightening Picasso into "self-defence mode" ',
    ],
    learnings: [
      'React',
      'Modularization',
    ],
    tools: ['HTML', 'CSS', 'Next.js'],
    status: 'Deployed - on Vercel',
    type: 'Personal utility',
    liveLink: 'https://picasso-site-ruddy.vercel.app/',
    githubLink: null,
    screenshots: [{ src: 'assets/picasso/picasso_01.png'},
                  { src: 'assets/picasso/picasso_02.png'},
                  { src: 'assets/picasso/picasso_03.png'},
                ],
  },


  {
    id: 'Gym Jams',
    category: 'data',
    categoryLabel: 'Fun | Play| Data',
    title: "Gym Jams",
    summary: "Investion of gym patterns and how my music tastes while working out may correlate",
    icon: '🎧 vs 🏋',
    tags: ['Data Analysis', 'Data Visualization', 'Python', 'Streamlit', 'CSS', 'Claude (AI)'],
    reason: "I noticed that there are songs in my Spotify playlist that no longer play (disallowed). I wanted to find out how much of the music in my library I can stil actually listen too. I requested my data from Spotify and Virgin Active, merged it, and built a dashboard to easily check out wagwaan...! Dope use of free will!",
    problems: [
      'Data sanitazation. There was a ton of data cleaning before any of it was of any use.',
    ],
    learnings: [
      'There is an art to visualzation',
      'I workout like a madman',
      'Data acquisition can be a timely process'
    ],
    tools: ['Jupyter Notebook', 'Python', 'plotly', 'matplotlib', 'Streamlit'],
    status: 'Deployed',
    type: 'Personal Project',
    liveLink: 'https://gymjamsv4-dbnfgscwaajx2g7k7jiuln.streamlit.app/',
    githubLink: null,
    screenshots: [
        { src: 'assets/gymjams/gympic_01.png'},
        { src: 'assets/gymjams/gympic_02.png'},
        { src: 'assets/gymjams/gympic_03.png'},
    ],
  },

  {
    id: 'Alcohol/Income/Suicide EDA & Feature engineering',
    category: 'data',
    categoryLabel: 'Fun | Play| Data',
    title: "Alcohol/Income/Suicide EDA & Feature engineering",
    summary: "An low-level EDA investigating sub-continental alcohol consumption and suicide rates and income per person",
    icon: '📈',
    tags: ['Data Analysis', 'Data Visualization', 'Python', 'Kaggle'],
    reason: "This was just a really fun dataset to play with",
    problems: [
      'Having interactivity on dashboard.',
    ],
    learnings: [
      'Very first EDA. So got comfortable with pandas'
    ],
    tools: ['Jupyter Notebook', 'Python',  'matplotlib'],
    status: 'Deployed',
    type: 'Personal Project',
    liveLink: 'https://www.kaggle.com/code/tique12/alcohol-consumption-eda-feature-engineering',
    githubLink: null,
    screenshots: [
        {src: 'assets/alcohol/alcohol_01.png'},
        {src: 'assets/alcohol/alcohol_02.png'},
        {src: 'assets/alcohol/alcohol_03.png'},
    ],
  },

 {
    id: 'Global Terrorism EDA',
    category: 'data',
    categoryLabel: 'Fun | Play| Data',
    title: "Global Terrorism EDA",
    summary: "This EDA explores the trends in global terrorist attacks from 1970 - 2017, and aims to answer questions posed in this assignment:\n https://platform.stratascratch.com/data-projects/terrorism-hotspots",
    icon: '📊',
    tags: ['Data Analysis', 'Data Visualization', 'Python', 'Kaggle'],
    reason: "Play. Interesting dataset to pull apart...",
    problems: [
      'None',
    ],
    learnings: [
      'Notebooks are so much better when interactive. Added animation with this one.'
    ],
    tools: ['Jupyter Notebook', 'Python',  'matplotlib', 'plotly', 'bar_chart_race'],
    status: 'Deployed',
    type: 'Personal Project',
    liveLink: 'https://www.kaggle.com/code/tique12/global-terrorism-eda',
    githubLink: null,
    screenshots: [
        {src: 'assets/terrorism/terror_01.png'},
        {src: 'assets/terrorism/terror_02.png'},
        {src: 'assets/terrorism/terror_03.png'},
        {src: 'assets/terrorism/terror_04.png'},]
  },


  {
    id: 'game',
    category: 'fun',
    categoryLabel: 'Fun | Play',
    title: "Smile'a Nyana (Smile a bit)",
    summary: "Covid was morose time. All media reported almost exclusively sad news. \
    This script was built to periodically send me a funny image retrived from Instagram, and attach a funny joke from a public API, and send all that to me via whatsapp. \
    All that for a dose of joy amongst all the devastation.",
    icon: '🎮',
    tags: ['Scripting', 'Python', 'API'],
    reason: "Sometimes you build something just because it's fun. There's no business case, no user research, just genuine curiosity and an afternoon to burn.",
    problems: [
      'Scope creep — "just one more feature" is dangerously easy on personal projects.',
    ],
    learnings: [
      'Play is how you discover your best ideas.',
      'Constraints breed creativity — weekend projects force you to ship something.',
    ],
    tools: ['Twilio', 'Instagram API', 'Public chuck-norris API', 'cron jobs'],
    status: 'Deployed',
    type: 'Personal Project',
    liveLink: null,
    githubLink: null,
    screenshots: [],
  },

  
]

