import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        
        return JSON.parse(data);
      } catch (err) {
          console.error('Error:', err);
      }
};

console.log(await getAllContacts());
