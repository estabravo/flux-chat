const chatroom = new Chatroom('general', 'bravo');

chatroom.getChats((data) => {
    console.log(data);
});