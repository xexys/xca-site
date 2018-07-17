// @flow

import type {$Request, $Response} from 'express';


import {getGamesAsync} from '@/resolvers/xca/games';


export const siteIndex = async ({req, res}): Promise<void> => {
    const games = await getGamesAsync();

    // throw new Error('test');

    res.render('index', {
        state: {
            games,
        },
    });
};


export const siteAbout = ({req, res}): void => {
    res.render('about');
};
