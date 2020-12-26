const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    //res.send('Hey there..');    //sends a String
    //res.sendStatus(400); //sends Status "Bad Request"
    //res.status(400).json({ success: false }); //sends status with data
    //res.json({ id: 3, msg: 'Wilkommen im Lager..' }); //express converts to String in background by itself
    res.status(200).json({ success: true, msg: 'Show all bootcamps'});
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `get bootcamp with id ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: 'Created new bootcamp' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Updated bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Deleted bootcamp ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});