import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


export const removeLastContact = async () => {
    try {
        const existingContacts = await readContacts();
    
        if (existingContacts.length === 0) {

            return ('Contact list is empty!');

        } else {
            existingContacts.pop();
            await writeContacts(existingContacts);
            console.log(`Last contact removed, total contacts left: ${existingContacts.length}`);
        }
    } catch (error) {
        console.error('Error...', error);
    }
};

removeLastContact();
