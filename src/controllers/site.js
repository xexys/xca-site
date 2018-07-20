// @flow

import {getGamesAsync} from '@/resolvers/xca/games';


export const siteIndex = async (ctx): Promise<void> => {
    const games = await getGamesAsync();

    // throw new Error('test');

    res.render('index', {
        state: {
            games,
        },
    });
};


export const siteAbout = (ctx): void => {
    res.render('about');
};
