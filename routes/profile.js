const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({string: 'this is profile get'});
})

module.exports = router;