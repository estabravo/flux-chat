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
    // creating method to add new chat documents (async - will take some time)
    async addChat(message){
        // format a chat object (since we're passing object data)
        const now = new Date(); //access when the user has submitted the chat
        const chat = {
            message, //shortend with ES6     
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now) // passing our timestamp
        }; // here's our 'chats' object
    }
}

// testing new Chatroom instance (passing through 'room' and 'username')
const chatroom = new Chatroom('general', 'bravo');
console.log(chatroom);
