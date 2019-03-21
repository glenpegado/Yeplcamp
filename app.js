const express = require('express')
const app = express()
const port = 3000 
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('landing')
})

app.get('/campgrounds', (req, res) =>{
    let campgrounds = [
        {name: "Salmon creek", image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
        {name: "San Francisco", image: "https://accelerator-origin.kkomando.com/wp-content/uploads/2016/03/camping.jpg"},
        {name: "Great Camp", image: "https://onmilwaukee.com/images/articles/ca/camping/camping_fullsize_story1.jpg?20080730123152"}
    ]

    res.render('campgrounds', {campgrounds: campgrounds})
})


app.post('/campgrounds', (req, res) => {
    res.send('You hit the POST route')
})

app.get('/campgrounds/new', (req, res)=>{
    res.render('new.ejs')
})

app.listen(port, () => console.log(`The YelpCamp server is listening on ${port}`))