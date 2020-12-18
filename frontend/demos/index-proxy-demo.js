window.__app__ = {};
window.__app__.reactiveData = {};
window.__app__.currentContextFn = null;

const person = {
  firstName: 'Bob',
  lastName: 'Smith',
};

const reactiveDataHandler = {
  get(target, prop) {

    if (!window.__app__.reactiveData[prop]) {
      window.__app__.reactiveData[prop] = [];
    }

    if (window.__app__.currentContextFn) {
      window.__app__.reactiveData[prop].push(window.__app__.currentContextFn);
    }

    return target[prop];

  },
  set(target, prop, value) {

    target[prop] = value;

    if (window.__app__.reactiveData[prop]) {
      window.__app__.reactiveData[prop].forEach(fn => fn());
    }

  },
};

const autorun = (fn) => {
  window.__app__.currentContextFn = fn;
  fn();
  window.__app__.currentContextFn = null;
};

const personProxy = new Proxy(person, reactiveDataHandler);

autorun(() => {
  console.log(personProxy.firstName);
});

personProxy.firstName = 'Sally';
