import { observable, configure, autorun, reaction, when } from 'mobx';

configure({ enforceActions: 'never' });

const person = observable({

  // observable state
  firstName: 'Bob',
  lastName: 'Smith',

  // computed
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
});

// autorun(function outputFirstName() {
//   console.log(person.fullName);
// });

// const disposer = reaction(() => person.firstName, function outputFirstName(firstName) {
//   console.log('reaction: ', firstName);
// });

when(() => person.firstName === 'Sally', function outputFirstName() {
  console.log(person.fullName);
});

// outputFirstName();

person.firstName = 'Sally';

// disposer();

person.firstName = 'Timmy';

person.firstName = 'Sally';
