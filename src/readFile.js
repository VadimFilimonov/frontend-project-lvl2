import fs from 'fs';

export default (filepath) => fs.readFileSync(filepath, 'utf-8', () => {});
