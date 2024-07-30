export class gameOverText {
    constructor(game){
        this.game = game;
        this.width = 300;
        this.height = 60;
        this.x = this.game.width / 2 - this.width / 2;
        this.y = this.game.height / 2 - this.height / 2 - 50;
        this.img = document.getElementById('gameOver');
    }
    
   animate(){
       
   }
      
   draw(context){
       context.drawImage(this.img, this.x, this.y, this.width, this.height);
   }
}

export class retryText {
    constructor(game){
        this.game = game;
        this.size = 30;
        this.x = this.game.width / 2 - 80;
        this.y = this.game.height / 2 + 10;
    }
    
   animate(){
       
   }
      
   draw(context){
       context.fillStyle = 'black';
       context.font = `${this.size}px Arial`;
       context.fillText('tap to retry', this.x, this.y);
   }
}
