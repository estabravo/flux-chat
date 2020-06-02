// dom queries
const chatList  = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    
});

// class instances
const chatUI = new ChatUI(chatList); 
const chatroom = new Chatroom('general', 'bravo');

// get the chats and render
chatroom.getChats(data => chatUI.render(data));