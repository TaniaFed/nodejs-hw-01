import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js"; 

export const addOneContact = async (number) => {
    try {
        const existingContacts = await readContacts();
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        const updatedContacts = [...existingContacts, ...newContacts];

        await writeContacts(updatedContacts);
        console.log(`✅ One contact added. Total contacts: ${updatedContacts.length}`);

    } catch (error) {
        console.error('Error...', error);
    }
};

addOneContact(1);
