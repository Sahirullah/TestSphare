import fs from 'fs';

const filePath = 'src/data/uniBaseData.js';
let content = fs.readFileSync(filePath, 'utf8');

// Match all id: N patterns and replace with incremental IDs
let currentId = 1;
content = content.replace(/\{ id: \d+,/g, () => {
  return `{ id: ${currentId++},`;
});

// Also handle the second data array (uniBaseDataPart2)
// It should start from where the first one ended
// Reset if we find the second array
if (content.includes('export const uniBaseDataPart2')) {
  // Re-read to count how many items in first array
  const firstArrayMatch = content.match(/export const uniBaseData = \[([\s\S]*?)\];/);
  if (firstArrayMatch) {
    const firstArrayContent = firstArrayMatch[1];
    const firstArrayCount = (firstArrayContent.match(/\{ id:/g) || []).length;
    
    // Now replace ids in part2 starting from firstArrayCount + 1
    let part2Id = firstArrayCount + 1;
    const part2Start = content.indexOf('export const uniBaseDataPart2');
    const before = content.substring(0, part2Start);
    const after = content.substring(part2Start);
    
    const fixedAfter = after.replace(/\{ id: \d+,/g, () => {
      return `{ id: ${part2Id++},`;
    });
    
    content = before + fixedAfter;
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Fixed all duplicate IDs in uniBaseData.js');
