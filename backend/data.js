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
  { name: 'Vue.js', level: 'Menengah' },
  { name: 'Tailwind CSS', level: 'Menengah' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Menengah' },

];


const projects = [
  {
    title: 'Jogja-Inside',
    image: 'https://i.imgur.com/6jB8gOo.jpeg',
    description: 'Website rekomendasi destinasi wisata di Yogyakarta...',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: 'https://github.com/RamadhanZaki/Jogja_Inside'
  },
  {
    title: 'My Portofolio',
    image: 'https://i.imgur.com/Uox4S21.jpeg',
    description: 'Portofolio',
    tech: ['Vue.js', 'Laravel'],
    link: 'https://github.com/RamadhanZaki/My-portofolio'
  },

];

module.exports = { educationHistory, skills, projects };
