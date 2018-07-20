// @flow


import Koa from 'koa';
import config from './config';


const app = new Koa();


const a = new config.a();


app.context.a = a;


app.use((ctx) => {
    console.log(ctx.a);
});

