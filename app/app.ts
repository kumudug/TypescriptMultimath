function startGame() {
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    let messageElement: HTMLElement | null = document.getElementById('messages');
    messageElement!.innerText = 'Welcome to MultiMath! Starting new game...';

    postScore(100, playerName);
    postScore(-5, playerName);
}

function logPlayer(name: string = 'Default Player') {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementId: string): string | undefined {
    let inputElement = <HTMLInputElement>document.getElementById(elementId);

    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName?: string): void {

    //function types
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

let logMessage = (message: string): void => console.log(message);

function logError(error: string): void {
    console.error(error);
}