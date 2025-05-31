import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
export const removeLastContact = async () => {
    try {
        const existingContacts = await readContacts();
        if (existingContacts.length === 0) {
            console.log("Немає контактів для видалення.");
            return;
        }
        const updatedContacts = existingContacts.slice(0, -1);
        await writeContacts(updatedContacts);
    } catch (error) {
        console.error(error.message);
    }
};

removeLastContact();
