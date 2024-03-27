const {Schema, model} = require('mongoose')  // require('mongoose') is an object

const beerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        maxLength: 50
    },
    attenuation_level: {
        type: Number,
        min: 0,
        max: 100
    },
    image_url: {
        type: String,
        default: "https://images.punkapi.com/v2/keg.png"
    },
    contributed_by: {
        type: String
    },
    is_alchoholic: {
        type: Boolean,
        default: true
    }
})

const Beer = model('Beer', beerSchema) // the name of the collection on mongoDB is beers, so the
// name of the model is with capital singular, namely Beer

module.exports = Beer