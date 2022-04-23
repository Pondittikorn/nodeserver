const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "Single";
//Add Variables
var user_list = [
    { name: "Nester", address: "BKK", birth_year: 2003},
    { name: "Darius", address: "PKT", birth_year: 1999},
    { name: "Daven", address: "CNX", birth_year: 2012}
];

//Add Logo
var logo = "images/JuekjuekHUB.svg"

//Add Content Fonts Variables
var contentfont1 = "Online Creative Community"
var contentfont2 = "By : Ittikorn Nitthavorn"

//Add Icons
var icon = [
    {img : "images/email.svg",
    bottom : "ittikorn.nitt@bumail.net"},

    {img : "images/facebook.svg",
    bottom : "PUNGPOND"},

    {img : "images/youtube.svg",
    bottom : "PUNGPOND"}
];

//Add Feature Bar Varibles
var feature = [
    {img : "images/programming.svg",
    top : "Programming",
    bottom : "Enjoy Coding and Playing HTML,CSS,JavaScripts"},

    {img : "images/ai-robot.jpg",
    top : "AI",
    bottom : "Enjoy Coding and Playing Python,ROS,Mechanict"}
];

//Set & Call EJS
app.set('view engine','ejs')

//Connect piblic folder
app.use(express.static('public'))

//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 

//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status,
    obj_user_list : user_list})
})

//Connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2', {logo : logo,
    obj_feature : feature,
    obj_icon : icon,
    contentfont1 : contentfont1, contentfont2 : contentfont2})
})

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})