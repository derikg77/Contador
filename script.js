const value = document.getElementById('value');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

const updateValue = () => {
  value.innerHTML = count;
};

let count = 0;
let intervalID = 0;

plus.addEventListener('mousedown', () => {
  intervalID = setInterval(() => {
    count += 1;
    updateValue();
  }, 100);
});

minus.addEventListener('mousedown', () => {
  intervalID = setInterval(() => {
    count -= 1;
    updateValue();
  }, 100);
});
reset.addEventListener('click', () => {
  count = 0;
  updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalID));
