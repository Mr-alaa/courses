const fs = require('fs');
const { exec } = require('child_process');

const cssFilePath = 'src/assets/css/custom-styles.css';

// Function to build Tailwind CSS
function buildTailwind() {
  exec(`npx tailwindcss build ${cssFilePath} -o src/styles.css`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.log('Tailwind CSS build successful.');
    }
  });
}

// Initial build
buildTailwind();

// Watch for changes
fs.watchFile(cssFilePath, (curr, prev) => {
  if (curr.mtime > prev.mtime) {
    console.log(`Changes detected in ${cssFilePath}. Rebuilding Tailwind CSS...`);
    buildTailwind();
  }
});

console.log(`Watching '${cssFilePath}' for changes...`);
