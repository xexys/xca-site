// @flow

import type {$Request, $Response} from 'express';

import {getGamesAsync} from '@/server/resolvers/xca/games';


export const siteIndex = async (req: $Request, res: $Response): Promise<void> => {
    const games = await getGamesAsync();

    // throw new Error('TEst!');

    res.render('index', {
        state: {
            games,
        },
    });
};


export const siteAbout = (req: $Request, res: $Response): void => {
    res.render('about');
};
