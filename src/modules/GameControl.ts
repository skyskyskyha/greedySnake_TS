import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    snake: Snake;
    food: Food;
    scorePanel : ScorePanel;
    direction:string='';
    isLive:boolean=true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent){
        this.direction = event.key;
        //this.run();
    }

    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction){
            case "ArrowUp":
            case "Up":
                Y-=10;
                break;
            case "ArrowDown":
            case "Down":
                Y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                X-=10;
                break;
            case "ArrowRight":
            case "Right":
                X+=10;
                break;
        }
        if (this.checkEat(X,Y)){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (e) {
            alert(e.message);
            this.isLive = false;
        }
        this.isLive&&setTimeout(this.run.bind(this), 300 - (this.scorePanel.level)*20);
    }

    checkEat(X: number, Y: number){
        return this.food.X === X && this.food.Y === Y;
    }
}

export default GameControl;
