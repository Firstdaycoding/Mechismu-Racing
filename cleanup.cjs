const fs = require('fs');
try {
  fs.rmSync('src/components/Team', { recursive: true, force: true });
  fs.rmSync('src/pages/Team.jsx', { force: true });
  fs.rmSync('src/data/Member', { recursive: true, force: true });
  console.log('Cleanup successful');
} catch (e) {
  console.error(e);
}
