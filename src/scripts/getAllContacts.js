import { readContacts } from "../utils/readContacts.js";

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts);
  } catch (error) {
    console.error(error.message); 
  }
};

getAllContacts();
