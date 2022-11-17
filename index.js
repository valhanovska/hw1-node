const contacts = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;
    case "get":
      const oneContacts = await contacts.getContactById(id);
      console.log(oneContacts);
      break;
    case "add":
      const newContact = await contacts.addContact({ id, name, email, phone });
      console.log(newContact);
      break;
    case "remove":
      const contactToRemove = await contacts.removeContact(id);
      console.log(contactToRemove);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
