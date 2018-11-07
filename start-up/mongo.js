const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb://crud:Forusu44@ds024548.mlab.com:24548/crud', {useNewUrlParser: true} )
        .then(() =>  console.log('connection successful'))
        .catch((err) => console.error(err));
};

