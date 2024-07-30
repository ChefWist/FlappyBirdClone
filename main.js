import { Player } from './player.js';
import { Background } from './background.js';
import { Floor } from './background.js';
import { gameOverText } from './gameOver.js';
import { retryText } from './gameOver.js';
import { Pipe } from './pipe.js';
import { Score } from './score.js';

window.addEventListener('load', () => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 350;
    canvas.height = 550;
    
    class Game {
    
        constructor(canvas, width, height){
            this.canvas = canvas;
            this.width = width;
            this.height = height;
            this.die = new Audio('audio/dead.wav');
            this.fly = new Audio('audio/fly.wav');
            this.player = new Player(this);
            this.background = new Background(this);
            this.floors = [new Floor(this, 0), new Floor(this, this.width - 5)];
            this.score = new Score(this);
            this.pipes = [new Pipe(this)];
            this.gameOverText = new gameOverText(this);
            this.retryText = new retryText(this);
            this.gameOver = false;
            
        }
        
        animate(){
            this.background.animate();
            this.player.animate(this.pipes[0]);
            this.score.animate();
            this.pipes.forEach(pipe => {pipe.animate()});
            this.floors.forEach(floor => {floor.animate()});
            if(this.player.y > this.height - 100 || this.player.y < 0){
                this.die.play();
                this.gameOver = true;
            }
        }
        
        draw(context){
            this.background.draw(context);
            this.pipes.forEach(pipe => {pipe.draw(context)}); 
            this.floors.forEach(floor => {floor.draw(context)});       
            this.player.draw(context);
            this.score.draw(context);
            if(this.gameOver){
                this.gameOverText.draw(context);
                this.retryText.draw(context);
            }
        }
    }
    
    let game = new Game(canvas, canvas.width, canvas.height);
    game.gameOver = true;
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.animate();
        game.draw(ctx);
        if(!game.gameOver) {
            requestAnimationFrame(animate);
        }
    }
    animate();
    
    canvas.addEventListener('click', () => {
        if(!game.gameOver){
            game.player.vy = 12;
            game.fly.play();
        } else {
            game = new Game(canvas, canvas.width, canvas.height);
            
            animate();
        }
    });
});

