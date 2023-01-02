<script lang="ts">
let value = "Enter the puzzle input";
let largestCaloriesAmount = 0;
let topThreeCaloriesAmount = 0;
let visible = false;
const elfMap = new Map();

function toggleVisible() {
    largestCalories();
    visible = true;
}

function largestCalories() {
    const lines = value.split("\n");

    let runningSum = 0;
    let index = 1;
    for (const line of lines) {
        if (line === "") {
            elfMap.set(index, runningSum);
            runningSum = 0;
            index++;
            continue;
        }
        runningSum += parseInt(line, 10);
    }
    for (const [key, value] of elfMap) {
        if (value > largestCaloriesAmount) {
            largestCaloriesAmount = value;
        }
    }

    const values = elfMap.values();
    const sortedValues = [...values].sort((a, b) => b - a);
    const topThree = sortedValues.slice(0, 3);
    topThreeCaloriesAmount = topThree.reduce((a, b) => a + b);
}
</script>

<svelte:head>
    <title>Day1</title>
    <meta name="description" content="Day 1: Calorie Counting" />
</svelte:head>

<div class="text-column">
    <h1>--- Day 1: Calorie Counting ---</h1>

    <textarea bind:value />
    <p />
    <button on:click={toggleVisible}> Process the Data </button>

    {#if visible}
        <p>
            The elf carrying the largest amount of calories is carrying {largestCaloriesAmount} calories. <br />
            The top three elves are carrying {topThreeCaloriesAmount} calories.
        </p>
    {/if}
</div>

<style>
textarea {
    width: 100%;
    height: 200px;
}
</style>
