const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('Hello, I am Rhea!');
});

module.exports = router;