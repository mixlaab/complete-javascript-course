const a = 'Hello ';

const myFuncGlobal = () => {
  const b = 'World';
  const myFuncLocal = () => {
    const c = '!';
    return a + b + c;
  }
  return myFuncLocal;
}

const closure = myFuncGlobal();
console.log(closure());