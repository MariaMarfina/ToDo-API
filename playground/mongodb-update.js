//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server')

	/* db.collection('Todos').findOneAndUpdate({
	 	_id: new ObjectID('5a72c57f08c24d0fdb1b8da3')
	}, {
	 	$set: {
	 		completed: true
	 	}
	}, {
	 	returnOriginal: false
	}).then((result) => {
	 	console.log(result)
	}); */

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a71e4c4903b5a32dce2ae46')
	}, {
		$set: {
			name: 'Mari'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result)
	});

	// db.close();
});