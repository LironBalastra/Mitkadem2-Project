import React from "react";

function AddContact(user, users, setcontactList, activeContactNickname) {
  var activeContactUsername = "";
  for (var u in users) {
    if (users[u].nickname === activeContactNickname) {
      activeContactUsername = u;
    }
  }

  var newContact = {
    username: activeContactUsername,
    nickname: activeContactNickname,
    picture: users[activeContactUsername].picture,
    messages: [],
  };
  users[user].contacts.unshift(newContact);
  setcontactList([...users[user].contacts]);
}

export { AddContact };
