const fs = require('fs');
const path = require('path');

const dirs = [
  'src/features/team/components',
  'src/features/team/styles',
  'src/features/team/pages',
  'src/features/team/data'
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

try {
  fs.cpSync('src/data/Member', 'src/features/team/data', { recursive: true });
  fs.renameSync('src/components/Team/FilterBar.jsx', 'src/features/team/components/FilterBar.jsx');
  fs.renameSync('src/components/Team/Section.jsx', 'src/features/team/components/Section.jsx');
  fs.renameSync('src/components/Team/TeamCard.jsx', 'src/features/team/components/TeamCard.jsx');
  fs.renameSync('src/components/Team/YearSelector.jsx', 'src/features/team/components/YearSelector.jsx');
  fs.renameSync('src/components/Team/TeamPage.jsx', 'src/features/team/pages/TeamPage.jsx');
  console.log('Migration successful');
} catch (e) {
  console.error(e);
}
