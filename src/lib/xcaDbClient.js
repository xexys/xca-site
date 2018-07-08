// @flow

import MongoClient from 'mongodb';


let instance = null;


export const connect = (connectionString: string) => (
    MongoClient
        .connect(connectionString, {useNewUrlParser: true})
        .then(client => {
            instance = client;
        })
);


export const disconnect = () => instance.close();


export const getDb = () => instance.db();


export const getCollection = (name: string) => getDb().collection(name);
