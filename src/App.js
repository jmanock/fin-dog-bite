import React from 'react';
import './App.css';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Components/PageComponents/Navbar';
import About from './Components/PageComponents/About';
import Questions from './Components/PageComponents/Questions';
import Privacy from './Components/PageComponents/Privacy';
import Terms from './Components/PageComponents/Terms';
import Rater from './Components/PageComponents/Rater';
import Holder from './Components/Holder';
import Main from './Components/PageComponents/Main';
import Footer from './Components/PageComponents/Footer';

const App = () =>{
  return(
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/About' component={About} />
          <Route path='/Questions' component={Questions} />
          <Route path='/Privacy' component={Privacy} />
          <Route path='/Terms' component={Terms} />
          <Route path='/Quote' component={Holder} />
          <Route path='/Rater' component={Rater} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
