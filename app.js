const express = require('express');
const app = express();
const rootController = require('./routes/index')
const catsController = require('./routes/cat')
const dogsController = require('./routes/dogs')
const cats_and_dogs_controller = require('./routes/dogs_and_cats')

app.listen(3333, () => {
    console.log('Server running on port 3333');
});

app.use('/', rootController);
app.use('/cats', catsController);
app.use('/dogs', dogsController);
app.use('/cats_and_dogs', cats_and_dogs_controller);
