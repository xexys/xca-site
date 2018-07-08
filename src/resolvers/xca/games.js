// @flow

import {getCollection} from '@/lib/xcaDbClient';


export const getGamesAsync = () => getCollection('games').find().toArray();
