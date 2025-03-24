const mongoose = require ("mongoose")

const addressSchema = new mongoose.Schema({

    street: String,
    city: String,
    pincode: Number
})

const userSchema = new mongoose.Schema({

    name: String,
    age : {
        type: Number,
        min: 1,
        max: 120,
        validate : {
            validator: v => v % 2 === 0,
            message: props => `{${props.value} is not an even number}`
        },
    },

    address: addressSchema,

    email : { type: String,
        minLength: 10,
        required: false,
        lowercase:true
    },
    createdAt:{
        type : Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    bestFriends: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String]
})

// simple functions on schemas
userSchema.methods.sayHi = function() {
    console.log('Hi! My name is '+this.name)
}

// create a new function findByName
userSchema.statics.findByName = function(name) {
    return this.where({name: new RegExp(name,"i")})
}

//create a query function byName
userSchema.query.byName = function(name){
    return this.where({name: new RegExp(name,"i")})
}

//Creates a virtual type with the given name
userSchema.virtual("namedemail").get(function(){
    return `${this.name}\t email: ${this.email}`
})

//middleware (excecute before save)
userSchema.pre("save", function (next){
    this.updatedAt = Date.now()
    next()
})

userSchema.post("save", function(doc, next){
    doc.sayHi()
    next()
})

module.exports = mongoose.model("User", userSchema);