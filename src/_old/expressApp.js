// @flow

import express from 'express';
import path from 'path';
import serializeJs from 'serialize-javascript';

import type {$Application} from 'express';

// import router from '@/lib/router';

import {ROOT_PATH} from '../constants';


const safeJsonStringify = (obj: any): string => serializeJs(obj, {json: true});


const configure = async (app: $Application) => {
    app.set('view engine', 'pug');
    app.set('views', path.join(ROOT_PATH, 'server/templates'));

    // Хелперы для pug шаблонов
    // eslint-disable-next-line no-param-reassign
    app.locals.safeJsonStringify = safeJsonStringify;


    app.use('/static', express.static(path.join(ROOT_PATH, 'client')));
    // app.use('/', router);
};


export default configure;
