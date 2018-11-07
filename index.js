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

app.listen(5000, () => {
    console.log('Приклад застосунку, який прослуховує 5000-ий порт!');
});
