const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('Hello, I am Rhea!');
});

router.use('/users', require('./users'));

module.exports = router;