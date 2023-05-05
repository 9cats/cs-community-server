const execSync = require('child_process').execSync;

try {
  execSync('npm version patch -m "Upgrade to %s"')
  execSync('npm run build')
  execSync('npm publish --access=public')
} catch (error) {
  console.error(error)
  process.exit(1)
}
