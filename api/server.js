import express from 'express';

const PORT = process.env.PORT || 6969;
const app = express();

app.get('/api', (req, res) => {
    res.status(200).json({message: 'hello world!! Im from the backend!!!'})
})

app.listen(PORT, (req, res) => {
    console.log(`Server running on ${PORT}`)
})

// next step is to add docker :D 