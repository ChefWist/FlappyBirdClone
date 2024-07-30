export class Player {

    constructor(game){
        this.game = game;
        this.width = 35;
        this.height = 25;
        this.x = 50;
        this.y = this.game.height / 2 - this.height / 2;
        this.img = document.getElementById('bird');
        this.vy = 12;
        this.frame = 0;
    }
    
   animate(pipe){
       this.y-=this.vy;
       this.vy-=0.6;
       this.frame+=0.2;
       this.frame%=3;
       this.img.src = `assets/bird${Math.floor(this.frame)}.png`
       if(this.x < pipe.x + pipe.width &&
          this.x + this.width > pipe.x ){
          if(this.y < pipe.y + 180 &&
          this.y + this.height > pipe.y) {
              
          } else {
              this.game.die.play();
           this.game.gameOver = true;
          }
       } 
   }
      
   draw(context){
       context.drawImage(this.img, this.x, this.y, this.width, this.height);
   }
}