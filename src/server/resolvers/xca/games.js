// @flow

import {getCollection} from '@/server/lib/xcaDbClient';


export const getGamesAsync = () => getCollection('games').find().toArray();
