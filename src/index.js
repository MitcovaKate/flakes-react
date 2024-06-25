import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Scene from './scene/Scene';
import reportWebVitals from './reportWebVitals';
import ReactionCounter from './sample/reactionCounter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   /* <ReactionCounter/>*/
    { <Scene /> }
  </React.StrictMode>
);

reportWebVitals();
