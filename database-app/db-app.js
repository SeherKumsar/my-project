"use strict"; // require edilen yerde require varsa kullanılır
const express = require("express");
const pool = require("./helper/postgresql-connection");

const app = express();

app.get('/query', (req, res) => {
    pool.query("SELECT NOW()", (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error executing query');
        } else {
            res.send('Query result: ' + JSON.stringify(result.rows));
        }
        pool.end();
    });
});

app.listen(2000, () => {
    console.log('App is listening on port 2000');
});