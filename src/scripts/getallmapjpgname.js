const fs = require('fs').promises;
const path = require('path');

async function readAndProcessFiles(directory) {
    try {
        const files = await fs.readdir(directory);
        const processedFiles = files
            .filter(file => file.endsWith('.jpg'))
            .map(file => path.basename(file, '.jpg'));

        console.log(JSON.stringify(processedFiles));
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}

const directoryPath = './src/assets/img/map/'; // 替换为你的目录路径
readAndProcessFiles(directoryPath);