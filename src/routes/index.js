import React from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';
import Home from '../component/home'

const NotFound =()=>{
  return(
    <h1>NOT FOUND</h1>
  )
}
const Routes = () => {
  const isAuthenticated = true;
  
 return (
  <Switch>
    <Route
        exact
        path="/"
        name="Home"
        render={(props) =>
          isAuthenticated ? (
            <Home {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
    />
    <Route
        exact
        path="*"
        name="Not found"
        render={(props) =>
          (
            <NotFound />
          )
        }
    />
  </Switch>
  )
};

export default Routes;