import fs from 'fs';
import path from 'path';

export default (req, res) => {
  const filePath = path.join('public', 'data', 'peces.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading JSON file' });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
};

