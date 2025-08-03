import express from 'express';
import ImageKit from 'imagekit';
import cors from 'cors';

const app = express();
const PORT = 3000;

import dotenv from 'dotenv';
dotenv.config();

app.use(cors({
    origin: process.env.CLIENT_URL
}))


var imagekit = new ImageKit({
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT
});

app.get('/api/upload', (req, res) => {
    const { token, expire, signature } = imagekit.getAuthenticationParameters();
    res.send({ token, expire, signature, publicKey: process.env.IMAGEKIT_PUBLIC_KEY });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
)
