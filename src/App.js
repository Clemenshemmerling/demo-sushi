import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ShopPage from './pages/ShopPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-dark">
      <BrowserRouter>
        <PublicLayout>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/menu' component={MenuPage} />
            <Route exact path='/shop' component={ShopPage} />
          </Switch>
        </PublicLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
