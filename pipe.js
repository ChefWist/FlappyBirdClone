export class Pipe {
    constructor(game){
        this.game = game;
        this.x = this.game.width;
        this.y = 80;
        this.width = 70;
        this.height = this.game.height;
        this.bottomImg = document.getElementById('bottomPipe');
        this.topImg = document.getElementById('topPipe');
        this.point = new Audio('audio/point.wav');
    }
    
    animate(){
        this.x-=5;
       if(this.x < 0 - this.width){
           this.x=this.game.width;
           this.y = Math.floor(Math.random() * (this.game.height - 400)) + 50
           this.game.score.score+=1;
           this.point.play();
       }
    }
    
    draw(context){
        context.drawImage(this.topImg, this.x,this.y - this.height, this.width, this.height);
        context.drawImage(this.bottomImg, this.x, this.y + 180, this.width, this.height);
    }
}