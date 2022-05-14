import { Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard';
import Cuidados from '../pages/Cuidados';
import Consultas from '../pages/Consultas';
import Novidades from '../pages/Novidades';
import Faq from '../pages/Faq';
import Perfil from '../pages/Perfil';
import Docs from '../pages/Docs';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/dashboard/cuidados">
        <Cuidados />
      </Route>
      <Route exact path="/dashboard/consultas">
        <Consultas />
      </Route>
      <Route exact path="/dashboard/novidades">
        <Novidades />
      </Route>
      <Route exact path="/perfil">
        <Perfil /> 
      </Route>
      <Route exact path="/perfil/docs">
        <Docs />
      </Route>
      <Route exact path="/perfil/faq">
        <Faq />
      </Route>
    </Switch>
  );
};
export default Routes;