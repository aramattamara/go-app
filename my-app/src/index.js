import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from "./AppClass";
import Hello from "./Hello";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className="container">
          <div className="row">
              <div className="col">
                  <AppClass msg="Hello"/>
                  <Hello />
              </div>
          </div>
      </div>

  </React.StrictMode>
);
