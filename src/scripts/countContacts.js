import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const existingContacts = await readContacts();

        return (`Total: ${existingContacts.length}`);
    } catch (err) {
            console.error('Error:', err);
    }
};

console.log(await countContacts());
