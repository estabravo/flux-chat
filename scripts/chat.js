// adding new chat documents to the 'chats' collection
// setting up real-time listener to get new chats whenever they are added to the database
// updating the username when user submits from said form 
// updating the room when user clicks on on of the rooms near the top

// this is going to setup the initial properties on the chatroom instance
class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
}

// testing new Chatroom instance (passing through 'room' and 'username')
const chatroom = new Chatroom('general', 'bravo');
console.log(chatroom);
