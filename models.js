const mongoose = require('mongoose')


const ReactionSchema = new mongoose.Schema({
    score : String
})



const Reactionmodel = mongoose.model("main",ReactionSchema)

module.exports = Reactionmodel