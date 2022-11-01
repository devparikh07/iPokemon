score = 0;
cross = true;

audiogo = new Audio('Mario Death.mp3');
audio = new Audio('SuperMarioBros.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==32){
        bulbasaur = document.querySelector('.bulbasaur');
        bulbasaur.classList.add('animateBulbasaur');
        setTimeout(() => {
            bulbasaur.classList.remove('animateBulbasaur')
        }, 700);
    }
     if(e.keyCode==39){
        bulbasaur = document.querySelector('.bulbasaur');
        bulbasaurX = parseInt(window.getComputedStyle(bulbasaur,null).getPropertyValue('left')); 
        bulbasaur.style.left = bulbasaurX + 112 + "px";
    }

    if(e.keyCode==37){
        bulbasaur = document.querySelector('.bulbasaur');
        bulbasaurX = parseInt(window.getComputedStyle(bulbasaur,null).getPropertyValue('left')); 
        bulbasaur.style.left = (bulbasaurX - 112) + "px";
    }
    
}

setInterval(() => {
    bulbasaur = document.querySelector('.bulbasaur');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    bx = parseInt(window.getComputedStyle(bulbasaur,null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(bulbasaur,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(bx-ox);
    offsetY = Math.abs(by-oy);
    //console.log(offsetX, offsetY)
    if(offsetX<73 && offsetY<52){
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
         
         audio.pause();
        },10);
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
        cross = true;
        }, 1000);
    setTimeout(() =>{
        aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('new animation duration:',newDur)
    },500);
    }

}, 10);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score
}