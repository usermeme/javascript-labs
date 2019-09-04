import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import {
  Header,
  HomeScreen,
  LabScreen
} from './containers';

const App = () => (
  <div className="App">
    <Header />
    <main className="wrap">
      <div className="container">
        <Switch>
          <Route exact path="/Home" component={HomeScreen} />
          <Route exact path="/Labs" component={LabScreen} />
          <Route exact path="/Labs/:labName" component={LabScreen} />
          {/* <Route exact path="/Lections" component={LectionScreen} />
          <Route exact path="/Lections/:lectionName" component={LectionScreen} /> */}
          <Redirect to="/Home" />
        </Switch>
      </div>
    </main>
  </div>
);

export default App;
