function bounceOff(rectangle, square){
    if (rectangle.x - square.x < square.width/2 + rectangle.width/2
      && square.x - rectangle.x < square.width/2 + rectangle.width/2) {
        rectangle.velocityX = rectangle.velocityX * (-1);
        square.velocityX = square.velocityX * (-1);
  }
  if (rectangle.y - square.y < square.height/2 + rectangle.height/2
    && square.y - rectangle.y < square.height/2 + rectangle.height/2){
      rectangle.velocityY = rectangle.velocityY * (-1);
      square.velocityY = square.velocityY * (-1);
  }
}