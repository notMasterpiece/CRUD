const express = require('express');
const app = express();

// load route
const post = require('./routes/post');


require('./start-up/body-parser')(app);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


require('./start-up/mongo')();

app.use('/api/post', post);


if(process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}


app.listen(5000, () => {
    console.log('Приклад застосунку, який прослуховує 5000-ий порт!');
});
