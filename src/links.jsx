import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Holder from './holder';
import Rater from './page2';
import Buy from './page3';

class Main extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Holder} />
            <Route path='/Rater' component={Rater} />
            <Route path='/Buy' component={Buy} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default Main;
