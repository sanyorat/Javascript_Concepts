let counter = 1;
const getData = () => {
  console.log("API calls no" + counter++);
};

const magic = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData();
    }, delay);
  };
};

const magicfunction = magic(getData, 400);
