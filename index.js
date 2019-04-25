var wor=["cat"];

var inquirer=require("inquirer");
var words=require("./words.js");
var remaing=8;
var curword=new words ("cat")
function game () {
    curword.desplay()
  inquirer.prompt([{name:"letter",
message:"guess a letter"}])
.then(function (ans) {
    curword.checks(ans.letter)
    game()
    
})    
}
game()


