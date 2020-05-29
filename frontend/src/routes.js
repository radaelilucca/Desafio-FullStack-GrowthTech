import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import NewsFeed from './pages/NewsFeed'
import SelectCompanies from './pages/SelectCompanies'
import UserProfile from './pages/UserProfile'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />   

        <Route path="/companies" component={SelectCompanies} />
        <Route path="/user/:id/profile" component={UserProfile} />
        <Route path="/feed" component={NewsFeed} />
      </Switch>
    </BrowserRouter>
  );
}