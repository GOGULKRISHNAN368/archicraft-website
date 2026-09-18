const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Fix Link href -> to
  if (content.includes('<Link') || content.includes('<Button')) {
    const newContent = content.replace(/(<Link[^>]*?)href=/g, '$1to=');
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
    const newContent2 = content.replace(/(<Button[^>]*?)href=/g, '$1to=');
    if (newContent2 !== content) {
      content = newContent2;
      changed = true;
    }
  }

  // 2. Remove 'fill' from <img> tags
  if (content.includes('<img')) {
    const newContent = content.replace(/(<img[^>]*?)\s+fill(?=[\s>])/g, '$1');
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }

  // 3. Remove 'import from "next"' or 'next/server'
  if (content.includes('from "next') || content.includes("from 'next")) {
    const newContent = content.replace(/^import\s+.*?from\s+['"]next.*?['"];?[\r\n]+/gm, '');
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }

  // 4. Fix specific type errors in Button.tsx (if Button is wrapping Link)
  if (file.endsWith('Button.tsx') && content.includes('href?:')) {
    content = content.replace(/href\?:/g, 'to?:');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
});
