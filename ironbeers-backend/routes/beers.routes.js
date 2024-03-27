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


module.exports = router;
