import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import Head from './components/chapters/head/Head';
import UserPage from './components/pages/UserPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Head/>
        <UserPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
