function Mario () {
	this.hp = 15;

 	this.primaryAttack = function(target) {
  	// function exists purely for side affects
  	target.hp = target.hp - 10;
  }
  this.specialAttack = function(target) {
  	if target.spikey == true {
  		this.hp = 0
  	} else {
  		target.hp = target.hp - 20;
  	}
}

$('.choose-mario')


function heroCharacter (attack, block, heal) {
  this.attack = attack;
  this.block = block;
  this.heal = heal;
}


var wizard = new heroCharacter("throw fireball", "ward block", "drink potion");
var elf = new heroCharacter("shoot arrow", "sheild", "eat cabbage");
var warrior = new heroCharacter("use sword", "sheild", "drink mead");

console.log(wizard);
console.log(elf);
console.log(warrior);



function villianCharacter(attack, block, insult) {
  this.insult = insult;
  this.attack = attack;
  this.block = block;
}

var darkElf = new villianCharacter("shoots arrow", "sheild", "yo mama joke");
var giantSpider = new villianCharacter("poison bite", "web shield", "racial slur");
var dragon = new villianCharacter("shoots fire breath", "tail block", "You call that a breath weapon?");

console.log(darkElf);
console.log(giantSpider);
console.log(dragon);





$(".delete").click(function() {
   var sureDelete = confirm("Are you sure you to delete this?");
   if (sureDelete === true) {
      $(this).parent().parent().slideUp(300, function() { 
         $(this).remove();
      });
   }
});
//=========5 hours of googlings====
$(".purchase").click(function() {
   var buy = confirm("Are you sure you want to buy?");
   if (buy === true) {
      var index = $(this).data("index");
      var url = glassItems[index].url;
      window.open(url);
   }
});

/*

switch (expression) {
  case expression1:
    statements1
    [break;]
  case expression2:
    statements2
    [break;]
  ...
  case expressionN:
    statementsN
    [break;]
  default:
    statements_def
    [break;]
}
*/

