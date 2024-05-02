const user = {
  name: 'Valera',
  age: 22,
  gender: 'male',
};

const printName = function (prefix) {
  console.log(`${prefix} ${this.name}`);
};

const myApply = function (func, ctx, args) {
  ctx.printName = func;
  ctx.printName(...args); // Передаем аргументы массива как аргументы функции
  delete ctx.printName;
};


function myBind(func, ctx, args) {
  return function () {
    myApply(func, ctx, args);
  };
}

const bindedFunc = myBind(printName, user, ['TopSecretUserName']);
bindedFunc();
