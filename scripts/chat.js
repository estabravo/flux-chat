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
        this.unsub;
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
        // this will save the chat document to the database 
        const response = await this.chats.add(chat);
        // await used because 'async' above is returning a promise
        // this.chats is referencing the chats collection from our constructor
        // .add is going to take the 'chat' object we just created
        // the response we're awaiting will be stored in 'response' 
        return response; 
    }
    getChats(callback){
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshots => {
             snapshots.docChanges().forEach(change => {
                 if(change.type === 'added'){
                     // update the ui
                     callback(change.doc.data());
                 }
             });
        });
    }
    updateName(username){
        this.username = username;
    }
    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            this.unsub();
        }
    }
}

// setTimeout(() => {
//     chatroom.updateRoom('gaming');
//     chatroom.updateName('lavahey');
//     chatroom.getChats((data) => {
//     console.log(data);
// });
//  chatroom.addChat('hello');
// }, 3000);