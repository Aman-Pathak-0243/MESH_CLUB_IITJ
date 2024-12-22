const express = require('express');
const path = require('path');
const app = express();
const events = require("./routes/events");
const teams = require("./routes/teams");

// Middleware

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use("/events",events);
app.use("/teams",teams);

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/suggestion', (req, res) => {
    res.render('suggestion');
});



// app.get('/events/upcoming', (req, res) => {
//     res.render('upcoming-events');
// });

// app.get('/events/past', (req, res) => {
//     res.render('past-events');
// });


// app.get('/teams/current', (req, res) => {
//     res.render('teams/current');
// });

// app.get('/teams/team2021-22', (req, res) => {
//     res.render('teams/team2021-22');
// });

// app.get('/teams/team2022-23', (req, res) => {
//     res.render('teams/team2022-23');
// });

// app.get('/teams/team2023-24', (req, res) => {
//     res.render('teams/team2023-24');
// });

app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/popular',(req,res)=>{
    res.render('popular-guests');
});
app.get('/pic',(req,res)=>{
    res.render('pic');
});
app.get("/apply_guest", (req, res) => {
  res.render("apply_guest");
});
// app.get("/apply-guest", (req, res) => {
//   res.render("apply_guest");
// });


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
