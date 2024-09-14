let name = {
  firstName: "Sanyog",
  lastname: "Rathore",
};
let printName = function (place, state, country) {
  console.log(
    `Hello, ${this.firstName} ${this.lastname}, from ${place}, ${state}, ${country}`
  );
};

printName.call(name, "Jhansi", "Uttar Pradesh", "India");
printName.apply(name, ["Jhansi", "Uttar Pradesh", "India"]);

let printDetails = printName.bind(name, "Jhansi", "Uttar Pradesh");
console.log(printDetails);
printDetails("India");

//Lets write a prototype function for bind.
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.splice(1);
  return (...args2) => obj.apply(args[0], [...params, ...args2]);
};

let printDetails1 = printName.myBind(name, "Jhansi", "Uttar Pradesh");
printDetails1("India");
