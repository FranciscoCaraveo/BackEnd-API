const express = require("express");
const router = express.Router();
const { pool } = require("./db");

router.get("/", function (req, res) {
    res.send("Get Request");
});

router.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (error, restult) => {
        if(error){
            console.error('Error quering db:', error);
            return res.status(500).json({error: 'Error Database'});
        }
        res.json(restult);
    });
});

module.exports = router;