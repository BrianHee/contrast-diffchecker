// no cors, mongoose

import express from 'express';
import bodyParser from 'body-parser';

import indexRouter from './routes/index.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

const PORT = process.env.PORT || 5000;

// normalize port?
// server.listen vs app.listen
// app.set('port', PORT); not necessary unless get('port')

app.listen(PORT, (error) => {
    if (error) {
        console.log(`${error} did not connect`)
    }
    console.log(`Server Running on Port: http://localhost:${PORT}`)
});