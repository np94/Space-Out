let rocket = document.getElementById("rocket");
let board = document.getElementById("board");

window.addEventListener("keydown",(e) => {
    let left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
    if(e.key == "ArrowLeft" && left > 25){
        rocket.style.left = left - 10 + "px";
    }
    else if(e.key == "ArrowRight" && left <= 1000){
        rocket.style.left = left + 10 +"px";
    }
    if (e.key == "Enter") {
        let bullet = document.createElement("div");
        bullet.classList.add("bullets");
        board.appendChild(bullet);

        let movebullet = setInterval(()=> {
            let bulletbottom = parseInt(
                window.getComputedStyle(bullet).getPropertyValue("bottom")
            );
            bullet.style.left = left + 30 + "px";
            bullet.style.bottom = bulletbottom + 70 + "px";
        },  50);
    }
    let top = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
    if (e.key == "ArrowUp" && top > 10) {
        rocket.style.top = top - 10 + "px";  
    }
});

let generatemonsters = setInterval(() => {
    let monst = document.createElement("div");
    monst.classList.add("monster");
    let monstleft = parseInt(window.getComputedStyle(monst).getPropertyValue("left"));
    monst.style.left = Math.floor(Math.random()*1000) + "px";

    board.appendChild(monst);
    clearInterval(monst);

}, 2000);

let movemonsters = setInterval(()=> {
    let monster = document.getElementsByClassName("monster");

    if(monster!=undefined){
        for(let i=0; i<monster.length; i++) {
            let monst = monster[i];
            let monstertop = parseInt(
                window.getComputedStyle(monst).getPropertyValue("top")
                );

            monst.style.top = monstertop + 40 + "px";
        }
    }
}, 700);