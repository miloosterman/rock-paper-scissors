function computerPlay(){
    let gameSeed = Math.floor(Math.random * 3) + 1;
    let gameResult;

    switch (gameSeed) {
        case 1:
            return gameResult = "Rock";
        case 2:
            return gameResult = "Paper";
        case 3:
            return gameResult = "Scissors";
        default:
            throw new Exception(`Case ${gameSeed} not found.`);
    }
}