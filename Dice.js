

function rollDice(n, m) {
  let scores = [];
  let len = n + m + 1;
  for (let i = 0; i < len; i++) {
    scores[i] = 0;
  }
  // ALL possible sums:
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; ++j) {
      let sum = i + j;

      scores[sum]++;
    }

  }

  //lowest to highest
  let maxValue = Math.max(...scores);
  let result = [];
  for (let i = 0; i < scores.length; i++) {

    if (maxValue === scores[i]) {
      //console.log(i);
      result.push(i);
    }
  }
  makeUL(result);
}

//list of outcome item:
function makeUL(result) {
  console.log("sevtap" + result);
  var list = document.getElementById('sum');
  for (var i = 0; i < result.length; i++) {

    var item = document.createElement('li');
    item.textContent = result[i];
    list.appendChild(item);
  }
}



function submit() {
  let inputEl = document.getElementById('dice-input');
  let value = inputEl.value;
  let splittedValues = value.split(" ", 2);
  console.log(splittedValues);


  let n = splittedValues[0];
  let m = splittedValues[1];

  /// convert them to numbers
  n = parseInt(n, 10);
  m = parseInt(m, 10);
  //checking
  if (!Number.isInteger(n) || !Number.isInteger(m)) {
    console.log('n and m must be two integers!')
    return;
  }


  // constraints
  if (n > 3 && m < 21) {
    rollDice(n, m);

  } else {
    console.log('error!')
    return;
  }

}
