<script lang="ts">
let value = "Enter the puzzle input";
let visible = false;
let score = 0;
let newScore = 0;

function gameScore(opponentChoice: string, playerChoice: string) {
    //rock vs rock, paper, scissors
    if (opponentChoice == "A") {
        if (playerChoice == "X") return 3;
        else if (playerChoice == "Y") return 6;
        else return 0;
    }

    //paper vs rock, paper, scissors
    if (opponentChoice == "B") {
        if (playerChoice == "X") return 0;
        else if (playerChoice == "Y") return 3;
        else return 6;
    }

    //scissors vs rock, paper, scissors
    if (opponentChoice == "C") {
        if (playerChoice == "X") return 6;
        else if (playerChoice == "Y") return 0;
        else return 3;
    }
    return 0;
}

function choiceScore(playerChoice: string) {
    if (playerChoice == "X") return 1;
    if (playerChoice == "Y") return 2;
    if (playerChoice == "Z") return 3;
    return 0;
}

function game(opponentChoice: string, playerChoice: string) {
    return gameScore(opponentChoice, playerChoice) + choiceScore(playerChoice);
}

function getPlayerChoice(opponentChoice: string, desiredOutcome: string) {
    //desire a loss
    if (desiredOutcome == "X") {
        if (opponentChoice == "A") return "Z";
        else if (opponentChoice == "B") return "X";
        else return "Y";
    }

    //desire a draw
    if (desiredOutcome == "Y") {
        if (opponentChoice == "A") return "X";
        else if (opponentChoice == "B") return "Y";
        else return "Z";
    }

    //desire a win
    if (desiredOutcome == "Z") {
        if (opponentChoice == "A") return "Y";
        else if (opponentChoice == "B") return "Z";
        else return "X";
    }

    return "";
}

function game2(opponentChoice: string, desiredOutcome: string) {
    const playerChoice = getPlayerChoice(opponentChoice, desiredOutcome);
    return gameScore(opponentChoice, playerChoice) + choiceScore(playerChoice); 
}

function runStrat() {
    score = 0; // re-initialise these to handle multiple button presses
    newScore = 0;
    let lines = value.split("\n");
    for (const line of lines) {
        score += game(line[0], line[2]);
        newScore += game2(line[0], line[2]);
    }
}

function toggleVisible() {
    runStrat();
    visible = true; 
}
</script>

<svelte:head>
    <title>Day3</title>
    <meta name="description" content="Day 3: Rucksack Reorganization" />
</svelte:head>

<div class="text-column">
    <h1>--- Day 3: Rucksack Reorganization ---</h1>

    <textarea bind:value />
    <p />
    <button on:click={toggleVisible}> Process the Data </button>

    <!-- hide text until the button is pressed -->
    {#if visible} 
        <p>
            The sum of the item type priorities is {score}.<br>
        </p>
    {/if}
</div>

<style>
textarea {
    width: 100%;
    height: 200px;
}
</style>
