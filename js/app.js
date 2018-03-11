/**
 * @description Represents the enemy our player must avoid.
 * @constructor
 * @param {number} x - The x coordinate.
 * @param {number} y - The y coordinate.
 * @param {number} speed - The speed of the Enemy.
 */
class Enemy {
    constructor(x,y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;

        this.sprite = 'images/enemy-bug.png';
    }

    /**
    * @description Update the enemy's position.
    * @argument dt = The delta information.
    */
    update(dt) {
        var distance = this.speed * dt;
         this.x = this.x + distance;
        console.log()
         if(this.x > 530){
             this.x = 0;
         }

        this.checkCollisions();
    }

    /**
    * @description Checks for collisions with the player if there is any resets the game.
    */
    checkCollisions() {
        let eP = this.x - player.x;
        let pP = this.y - player.y;
        let distance = Math.sqrt(((Math.pow(eP, 2)) + (Math.pow(pP, 2))))
        if (distance <= 60) {
            updateScoreBanner(0);
            score = 0;
            resetGame();            
        }
    }

    /**
     * @description Resets to initial position.
     */
    reset() {
        this.x = 0;

    }
    /**
     * @description Draw the enemy on the screen.
     */
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
/**
 * @description Represents the player.
 * @constructor
 * @param {number} x - The x coordinate.
 * @param {number} y - The y coordinate.
 * @param {number} speed - The speed of the Player.
 */
class Player {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/char-boy.png';
    }
    
    /**
    * @description Update the player's position.
    */
    update(dt) {
        this.distance = this.x * dt;
    }

    /**
     * @description Draw the player on the screen.
     */
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    /**
     * @description Resets to initial position.
     */
    reset() {
        this.x = 200;
        this.y = 370;
    }

    /**
     * @description Checks whether the player reached the end or not.
     * @return {boolean} - true or false
     */
    reachEnd(){
        if(this.y <= 10){
            return true;
        }
        return false;
    }
    


    /**
     * @description Handles input events from the user.
     * @param {string} key - the keyword name the user pressed.
     */
    handleInput(key) {
          switch (key) {  
            case "up":
                if (this.y === -30) {
                      return;
                }
                if (this.reachEnd()) { 
                    updateScoreBanner(++score);
                    resetGame();
                    changeEnemiesSpeed(); // increase difficulty
                }
                this.y -= this.speed;
                break;
            case "down":
                  if (this.y === 370) {
                      return;
                  }
                this.y += this.speed;
                break;
            case "right":
                  if (this.x === 400) {
                      return;
                  }
                this.x += this.speed;
                break;
            case "left":
                  if (this.x === 0) {
                      return;
                  }
                this.x -= this.speed;
                break;
   }
    }


}



/**
 * @description Resets the game. Players and enemies start from its initial positions.
 */
var resetGame = function () {
    allEnemies.forEach(function (enemy) {
        enemy.reset();
    });
    player.reset();

}

/**
* @description Updates the score banner.
* @argument score = The score value.
*/
var updateScoreBanner = function (score) {
    let scoreBanner = document.querySelector("h2");
    scoreBanner.innerHTML = `Your score is: ${score}`;
}

/**
* @description Changes the speed of the enemies ramdomly.
*/
var changeEnemiesSpeed = function(){
    allEnemies.forEach(enemy =>{

       enemy.speed = Math.floor(Math.random() * 400) + 50;
        
    });
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



var enemy1 = new Enemy(0, 50, 350);
var enemy2 = new Enemy(0, 150, 250);
var enemy3 = new Enemy(0, 230, 50);
var allEnemies = [enemy2, enemy3, enemy1]
var player = new Player(200, 370, 40);
var score = 0; 


