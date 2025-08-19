import express from 'express';
import ImageKit from 'imagekit';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Chat from './model/chats.js';
import UserChats from './model/userChats.js';
import { clerkMiddleware, requireAuth } from '@clerk/express'

const app = express();
const PORT = 3000;

dotenv.config();


app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use(express.json());


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
}

var imagekit = new ImageKit({
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT
});

app.use(clerkMiddleware());

// Legacy-style requireAuth for APIs
const legacyRequireAuth = (req, res, next) => {
    if (!req.auth() || !req.auth().userId) {
        console.log("Unauthenticated access attempt");
        return res.status(401).json({ error: 'Unauthenticated access!!' });
    }
    next();
};


// Your protected API endpoint
// app.get('/api/test', legacyRequireAuth, (req, res) => {
//     const userId = req.auth().userId;
//     console.log("Success", userId);
//     res.send(userId);
// });


app.get('/api/upload', (req, res) => {
    const { token, expire, signature } = imagekit.getAuthenticationParameters();
    res.send({ token, expire, signature, publicKey: process.env.IMAGEKIT_PUBLIC_KEY });
});


app.post('/api/chats', legacyRequireAuth, async (req, res) => {
    const userId = req.auth().userId;
    const { text } = req.body;

    try {
        // CREATE A NEW CHAT
        const newChat = new Chat({
            userId: userId,
            history: [{ role: "user", parts: [{ text }] }]
        })

        const saveChat = await newChat.save();

        // CHECK IF THE USERCHAT EXISTS
        const userChats = await UserChats.find({ userId: userId });
        // console.log("User Chats:", userChats);

        // IF DOESN'T EXIST CREATE A NEW USERCHAT
        if (!userChats.length) {
            const newUserChat = new UserChats({
                userId: userId,
                chats: [{
                    _id: saveChat._id,
                    title: text.substring(0, 40),
                }]
            });
            await newUserChat.save();
        }
        // IF EXISTS, ADD THE NEW CHAT TO THE USERCHAT
        else {
            await UserChats.updateOne(
                { userId: userId },
                { $push: { chats: { _id: saveChat._id, title: text.substring(0, 40) } } }
            );
            res.status(200).send(newChat._id);
        }
    }
    catch (err) {
        console.error("Error processing chat message:", err);
        return res.status(500).send("Internal Server Error while processing chat message");
    }


    console.log("Received chat message:", text);

});

app.get('/api/userchats', legacyRequireAuth, async (req, res) => {
    const userId = req.auth().userId;

    try {
        const userChats = await UserChats.find({ userId });
        return res.status(200).json(userChats[0].chats);
    }
    catch (err) {
        console.log("Error fetching user chats:", err);
        return res.status(500).send("Internal Server Error while fetching user chats");
    }
})

app.get('/api/chat/:id', legacyRequireAuth, async (req, res) => {
    const userId = req.auth().userId;

    try {
        const chat = await Chat.findOne({ _id: req.params.id, userId });
        return res.status(200).json(chat);
    }
    catch (err) {
        console.log("Error fetching user chats:", err);
        return res.status(500).send("Internal Server Error while fetching user chats");
    }
})

app.put('/api/chat/:id', legacyRequireAuth, async (req, res) => {
    const userId = req.auth().userId;

    const { question, answer, img } = req.body;

    const newItem = [
        ...(question ? [{ role: "user", parts: [{ text: question }], ...(img && { img }) }] : []),
        { role: "model", parts: [{ text: answer }] }
    ]

    try {

        const updateChat = await Chat.updateOne({ _id: req.params.id, userId }, {
            $push: {
                history: {
                    $each: newItem,
                }
            }
        })

        const chat = await Chat.findOne({ _id: req.params.id, userId });
        return res.status(200).json(chat);
    }
    catch (err) {
        console.log("Error fetching user chats:", err);
        return res.status(500).send("Internal Server Error while fetching user chats");
    }
})

// app.use((err, req, res, next) => {
//     console.log("Error:", err);
//     res.status(500).send("Unathorized request");
// })

app.listen(PORT, () => {
    connect();
    console.log(`Server is running on http://localhost:${PORT}`);
}
)
