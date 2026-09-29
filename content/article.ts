import fs from 'fs';
import path from 'path';

export function getArticleContent(): string {
  const filePath = path.join(process.cwd(), 'magis_formatted.md');
  return fs.readFileSync(filePath, 'utf-8');
}
