// backend/data.js

const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika'
  },
  {
    id: 2,
    period: '2018 - 2021',
    institution: 'SMK Negeri 2 Wonosari',
    major: 'Teknik Instalasi Tenaga Listrik'
  },
  {
    id: 3,
    period: '2014 - 2017',
    institution: 'SMP Negeri 1 Patuk',
    major: 'SMP'
  },
  {
    id: 4,
    period: '2008 - 2014',
    institution: 'SDIT Salsabila 3 Banguntapan',
    major: 'SD'
  },
];


const skills = [
 {
    "name": "HTML",
    "level": 70,
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    "name": "CSS",
    "level": 80,
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    "name": "JavaScript",
    "level": 70,
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    "name": "Vue.js",
    "level": 80,
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
  },
  {
    "name": "Node.js",
    "level": 70,
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    "name": "Express.js",
    "level": 60,
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    "name": "MySQL",
    "level": 70,
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    "name": "Figma",
    "level": 75,
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  }
];


const projects = [
  {
    title: 'Jogja-Inside',
    image: 'https://i.imgur.com/dVmlREU.jpeg',
    description: 'Website rekomendasi destinasi wisata di Yogyakarta dengan fitur login admin, manajemen user & destinasi.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: 'https://github.com/RamadhanZaki/Jogja_Inside' // atau link deploy kamu
  },
  {
    title: 'Smart Egg Incubator',
    image: 'https://raw.githubusercontent.com/EgidiusDicky/egg-incubator-esp32/refs/heads/main/assets/egg-incubator1.jpg',
    description: 'Smart Inkubator ESP32 adalah solusi inovatif untuk kebutuhan pemeliharaan telur atau objek sensitif lainnya yang memerlukan pengaturan suhu dan kelembapan yang presisi. Ditenagai oleh ESP32.',
    tech: ['C++', 'Esp-32'],
    link: 'https://github.com/EgidiusDicky/egg-incubator-esp32' // atau link deploy kamu
  },
];

module.exports = { educationHistory, skills, projects };
