// Enemies our player must avoid

class Enemy {
    constructor(x,y, spped) {
        this.x = x;
        this.y = y;
        this.spped = spped;

        this.sprite = 'images/enemy-bug.png';
    }

    update(dt) {
        // var distance = this.spped * dt;
        //  this.x = this.x + distance;
        console.log()
         if(this.x > 530){
             this.x = 0;
         }

        // console.log(" ENEMY - X: " + this.x + " Y: " + this.y);

        // this.checkCollisions();
    }


   

    reset() {
        this.x = 0;

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/char-boy.png';
    }

    update(dt) {
        this.distance = this.x * dt;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    reset() {
        this.x = 200;
        this.y = 370;
    }


    handleInput(key) {
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
   }
        this.checkCollisions();
    }

    moveUp() {
        if (this.y === boundaries.UP) {
            return;
        }
        this.y -= this.speed;
    }

    moveDown() {
        if (this.y === boundaries.DOWN) {
            return;
        }
        this.y += this.speed;
    }

    moveLeft() {
        if (this.x === boundaries.LEFT) {
            return;
        }
        this.x -= this.speed;
    }

    moveRight() {
        if (this.x === boundaries.RIGHT) {
            return;
        }
        this.x += this.speed;
    }


    checkCollisions() {

        let eP = enemy2.x - player.x;
        let pP = enemy2.y - player.y;
        let result = Math.sqrt(((Math.pow(eP, 2)) + (Math.pow(pP, 2))))
        console.log(result);
        if (result >= 2 && result <= 10) {
            console.log("collide!");
        }
    }



}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method. 

var enemy1 = new Enemy(0, 5, 40);
var enemy3 = new Enemy(100, 3, 200);
var enemy2 = new Enemy(50, 100, 1);
var allEnemies = [enemy2];
var player = new Player(200,370,60);


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
