const mongoose = require ("mongoose")

const addressSchema = new mongoose.Schema({

    Street: String,
    City: String,
    Pincode: Number
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
        default: () => Date.now(),
        immutable: true
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

//virtual keyword use like a function
userSchema.virtual("namedemail").get(function(){
    return `${this.name}\t email: ${this.email}`
})

module.exports = mongoose.model("User", userSchema);