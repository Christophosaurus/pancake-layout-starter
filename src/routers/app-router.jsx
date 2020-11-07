import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from '../components/layout/navigation/navbar';
import { Footer } from '../components/layout/navigation/footer';
import { Landing }from '../components/pages/landing';
import { UseForm }from '../components/pages/use-form';

export function AppRouter() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />

        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/use-form" component={UseForm} exact />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
