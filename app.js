const express = require('express')
const app = express()
const port = 3000 
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/yelp_camp')
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')




//SCHEMA SETUP
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
})

let Campground = mongoose.model('Campground', campgroundSchema)

// Campground.create(
//     {
//         name: "Salmon creek", 
//         image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"
    
//     }, (err, campground)=>{
//         if(err){
//             console.log(err)
//         } else {
//             console.log('NEWLY CREATED CAMPGROUND')
//             console.log(campground)
//         }
//     })

let campgrounds = [
    {name: "Salmon creek", image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
    {name: "San Francisco", image: "https://accelerator-origin.kkomando.com/wp-content/uploads/2016/03/camping.jpg"},
    {name: "Great Camp", image: "https://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"},
    {name: "Salmon creek", image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
    {name: "San Francisco", image: "https://accelerator-origin.kkomando.com/wp-content/uploads/2016/03/camping.jpg"},
    {name: "Great Camp", image: "https://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"},
    {name: "Salmon creek", image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
    {name: "San Francisco", image: "https://accelerator-origin.kkomando.com/wp-content/uploads/2016/03/camping.jpg"},
    {name: "Great Camp", image: "https://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"},
    {name: "Salmon creek", image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
    {name: "San Francisco", image: "https://accelerator-origin.kkomando.com/wp-content/uploads/2016/03/camping.jpg"},
    {name: "Great Camp", image: "https://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"}
]

app.get('/', (req, res) => {
    res.render('landing')
})

app.get('/campgrounds', (req, res) =>{
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds)=>{
        if(err){
            console.log(err)
        } else {
            res.render('campgrounds', {campgrounds: allCampgrounds})
        }
    })
})

app.post('/campgrounds', (req, res) => {
    //get data from the form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name: name, image: image}
    // campgrounds.push(newCampground)

    //create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated)=>{
        if(err){
            console.log(err)
        } else {
            //redirect back to campgrounds page
            res.redirect('/campgrounds')
        }
    })
})

// app.delete('/campgrounds', (req, res)=>{
//     res.send('it deleted!')
// })

app.get('/campgrounds/new', (req, res) =>{
    res.render('new.ejs')
})

app.listen(port, () => console.log(`The YelpCamp server has started`))