// @flow

import type {$Request, $Response, NextFunction, Middleware} from 'express';

import express from 'express';
import {map} from 'ramda';

import * as siteControllers from '@/server/controllers/site';


const router = express.Router();

const wrapAsync = (fn: Middleware): Middleware => (req: $Request, res: $Response, next: NextFunction) => {
    // $FlowFixMe Хз в чем тут дело, надо разбираться :(
    Promise.resolve(fn(req, res, next)).catch(next);
};


const {siteIndex, siteAbout} = map(wrapAsync, siteControllers);


router.get('/', siteIndex);


router.get('/about', siteAbout);


export default router;
