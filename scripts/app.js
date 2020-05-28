// class instances
const chatroom = new Chatroom('general', 'bravo');

// get the chats and render
chatroom.getChats((data) => {
    console.log(data);
});