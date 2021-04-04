import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../routes/routeNames';
import HomePage from '../pages/HomePage/components/HomePage';
import RepositoriesContainer from '../pages/RepositoriesPage/containers/RepositoriesContainer';
import RepositoryPageContainer from '../pages/RepositoryPage/containers/RepositoryPageContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.REPOSITORIES} component={RepositoriesContainer} />
            <Route exact path={ROUTES.REPOSITORY} component={RepositoryPageContainer} />
            <Redirect from='*' to='/' />
        </Switch>
    );
};

export default React.memo(Routes);