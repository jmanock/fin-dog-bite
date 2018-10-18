import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HolderTest from '../Test/HolderTest';
import RatesTest from '../Test/RatesTest';
import BuyTest from '../Test/BuyTest';

const Main = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HolderTest} />
        <Route path='/RatesTest' component={RatesTest} />
        <Route path='/BuyTest' componet={BuyTest} />
      </Switch>
    </BrowserRouter>
  )
}
export default Main;


// <Route exact path='/' component={Holder} />
// <Route path='/Rates' component={Rates} />
// <Route path='/Buy' component={Buy} />
