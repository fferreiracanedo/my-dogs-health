import { Route, Switch, Redirect } from 'react-router-dom';
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
import RegisterFinal from '../pages/RegisterFinal';
import DashboardDoctor from '../pages/DashboardDoctor';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { updateThunk } from '../store/modules/api/thunks';

import Contact from '../pages/Contact';

const Routes = () => {
  const toast = useToast();
  const user = useSelector(state => state.user);
  const msg = useSelector(state => state.msg);
  const dispatch = useDispatch();


  console.log("token",user);
  
  useEffect(() => {
    if (msg.toast) {
      toast(msg.toast);
    }
  }, [msg]);

  useEffect(() => {
    if (user.status==="updating" && user.userdata && user.userdata.token) {
      console.log("updating",user.userdata.token)
      dispatch(updateThunk(user.userdata.token));
    }
  }, [user]);

  return (
    <Switch>
      <Route exact path="/">
        {user.logged ? <Redirect to="/dashboard" /> : <LandingPage />}
      </Route>
      <Route exact path="/register">
        {user.logged ? (
          <Redirect to="/dashboard" />
        ) : user.registered ? (
          <Redirect to="/login" />
        ) : (
          <RegisterPage />
        )}
      </Route>
      <Route exact path="/login">
        {user.logged ? <Redirect to="/dashboard" /> : <LoginPage />}
      </Route>
      <Route exact path="/dashboard">
        {!user.logged ? <Redirect to="/" /> : user.userdata && user.userdata.status==="incomplete" ? <Redirect to="/register/final" /> :  <Dashboard />}
      </Route>
      <Route exact path="/contact">
        <Contact />
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
      <Route path="/register/final">
        {user.userdata && user.userdata.status==="incomplete" ? <RegisterFinal /> : <Redirect to="/dashboard" />}
      </Route>
      <Route path="/dashboard/doctor">
        <DashboardDoctor />
      </Route>
    </Switch>
  );
};
export default Routes;
