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
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Mahir' },

];


const projects = [
  {
    title: 'Jogja-Inside',
    image: 'https://via.placeholder.com/500x300?text=Jogja+Inside',
    description: 'Website rekomendasi destinasi wisata di Yogyakarta dengan fitur login admin, manajemen user & destinasi.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: 'https://github.com/RamadhanZaki/Jogja_Inside' // atau link deploy kamu
  },

];

module.exports = { educationHistory, skills, projects };
