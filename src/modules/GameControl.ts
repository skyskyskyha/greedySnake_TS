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
        console.log(event.key);
        this.direction = event.key;
        this.run();
    }

    run(){
        console.log("running")
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
        this.snake.X = X;
        this.snake.Y = Y;
        this.isLive&&setTimeout(this.run.bind(this), 300 - (this.scorePanel.level)*20);
    }
}

export default GameControl;
