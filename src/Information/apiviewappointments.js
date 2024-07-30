const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');

router.get('/:item_valueid', async (req, res) => {
    const { item_valueid } = req.params;
    connection.query('SELECT * FROM appointments WHERE idclient = ?', [item_valueid], async (err, results) => {
        if (err) {
            console.log("ERROR " + err.message);
            return res.status(500).json({ err: err.message });
        }else{
            res.status(200).json(results);
        }
    });
});

module.exports = router;
