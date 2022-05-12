import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
};
export default Routes;
