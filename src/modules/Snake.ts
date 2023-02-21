class Snake{
    head : HTMLElement;
    bodies: HTMLCollection;
    element : HTMLElement;
    constructor() {
        this.head = document.querySelector("#snake > div")!;
        this.bodies = document.getElementById('snake')!.getElementsByTagName("div");
        this.element = document.getElementById("snake");
    }

    get X () {
        return this.head.offsetLeft;
    }
    get Y () {
        return this.head.offsetTop;
    }
    set X (value) {
        if (this.X === value)
            return;
        if (value < 0 || value > 290)
            throw new Error("bump into wall");
        if (this.bodies[0]&&(this.bodies[0] as HTMLElement).offsetLeft === value){
            console.log("水平掉头");
        }
        this.head.style.left = value + 'px';
        this.moveBody();
        this.checkHeadBody();
    }
    set Y (value) {
        if (this.Y === value)
            return;
        if (value < 0 || value > 290)
            throw new Error("bump into wall");
        if (this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop === value){
            console.log("垂直掉头");
        }
        this.head.style.top = value + 'px';
        this.moveBody();
        this.checkHeadBody();
    }

    addBody () {
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    moveBody () {
        for (let i=this.bodies.length-1;i>0;i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft!;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop!;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }
    }

    checkHeadBody () {
        for (let i=2;i<this.bodies.length;i++){
            let bd = (this.bodies[i] as HTMLElement);
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                console.log(i+" "+this.X+" "+this.Y)
                console.log("撞到自己了");
            }
        }
    }
}

export default Snake;
