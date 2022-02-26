import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Page404 from "../components/Page404/Page404";
import Profile from "../components/Profile/Profile";
import RecoveryPassword from "../components/Password/RecoveryPassword";
import NewPassword from "../components/Password/NewPassword";
import Demo from "../components/Demo/Demo";

export const PATH = {
  LOGIN: '/login',
  REGISTRATION: '/registration',
  PAGE_404: '/404',
  PROFILE: '/profile',
  RECOVERY_PASS: '/recovery-password',
  NEW_PASS: '/new-password',
  DEMO: '/demo'
}

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PATH.DEMO}/>}/>
      {/*<Route path={'/'} element={<Redirect to={PATH.PRE_JUNIOR}/>}/>*/}
      <Route path={PATH.LOGIN} element={<Login/>}/>
      <Route path={PATH.REGISTRATION} element={<Registration/>}/>
      <Route path={PATH.PROFILE} element={<Profile/>}/>
      <Route path={PATH.RECOVERY_PASS} element={<RecoveryPassword/>}/>
      <Route path={PATH.NEW_PASS} element={<NewPassword/>}/>
      <Route path={PATH.DEMO} element={<Demo/>}/>
      <Route path={PATH.PAGE_404} element={<Page404/>}/>

      {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
      <Route path="*" element={<Page404/>}/>
    </Routes>
  );
};

export default RoutesComponent;