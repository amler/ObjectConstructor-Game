
function teela () {
  this.hp = 45;

  this.attack = function(target) {
  	target.hp = target.hp - 5;
  }

  this.powerAttack = function(target) {
  		target.hp = target.hp - 30;
  }

  this.addHealth = function(player) {
    if (this.hp < 10) {  
      this.hp = this.hp * 3;
    
    } else if (this.hp < 30) {
      this.hp = this.hp + 10;
  
    } else if (this.hp < 45) {
      this.hp = this.hp + 5;
  
    } else if (this.hp === 45){
      return;
    }
  }
}


function heMan () {
  this.hp = 60;
  
  this.attack = function(target) {
    target.hp = target.hp - 8;
  }

  this.powerAttack = function(target) {
      target.hp = target.hp - 20;
  }

  this.addHealth = function(player) {
    if (this.hp < 10) {
      this.hp = this.hp * 2;
  
    } else if (this.hp < 30) {
      this.hp = this.hp + 15;
  
    } else if (this.hp < 60) {
      this.hp = this.hp + 2;
  
    } else if (this.hp === 60) {
      return;
    }
  }
}


function orco () {
  this.hp = 25;
  
  this.attack = function(target) {
    target.hp = target.hp - 20;
  }

  this.powerAttack = function(target) {
    target.hp = target.hp - 40;
  }

  this.addHealth = function(player) {
    if (this.hp < 10) {
      this.hp = (this.hp * 2);
  
    } else if (this.hp === 25) {
      return;
    }
  }
}


$('.choose-teela').click(function(){
  player = new teela();

  $('.choose-orco').slideToggle(500, function(){
    $(this).remove();
  });

  $( '.choose-heman' ).slideToggle(500, function(){
    $(this).remove();
  });

  $('.player-choices').delay(1000).fadeOut( "slow", function(){
    $(this).remove();
  });

    setTimeout(function(){
       $('.battle-menu').fadeIn().addClass('active');
   }, 2000);

  /*
  $( '.choose-teela' ).delay(800).slideUp(500, function() {
    $(this).parent().delay(1000).fadeOut( "slow", function() {
      $(this).remove();
    });
  */
  console.log(player);
});

  //renderEnemyInfo(enemy);
 


$('.choose-orco').click(function(){
  player = new orco();

  $('.choose-teela').slideToggle(500, function(){
    $(this).remove();
  });


  $( '.choose-heman' ).slideToggle(500, function(){
    $(this).remove();
  });
  $('.player-choices').delay(1000).fadeOut( "slow", function(){
    $(this).remove();
  });

  setTimeout(function(){
       $('.battle-menu').fadeIn().addClass('active');
   }, 2000);

  /*
  $( '.choose-orco' ).delay(800).slideUp(500, function() {
    $(this).parent().delay(1000).fadeOut( "slow", function() {
      $(this).remove();
    });
  */
  console.log(player);
});


  //renderEnemyInfo(enemy);
 


$('.choose-heman').click(function(){
  player = new heMan();

  $('.choose-teela').slideToggle(500, function(){
    $(this).remove();
  });

  $( '.choose-orco' ).slideToggle(500, function(){
    $(this).remove();
  });
  $('.player-choices').delay(1000).fadeOut( "slow", function(){
    $(this).remove();
  });

  setTimeout(function(){
       $('.battle-menu').fadeIn().addClass('active');
   }, 2000);

  /*
   $( '.choose-heman' ).delay(800).slideUp(500, function() {
    $(this).parent().delay(1000).fadeOut( "slow", function() {
      $(this).remove();
    });
*/
 

   //renderEnemyInfo(enemy);
 // console.log(player);
});


/*
function renderPlayerInfo (player) {

  $('.player-info').html("Player has " + player.hp + "hp")
  
}
*/
 


/*

function renderPlayerInfo (player) {
  if (player === heMan) {
    $('.battle-menu').append.html("<img src='images/heman.jpg'></img>");
  } else if (player === teela) {
    $('.battle-menu').append.html("<img src='images/teela.jpg'></img>");
  } else {
    $('.battle-menu').append.html("<img src='images/orco.jpg'></img>");
  }
})

*/




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

/* ======Tried to implement in script template========
  <% if (player === teela) { %>
                        <img class="teela" src="images/teela.jpg"></img>
                    <% } else if (player === heMan) { %>
                        <img class="heman" src="images/heman.jpg"></img>
                    <% } else { %>
                        <img class="orco" src="images/orco.jpg"></img>
                    <% } %> 



 <% if (villian === trapJaw) { %>
                        <img src="images/Trapjaw.jpg"></img>
                    <% } else if (villian === evilLyn) { %>
                        <img src="images/evillyn.jpg"></img>
                    <% } else { %>
                        <img src="skeletor.jpg"></img>
                    <% } %>
*/

