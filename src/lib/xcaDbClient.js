// @flow

import MongoClient from 'mongodb';


let instance = null;


const connect = (connectionString: string): Promise<void> => (
    MongoClient
        .connect(connectionString, {useNewUrlParser: true})
        .then(client => {
            instance = client;
        })
);

// $FlowFixMe invariant?
const disconnect = () => instance.close();


export const init = (config: Object) => {
    // TODO: Сделать нормальный disconnect
    return connect(config.connectionString);
};


export const getDb = () => instance.db();


export const getCollection = (name: string) => getDb().collection(name);
