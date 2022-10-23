const mongoose = require('mongoose');
const processEnv = require('../../process.env')

const dbURI = processEnv.URI;
try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./workouts');
require('./users');

