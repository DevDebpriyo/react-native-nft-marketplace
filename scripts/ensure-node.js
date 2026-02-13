const semver = process.versions.node;
const major = Number(semver.split('.')[0]);

if (major !== 16) {
  console.error('\n❌ Unsupported Node.js version for this project.');
  console.error(`Detected: v${semver}`);
  console.error('Required: Node.js 16.x (Expo SDK 44 legacy CLI compatibility)\n');
  console.error('Fix:');
  console.error('  1) nvm install 16.20.2');
  console.error('  2) nvm use 16.20.2');
  console.error('  3) npm install');
  console.error('  4) npm start\n');
  process.exit(1);
}

console.log(`Using Node.js v${semver} (supported)`);