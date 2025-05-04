import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    const data = [];
      
      try {
          await fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2), 'utf8');
          
          console.log(`Total contacts: ${data.length}`);
        
      } catch (err) {
        console.error('Error:', err);
    }
};

removeAllContacts();
