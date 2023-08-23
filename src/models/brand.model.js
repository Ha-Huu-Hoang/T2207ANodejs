const mongoose = require("mongoose");
const brand_schema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique: true
    },
    brand:[{type:mongoose.Schema.Types.ObjectId,ref:'Brand'}]
})

module.exports = mongoose.model("brand",brand_schema);