import {
  observable, configure, autorun, makeObservable,
  makeAutoObservable, action, computed,
} from 'mobx';

configure({ enforceActions: 'never' });

class Person {

  firstName = 'Bob';
  lastName = 'Smith';

  address = {
    street: '123 Oak Lane',
    city: 'Atlanta',
    state: 'GA'
  };

  constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      address: observable.struct,
      fullName: computed,
      updateFirstName: action,
    });

    // makeAutoObservable(this, {
    //   address: observable.struct,
    // });
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  updateFirstName(firstName) {
    this.firstName = firstName;
  }

}

const person = new Person();

autorun(function outputFirstName() {
  console.log(person.fullName);
});

person.lastName = 'Thompkins';

autorun(function outputCity() {
  console.log(person.address.city);
});

person.address = {
  street: '123 Oak Lane',
  city: 'Atlanta',
  state: 'GA'
};

