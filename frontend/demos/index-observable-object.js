import { observable, configure, autorun } from 'mobx';

configure({ enforceActions: 'never' });

const person = observable({
  firstName: 'Bob',
  lastName: 'Smith',
});

autorun(function outputFirstName() {
  console.log(person.firstName);
});

// outputFirstName();

person.firstName = 'Sally';

