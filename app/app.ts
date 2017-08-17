/// <reference path="Player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

document.getElementById('startGame')!.addEventListener('click', ()=>{
    let player: Player = new Player();
    player.name = Utils.getInputValue('playername');

    let problemCount: number = Number(Utils.getInputValue('problemCount'));
    let factor: number = Number(Utils.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});


document.getElementById('calculate')!.addEventListener('click', ()=>{
    newGame.calculateScore();
});