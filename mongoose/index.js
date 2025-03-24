const mongoose = require ('mongoose');
const User = require('./user');

main().catch(err => console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/testdbs')
    console.log("db server is running !!")

    const user = await User.findByName("kevin")
    console.log(user)


}