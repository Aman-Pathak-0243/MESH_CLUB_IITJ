const express=require("express");
const router = express.Router();


router.get('/upcoming', (req, res) => {
    res.render('upcoming-events');
});

router.get('/past', (req, res) => {
    res.render('past-events');
});

module.exports=router;