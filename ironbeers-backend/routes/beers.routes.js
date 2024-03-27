const router = require("express").Router();
const Beer = require('../models/Beer.model')

router.get("/beers", (req, res) => {
  Beer.find()
  .then((allBeers)=> {
    console.log(allBeers)
    res.json(allBeers)
  })
});

module.exports = router;
