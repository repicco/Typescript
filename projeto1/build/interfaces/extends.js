"use strict";
const left4dead = {
    id: '123456',
    name: 'Left 4 Dead 2',
    description: 'Jogo de ação e tiro',
    platform: ['Xbox', 'PlayStation', 'PC']
};
const left4deadDLC = {
    id: '123456',
    name: 'Left 4 Dead 2.5 - DLC',
    description: 'Jogo de ação e tiro + Multiplayer - DLC',
    platform: ['Xbox', 'PlayStation 4', 'PC'],
    newContent: ['Mapa', 'Municao'],
    originalGame: left4dead
};
console.log(left4deadDLC);
