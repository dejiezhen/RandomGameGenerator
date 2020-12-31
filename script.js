let games = ['game--apex.png', 'game--overwatch.png', 'game--genshin.png', 'game--stardew.png', 'game--valorant.png', 'game--league.jpg'];

const pic = document.querySelector('.picture');
const btn = document.querySelector('.pick-game');
const reset = document.querySelector('.reset');


let randNum;

btn.addEventListener('click', function(){
    randNum = Math.trunc(Math.random() * games.length)
    pic.src= `/gamepic/${games[randNum]}`;
})

reset.addEventListener('click', function(){
    pic.src = `/gamepic/question_mark.jpg`;
})