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
  if (content.includes('next/navigation')) {
    content = content.replace(/import \{ notFound \} from ['"]next\/navigation['"];?/g, 'import { Navigate } from "react-router-dom";');
    content = content.replace(/notFound\(\);?/g, 'return <Navigate to="/not-found" replace />;');
    fs.writeFileSync(file, content);
  }
});
