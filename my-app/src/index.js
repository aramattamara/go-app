import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from "./Hello";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="container">
          <div className="row">
              <div className="col">

                  <Hello msg="hi"/>
              </div>
          </div>
      </div>

  </React.StrictMode>
);
