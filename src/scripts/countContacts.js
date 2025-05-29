import { readContacts } from "../utils/readContacts.js";
export const countContacts = async () => {
    try {
        const contacts = await readContacts();
        const count = contacts.length;
        console.log(`Загальна кількість контактів:`);
        return count;
    } catch (error) {
        console.error("Помилка при підрахунку контактів:", error.message);
        return 0;
    }
};

console.log(await countContacts());
