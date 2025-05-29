import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        if (contacts.length === 0) {
            console.log("Контакти відсутні.");
        } else {
            console.log("Список контактів:");
            contacts.forEach((contact, index) => {
                console.log(`${index + 1}. ${contact.name} - ${contact.email}`);
            });
        }
    } catch (error) {
        console.error("Помилка при отриманні контактів:", error.message);
    }
 };

console.log(await getAllContacts());
