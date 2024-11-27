

var aos = ["mom", "js", "malayalam", "html", "css", "dad","pop"];
var op = [];
for (let i = 0; i < aos.length; i++) {
  let word = aos[i];
  if (word == word.split("").reverse().join("")) {
    op.push(word);
  }
}
console.log(op);//[ 'mom', 'malayalam', 'dad' ]