// @flow

import {MongoClient} from 'mongodb';


let client = null;


export const setup = async (connectionString: string): Promise<void> => {
    client = await MongoClient.connect(connectionString, {useNewUrlParser: true});
};


export const teardown = () => {
    if (client) {
        client.close();
    }
};


// $FlowFixMe invariant ???
export const getDb = () => client.db();
