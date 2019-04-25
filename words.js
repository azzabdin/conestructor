var letter=require("./letters.js");
function Word(strg) {
    this.letters= strg.split("").map(function (el) {
        return new letter (el)
        
    })
    this.desplay=function(){
        var wor=this.letters.map(function(l){
            return l.isGuessed()

        })
        console.log(wor.join(" "))
    }

    this.checks = function (char) {
        for(var i=0;i<this.letters.length;i++){
            this.letters[i].checked(char)
        }
    

    }
}
 
 module.exports=Word