const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Convert next/link to react-router-dom
    content = content.replace(/import Link from ['"]next\/link['"]/g, 'import { Link } from "react-router-dom"');
    
    // Remove next/image import and replace tag
    content = content.replace(/import Image from ['"]next\/image['"]/g, '');
    content = content.replace(/<Image/g, '<img');
    
    // Remove specific next/image props
    content = content.replace(/\sfill={?[^}]*}?/g, '');
    content = content.replace(/\spriority={?[^}]*}?/g, '');
    content = content.replace(/\spriority\b/g, '');

    // Remove metadata exports (Next.js specific)
    content = content.replace(/export const metadata.*?};/gs, '');
    
    // Remove use client directive
    content = content.replace(/['"]use client['"];?/g, '');

    fs.writeFileSync(file, content);
  }
});

// Rename src/app to src/pages
if (fs.existsSync('src/app')) {
  fs.renameSync('src/app', 'src/pages');
}
