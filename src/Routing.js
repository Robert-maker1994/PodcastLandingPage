import React, {lazy} from 'react'
import success from './Success';
import { Route, Switch } from 'react-router-dom';

const Success = lazy(() => import('./Success'));

export const successRoute = '/Succes';

export default function Routing() {
    return (
        <div>
             
      <Switch>
      <Route  path={success} exact component={Success}/>
    </Switch>
        </div>
    )
}
