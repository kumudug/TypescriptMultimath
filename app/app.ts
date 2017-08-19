/*
/// <reference path="Player.ts" />
/// <reference path="game.ts" />
*/

import {Player} from './player';
import {Game}from './game';
import * as Helpers from './utils';

let newGame: Game;

document.getElementById('startGame')!.addEventListener('click', ()=>{
    let player: Player = new Player();
    player.name = Helpers.getValue('playername');

    let problemCount: number = Number(Helpers.getValue('problemCount'));
    let factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});


document.getElementById('calculate')!.addEventListener('click', ()=>{
    newGame.calculateScore();
});