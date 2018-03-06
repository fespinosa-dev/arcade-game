// Enemies our player must avoid
class Enemy {
    constructor(speed = 1, y = 83){
        this.x = 0;
        this.y = y;
        this.speed = speed;

        this.sprite = 'images/enemy-bug.png'; 
    }

    update(dt){
     this.x += this.speed;
     if(this.x > 530){
         this.x = 0;
     }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    }



    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {
    constructor(){
        this.x = 200;
        this.y = 370;
        this.sprite = 'images/char-boy.png';
    }
    
    update(){
       this.checkCollisions();
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    checkCollisions() {
   
        allEnemies.forEach(enemy =>{

            if ((this.x - enemy.x) === 25){
         }

        });

        

    }

    handleInput(key){
        switch (key) {
            case "up":
                    this.moveUp();
                break;
            case "down":
                    this.moveDown();
                break;
            case "right":
                    this.moveRight();
                break;
            case "left":
                    this.moveLeft();
                break;
            default:
                break;
        }

    }

    moveUp(){
        if (this.y === boundaries.UP) {
           return;
        }
        this.y -= 80;
    }

    moveDown(){
        if (this.y === boundaries.DOWN) {
            return;
        }
        this.y += 80;
    }

    moveLeft(){
        if (this.x === boundaries.LEFT) {
            return;
        }
        this.x -= 100;
    }

    moveRight(){
        if (this.x === boundaries.RIGHT) {
            return;
        }
        this.x += 100;
    }



    
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var enemy1 = new Enemy(5,60);
var enemy3 = new Enemy(3,140);
var enemy2 = new Enemy(5,220);
var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player();


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
