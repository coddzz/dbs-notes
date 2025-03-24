const mongoose = require ('mongoose');
const User = require('./user');

main().catch(err => console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/testdbs')
    console.log("db server is running !!")

    const user = await User.findOne({name:"sarath"})
    user.save();
    console.log(user)
    
    const userA = await User
        .where("name")
        .equals("abhijith")
        .limit(1)
        .populate("bestFriends")
        console.log(userA.namedemail)

    console.log(userA)
}