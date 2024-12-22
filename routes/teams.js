const express=require("express");
const router = express.Router();



router.get('/current', (req, res) => {
    res.render('teams/current');
});

router.get('/team2021-22', (req, res) => {
    res.render('teams/team2021-22');
});

router.get('/team2022-23', (req, res) => {
    res.render('teams/team2022-23');
});

router.get('/team2023-24', (req, res) => {
    res.render('teams/team2023-24');
});

module.exports=router;