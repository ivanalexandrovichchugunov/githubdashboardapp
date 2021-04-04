import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import repositoriesPage from '../pages/RepositoriesPage/reducers';
import repositoryPage from '../pages/RepositoryPage/reducers';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['repositoriesPage, repositoryPage'],
    transforms: []
};

const rootReducer = combineReducers({ repositoriesPage, repositoryPage });

export default persistReducer(persistConfig, rootReducer);