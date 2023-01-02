<script lang="ts">
let value = "Enter the puzzle input";
let visible = false;
let score = 0;
let secondScore = 0;

function checkResults() {
    score = 0; // re-initialise these to handle multiple button presses
    secondScore = 0;
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let priority = 0;
    let sharedCharacter = "";
    let match = "";

    let lines = value.split("\n"); //read each line of the input

    for (let i = 2; i< lines.length; i+=3)
    {
        const firstLine = lines[i-2];
        const secondLine = lines[i-1];
        const thirdLine = lines[i];

        for (const charToCheck of firstLine)
        {
            if (secondLine.includes(charToCheck) && thirdLine.includes(charToCheck)) match = charToCheck;
        }

        if (alphabet.includes(match)) priority = alphabet.indexOf(match)+1; //if it matches then assign it a priority from the static alphabet list
        secondScore += priority;
    }

    for (const line of lines) { //for each line that is read
        const firstCompartment = line.slice(0, line.length/2); //split the line into two from the start.
        const secondCompartment = line.slice(line.length/2); //assign the second half to another variable.
        for (const charToCheck of firstCompartment) //for each character of each first half
        {
            if(secondCompartment.includes(charToCheck)) //compare if it includes the same character in the second half
            sharedCharacter = charToCheck;
        }
        if (alphabet.includes(sharedCharacter)) priority = alphabet.indexOf(sharedCharacter)+1; //if it matches then assign it a priority from the static alphabet list
        score += priority;
    }
}

function toggleVisible() {
    checkResults();
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
            The sum of the other priorities is {secondScore}.
        </p>
    {/if}
</div>

<style>
textarea {
    width: 100%;
    height: 200px;
}
</style>
