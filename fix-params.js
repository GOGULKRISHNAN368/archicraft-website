const fs = require('fs');

const files = [
  'src/pages/services/[slug]/page.tsx',
  'src/pages/portfolio/[slug]/page.tsx',
  'src/pages/materials/[slug]/page.tsx',
  'src/pages/blog/[slug]/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/export default function .*?\(\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*\{\s*slug\s*:\s*string\s*\}\s*\}\)\s*\{/g, match => {
      let funcName = match.match(/function (.*?)\(/)[1];
      return `import { useParams } from "react-router-dom";\nexport default function ${funcName}() {\n  const { slug } = useParams();`;
    });
    fs.writeFileSync(file, content);
  }
});
