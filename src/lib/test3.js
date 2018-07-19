import {getLib, AppLib} from '@/app';


class Test3 extends AppLib {
    async init(params) {
        return getLib('test1').then(lib => {
            this._test1 = lib;

            console.log('test3 inited', params);
        });
    }
}


export default Test3;
