// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import {
  observable, configure, autorun,
  makeAutoObservable, action, computed, runInAction
} from 'mobx';

// configure({ enforceActions: 'never' });

class Person {

  firstName = 'Bob';
  lastName = 'Smith';

  address = {
    street: '123 Oak Lane',
    city: 'Atlanta',
    state: 'GA'
  };

  constructor() {
    makeAutoObservable(this, {
      address: observable.struct,
    });
  }

  get fullName() {
    console.log('computed full name');
    return this.firstName.slice(0, 1) + ' ' + this.lastName;
  }

  updateFirstName(firstName) {
    this.firstName = firstName;
  }

}

const person = new Person();

const disposer = autorun(function outputFullName() {
  console.log(person.fullName);
});

person.updateFirstName('Billy');

// disposer();

// person.updateFirstName('Timmy');
