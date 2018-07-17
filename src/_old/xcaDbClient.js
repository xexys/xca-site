// @flow

import {connect} from '@/lib/xcaDbClient';


export const init = (config: Object) => {
    // TODO: Сделать нормальный disconnect
    return connect(config.connectionString);
};
