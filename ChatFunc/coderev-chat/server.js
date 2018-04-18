const express = require('express');
const mongoose = require('mongoose');
const app = express();

const conString = 'mongodb://localhost:27017/coderev-chat';
app.use(express.static(__dirname));

const Chats = mongoose.model('Chats', {
    name: String,
    chat: String
});
mongoose.connect(conString, err => {
    console.log('Database connection', err);
});
function postChat(chat) {
        $.post("http://localhost:3030/chats", chat)
}
app.post("/chats", async (req, res) => {
    try {
        const chat = new Chats(req.body);
        await chat.save();
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
        console.error(error);
    }
});

app.listen(3030, () => {
    console.log('well don');
});
