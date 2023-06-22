/** @format */

let article = document.querySelector(".article").innerHTML;

function countWords(text) {
  console.log(text);
  const textArray = text
    .toString()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ")
    .sort();

  //   create an object counting the words
  const dict = {};
  for (let word of textArray) {
    word = word.toLowerCase();
    if (word in dict) {
      dict[word]++;
    } else {
      dict[word] = 1;
    }
  }

  let returnString = "";

  while (Object.keys(dict).length > 0) {
    let wordWinner;
    let winner = 0;
    for (let word in dict) {
      if (dict[word] > winner) {
        wordWinner = word;
        winner = dict[word];
      }
    }

    delete dict[wordWinner];
    returnString = returnString + wordWinner + ": " + winner + "\n";
  }

  document.querySelector(".return-area").innerHTML = returnString;
}

document.querySelector("#submit").addEventListener("click", function () {
  countWords(article);
});
