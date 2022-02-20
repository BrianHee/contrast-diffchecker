import express from 'express';

// const router = express.Router();

export const getIndex = (req, res) => {
    try {
        console.log('This works!');
 
        res.status(200);
        res.send('Index');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getDiff = (req, res) => {
    const submission = req.body;

    try {
        console.log('diff checked');

        res.status(200);
        res.send('Diff');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};