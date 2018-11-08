const mongoose = require('mongoose');

if(process.env.NODE_ENV === 'production') {
    module.exports = () => {
        mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true} )
            .then(() =>  console.log('connection successful'))
            .catch((err) => console.error(err));
    };
} else {
    module.exports = () => {
        mongoose.connect('', {useNewUrlParser: true} )
            .then(() =>  console.log('connection successful'))
            .catch((err) => console.error(err));
    };
}


