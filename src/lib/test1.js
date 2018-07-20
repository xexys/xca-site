import {getLib} from '@/app';


let test2;


export const init = async (params) => {
    test2 = await getLib('test2');

    console.log('test1 inited', params);
};


initLib(['core', 'user'], () => (app, config) => {
    app.use((ctx) => {
        ctx.body = 1;
    });
});

