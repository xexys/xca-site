// @flow

import express from 'express';
import path from 'path';
import serializeJs from 'serialize-javascript';

import {connect, disconnect} from '@/server/lib/xcaDbClient';
import router from '@/server/router';


const safeJsonStringify = (obj: any): string => serializeJs(obj, {json: true});


const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Хелперы для pug шаблонов
app.locals.safeJsonStringify = safeJsonStringify;


app.use('/static', express.static(path.join(__dirname, '../client')));
app.use('/', router);


(async () => {
    await connect('mongodb://localhost:27017/xca');

    process.on('SIGINT', () => {
        disconnect().then(() => {
            // eslint-disable-next-line no-console
            console.log('MongoDb connection disconnected through app termination');
            process.exit(0);
        });
    });


    app.listen(3000, () => {
        // eslint-disable-next-line no-console
        console.log('Example app listening on port 3000!');
    });
})();

