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
        console.log("Останній контакт був успішно видалений.");
        console.log(`Загальна кількість контактів: ${updatedContacts.length}`);
    } catch (error) {
        console.error("Помилка при видаленні останнього контакту:", error.message);
    }
};

removeLastContact();
