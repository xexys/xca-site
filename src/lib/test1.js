import {getLib} from '@/app';


let test2;


export const init = async (params) => {
    test2 = await reqistry.getLib('test2');

    console.log('test1 inited', params);
};
