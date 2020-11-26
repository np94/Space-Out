let rocket = document.getElementById("rocket");
let board = document.getElementById("board");
let monsters = document.getElementsByClassName("monster");
//var audio = new Audio("./sounds/homepage.wav");
//audio.play();


window.addEventListener("keydown",(e) => {
    let left = parseInt(window.getComputedStyle(rocket).getPropertyValue("left"));
    
    if(e.key == "ArrowLeft" && left > 0){
        rocket.style.left = left - 10 + "px";
    }
    else if(e.key == "ArrowRight" && left <= 500){
        rocket.style.left = left + 20 +"px";
    }
    if (e.key == "ArrowUp" || e.key === " ") {
        let bullet = document.createElement("div");
        let music = document.querySelector(".bullets >.soundBullets");
        bullet.classList.add("bullets");
        board.appendChild(bullet);
        music.play();
       
        let movebullet = setInterval(()=> {
            
            for (let i=0; i<monsters.length; i++){
                let monster = monsters[i];

                let monsterAttack = monster.getBoundingClientRect();
                let bulletAttack = bullet.getBoundingClientRect();

                if(
                    bulletAttack.left >= monsterAttack.left && 
                    bulletAttack.right <= monsterAttack.right &&
                    bulletAttack.top <= monsterAttack.top &&
                    bulletAttack.bottom <= monsterAttack.bottom
                ) {
                    monster.parentElement.removeChild(monster);

                    document.getElementById("points").innerHTML = 
                     parseInt(document.getElementById("points").innerHTML) + 1;
                }

                if (document.getElementById("points").innerHTML > 10) {
                    document.getElementById("points").innerHTML = 0;
                    clearInterval(movebullet);
                    alert ("You Win!");
                    window.location.reload();
                }
            }
            let bulletbottom = parseInt(
                window.getComputedStyle(bullet).getPropertyValue("bottom")
            );
            bullet.style.left = left + 20 + "px";
            bullet.style.bottom = bulletbottom + 50 + "px";
        },  100);

    };
    //let top = parseInt(window.getComputedStyle(rocket).getPropertyValue("top"));
    //if (e.key == "ArrowUp" && top > 10) {
    //    rocket.style.top = top - 10 + "px";
    //}
    //else if (e.key =="ArrowDown" && top <= 670){
    //    rocket.style.top = top + 10 + "px";
    //}
});

let generatemonsters = setInterval(() => {
    let monst = document.createElement("div");
    monst.classList.add("monster");
    //if (document.getElementsByClassName("monster").length > 10)document.querySelector(".monster:nth-child(10)").remove();
    const monsters = document.querySelectorAll(".monster");
    monsters.forEach (function (monster) {
        if (+monster.style.top.substring(0, monster.style.top.length - 2)> 500) monster.remove()
    })
    let monstleft = parseInt(window.getComputedStyle(monst).getPropertyValue("left"));
    monst.style.left = Math.floor(Math.random()*500) + "px";

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

                if(monstertop >= 520){
                   alert("Game Over");
                   clearInterval(movemonsters);
                   window.location.reload();
                }

            monst.style.top = monstertop + 20 + "px";
            
        }
    }
}, 1000);

var audio = new Audio("./assets/sounds/homepage.wav");
audio.play();

