import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";


const generateContacts = async (number) => {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: number }, () => createFakeContact());
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`Згенеровано та збережено ${number} нових контактів.`);
    console.log(`Загальна кількість контактів: ${updatedContacts.length}`);
};

generateContacts(2
);
