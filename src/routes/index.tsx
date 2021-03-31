import React, { lazy, Suspense } from 'react';
import { PageLoader } from '../components/Loader';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import PageRoute from './Route';
import PageLayout from '../layout/PageLayout';

const Index = lazy(() => import('../pages'));
const Interpretation = lazy(() => import('../pages/Interpretation'));

const Routes: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={ <PageLoader /> }>
                <Switch>
                    <PageRoute exact={true} path="/" component={Index} layout={PageLayout} />
                    <PageRoute exact={true} path="/interpretation" component={Interpretation} layout={PageLayout} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Routes;