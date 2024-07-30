export class Score {
    constructor(game){
        this.game = game;
        this.score = 0;
        this.size = 30;
        this.x = 10;
        this.y = 30;
    }
    
   animate(){
       
   }
      
   draw(context){
       context.fillStyle = 'black';
       context.font = `${this.size}px Arial`;
       context.fillText(this.score, this.x, this.y);
   }
}