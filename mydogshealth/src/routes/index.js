import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard';
import Cuidados from '../pages/Cuidados';
import RegisterFinal from '../pages/RegisterFinal';
import Contact from '../pages/Contact';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { userdataThunk, dogdataThunk, reportdataThunk } from '../store/modules/api/thunks';

const Routes = () => {

  const toast = useToast();
  const user = useSelector(state => state.user);
  const msg = useSelector(state => state.msg);
  const dogs = useSelector(state => state.dogs);
  const reports = useSelector(state => state.reports);
  const dispatch = useDispatch();
 
  useEffect(() => {
    if (msg.toast) {
      toast(msg.toast);
    }
  }, [msg]);

  useEffect(() => {
    if (user.status==="updating" && user.profile && user.profile.token) {
      console.log("updating user",user.profile.token)
      dispatch(userdataThunk(user.profile.token));
    }
  }, [user]);

  useEffect(() => {
    if (dogs.status==="updating" && user.profile && user.profile.token) {
      console.log("updating dogs",user.profile.token)
      dispatch(dogdataThunk(user.profile.token));
    }
  }, [dogs]);

  useEffect(() => {
    if (reports.status==="updating" && user.profile && user.profile.token) {
      console.log("updating reports", user.profile.token)
      dispatch(reportdataThunk(user.profile.token));
    }
  }, [reports]);

  return (
    <Switch>
      <Route exact path="/">
        {user.logged ? <Redirect to="/dashboard" /> : <LandingPage />}
      </Route>
      <Route exact path="/register">
        {user.logged ? <Redirect to="/dashboard" /> : user.registered
        ? <Redirect to="/login" /> : <RegisterPage />}
      </Route>
      <Route exact path="/register/final">
        {user.profile && user.profile.status==="incomplete" ? <RegisterFinal /> : <Redirect to="/dashboard" />}
      </Route>
      <Route exact path="/login">
        {user.logged ? <Redirect to="/dashboard" /> : <LoginPage />}
      </Route>
      <Route exact path="/dashboard">
        {!user.logged ? <Redirect to="/" /> : user.profile && user.profile.status==="incomplete" 
                      ? <Redirect to="/register/final" /> :  <Dashboard />}
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/dashboard/cuidados">
      {!user.logged ? <Redirect to="/" /> : user.profile && user.profile.status==="incomplete" 
                      ? <Redirect to="/register/final" /> :  <Cuidados />}
      </Route>
      <Route path="/dashboard/cuidados/:id">
      {!user.logged ? <Redirect to="/" /> : user.profile && user.profile.status==="incomplete" 
                      ? <Redirect to="/register/final" /> :  <Cuidados />}
      </Route>
      <Route path="*">
        {user.logged ? <Redirect to="/dashboard" /> : <LandingPage />}
      </Route>

    </Switch>
  );
};
export default Routes;
