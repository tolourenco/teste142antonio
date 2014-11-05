$(document).ready(function() {
  speed=20;
  $b = $("#boneco");

      
  function moveRight(){
    position = $b.position();
    newpleft = position.left +speed;
    if (newpleft < 500) {
      $b.animate({"left": "+=" + speed + "px"}, "slow");
    }
    $( "#coordenadas" ).text(position.left + " " + position.top);
  }


  function moveLeft(){
    position = $b.position();
    newpleft = position.left -speed;
    if (newpleft > 40) {
      $b.animate({"left": "-=" + speed + "px"}, "slow");
    }
    $( "#coordenadas" ).text(position.left + " " + position.top);

  }
      
  $('#bt1').click(function() {
    moveLeft();   
  })

  $('#bt2').click(function(){
    moveRight();
  })
  
  /*
  	left = 37
	up = 38
	right = 39
	down = 40
  */
  
  document.onkeydown = checkKey;

  function checkKey(e) {

   e = e || window.event;

    if (e.keyCode == '39') {
      moveRight()
    }
    else if (e.keyCode == '40') {
      moveDown()
      //down arrow
    }
    else if (e.keyCode == '37'){
      moveLeft()
      //left arrow
    }
    else if (e.keyCode == '38'){
      moveUp()
      //up arrow
    }
  }

});