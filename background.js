export class Background {

    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.width = this.game.width;
        this.height = this.game.height;
        this.img = document.getElementById('bg');
        
    }
    
    animate(){
       
    }
   
    draw(context){
       context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

export class Floor {
    constructor(game, x){
        this.game = game;
        this.x = x;
        this.y = this.game.height - 100;
        this.width = this.game.width;
        this.height = 100;
        this.img = document.getElementById('floor');
    }
    
   animate(){
       this.x-=5;
       if(this.x < 0 - this.game.width + 5){
           this.x=this.game.width - 5;
       }
   }
      
   draw(context){
       context.drawImage(this.img, this.x, this.y, this.width, this.height);
   }
}