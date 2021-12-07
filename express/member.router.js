const express = require('express');

const router = express.Router(); // router是express的子对象，也有use/all/method等方法

router.get('/list', (req, res) => {
    res.json({
        list: [
            {
                id: 001,
                name: 'Node'
            }
        ]
    })
})

module.exports = router