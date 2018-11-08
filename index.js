const express = require('express');
const app = express();

// load route
const post = require('./routes/post');


require('./start-up/body-parser')(app);


require('./start-up/mongo')();

app.use('/api/post', post);


if(process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`port ${PORT}`);
});
