// dom queries
const chatList  = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssge = document.querySelector('.update-mssg');

// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim()
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err)); 
});

//update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim()
    // update name via chatroom
    chatroom.updateName(newName);
    // reset username form
    newNameForm.reset();
    // show then hide the update message
    updateMssge.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssge.innerText = '', 3000);
})

// class instances
const chatUI = new ChatUI(chatList); 
const chatroom = new Chatroom('general', 'bravo');

// get the chats and render
chatroom.getChats(data => chatUI.render(data));