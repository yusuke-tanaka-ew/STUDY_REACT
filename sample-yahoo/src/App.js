import React from 'react';
import {
  Route,Link
} from 'react-router-dom';

import Ranking from './components/Ranking'

function App() {
  return (
    <div className='App'>
      <ul>
        <li><Link to= '/all'>ALL CATEGORY</Link></li>
        <li><Link to= '/category/2052'>PC AND OTHER SUPPRIES</Link></li>
        <li><Link to= '/category/10002'>BOOK ,MAGAZINE,COMMIC</Link></li>
      </ul>

      <Route path='/all' component={Ranking} />
      <Route path='/category/:id'
        render={
          ({match}) => <Ranking categoryId = {match.params.id} />
        }
      />
    </div>
  );
}

export default App;
