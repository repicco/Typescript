interface JogoProps {
    readonly id: string;
    name: string;
    description: string;
    platform: string[];
}

const left4dead: JogoProps = {
    id: '123456',
    name: 'Left 4 Dead 2',
    description: 'Jogo de ação e tiro',
    platform: ['Xbox', 'PlayStation', 'PC']
}

// left4dead.id = 'ID' // Cannot assign to 'id' because it is a read-only property.



interface DLC extends JogoProps{
    originalGame: JogoProps;
    newContent: string[];
}

const left4deadDLC: DLC = {
    id: '123456',
    name: 'Left 4 Dead 2.5 - DLC',
    description: 'Jogo de ação e tiro + Multiplayer - DLC',
    platform: ['Xbox', 'PlayStation 4', 'PC'],
    newContent: ['Mapa', 'Municao'],
    originalGame: left4dead
}

console.log(left4deadDLC);