MONGO DB Notes
( Examples )
> show dbs
> use appdb
> db.users.insertOne ({name:”kevin”});
> db.users.find()
> db,users.insertOne ({name:”kevin”, age:23, address:{ street: “xyz”, city: “tvpm”}, Hobbies: Reading});
> db.users.insertMany([{name:”kevin”, }, {name: “abhi”}, {name: “diya”}]);
> db.users.find().limit(2)
> db.users.find().sort ({name: 1});		-- Assending Order
> db.users.find().sort({name: -1});		-- Desending Order
>db.users.find().sort({name: 1}).limit(3) 	-- Sorting and Limiting
> db.users.find().skip(1)
> db.users.find({name:”kevin”});
> db.users.find({__id:0});		-- show database without id
> db.users.find({name:”kevin”})
> db.users.find({name: {$eq : ‘kevin’}});		-- equal to
> db.users.find({name: {$ne : ‘kevin’}});		--not equal to
> db.users.find({age: {$gt : 23}});			--greater than 
> db.users.find({age: {$gte : 23}});			--greater than equal to
> db.users.find({age: {$lt : 25}});			--less than 
> db.users.find({age: {$lte : 25}});			--less than equal to
> db.users.find({name: {$in : [‘kevin’,’Dave’]}});	-- list datas of kevin and dave 
> db.users.find({name: {$nin : [‘kevin’,’Dave’]}});	-- not in
> db.users.find({age: {$exists: true}});		-- if exists
> db.users.find({age: {$exists: false}});		-- if not exists

> db.users.find({$and: [{age:24},{name:”kevin”}]});			-- AND Operator
> db.users.find({$or: [{age:24},{name:”kevin”}]});			-- OR Operator
> db.users.find({age: {$not: {$lte: 25}});				-- NOT Operator


> db.users.find(“address.city”: “New York”});
> db.users.find({$expr: {$gt : [“$debt”,”$balance”]}});	-- Compare debt and balance
> db.users.findOne({$expr: {$gt : [“$debt”,”$balance”]}});  	
> db.users.countDocuments({$age: {$gt: 23}});		-- count total no of datas

> db.users.updateOne({name:”kevin”},{$set: {name: “abhijith”}}); 		-- update data
> db.users.updateOne({_id:objectId(“....3956”)},{$set: {name: “anju”}}); 	-- update user id
> db.users.find({_id:objectId(“....3956”)});
> db.users.updateOne({_id:objectId(“....3956”)},{$inc: {age:27}});		-- increment $inc
> db.users.updateOne({_id:objectId(“....3956”)},{$rename: {balance: “remaining”}});	-- Rename
> db.users.updateOne({_id:objectId(“....3956”)},{$push: {hobbies:”Reading”}});	-- update(add data)
> db.users.updateOne({_id:objectId(“....3956”)},{$pull: {hobbies:”Gaming”}});		--update (remove data)
> db.users.updateOne({_id:objectId(“....3956”)},{$unset: {age:””}});

> db.users.updateMany({address: {$exists: true}},{$unset: {address:””}});		-- update multiple datas

> db.users.replaceOne({name:”kevin”},{name:”hari”});	-- Replace all data to name. only name exists
> db.users.deleteOne({name:”abhijith”});			-- delete a data
> db.users.deleteMany({age: {$exists: false}});		-- delete multiple datas

--------------------------------------------------------------------------------------------------------------------------------------------------------------------

> show dbs
> show collections
> db.dropDatabase()


https://github.com/coddzz




