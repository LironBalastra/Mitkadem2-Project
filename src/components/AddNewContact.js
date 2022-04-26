import React from "react";
var activeContact;

function AddContact(user, users, setcontactList) {
  var newContact = {
    username: "",
    nickname: activeContact,
    picture: "",
    messages: [],
  };
  users[user].contacts.unshift(newContact);
  setcontactList([...users[user].contacts]);
}
function handleContactChange(event) {
  activeContact = event.target.value;
  console.log("-------------------------------- ", activeContact);
}

export { handleContactChange, AddContact };
