const router = require("express").Router();
const Beer = require('../models/Beer.model')

router.get("/beers", (req, res) => {
  Beer.find()
  .then((allBeers)=> {
    console.log(allBeers)    
    res.json(allBeers)
  })
  .catch((err)=> {
    console.log(err)
    res.json(err)
  })
});

router.get('/beers/:id', (req, res)=> {
  Beer.findById(req.params.id)
  .then((beer)=> {
    console.log(beer)
    res.json(beer)
  })
  .catch((err)=> {
    res.json(err)
  })
})
// to write a json obj on a post request on postman we use '' both on keys and values!
// Strings in JSON must be written in double quotes. {"name":"John"}
router.post('/beers', (req, res)=> {
  Beer.create(req.body)
  .then((beerCreated)=> {
    console.log(beerCreated)
    res.json(beerCreated)
  })
  .catch((err)=> {
    res.json(err)
  })
})

router.put('/beers/:id', (req, res)=> {
  
  Beer.findByIdAndUpdate(req.params.id, req.body,{new:true})
  .then((updatedBeer)=> {
    console.log(updatedBeer)
    res.json(updatedBeer)
  })
  .catch((err)=> {
    res.json(err)
  })
})

module.exports = router;
