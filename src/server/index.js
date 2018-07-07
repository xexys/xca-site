// @flow

import express from 'express';
import path from 'path';


const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use('/static', express.static(path.join(__dirname, '../client')));

// $FlowFixMe: ХЗ что это такое, надо разбираться :(
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Example app listening on port 3000!');
});
