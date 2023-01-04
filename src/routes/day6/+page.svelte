<script lang="ts">
let value = "Enter the puzzle input";
let visible = false;
let result1: number = 0;
let result2 = 0;

function checkResults(signal: string, count: number) {
	for (let i = 0; i <= signal.length - count; i++) {
		if (new Set(signal.substring(i, i + count)).size === count) {
			return i + count;
		}
	}
}

function toggleVisible() {
	result1 = checkResults(value, 4)!;
	result2 = checkResults(value, 14)!;
	visible = true;
}
</script>

<svelte:head>
	<title>Day6</title>
	<meta name="description" content="Day 6: Supply Stacks" />
</svelte:head>

<div class="text-column">
	<h1>--- Day 6: Tuning Trouble ---</h1>

	<textarea bind:value />
	<p />
	<button on:click={toggleVisible}> Process the Data </button>

	<!-- hide text until the button is pressed -->
	{#if visible}
		<p>
			Characters to be processed before the first start-of-packet marker is detected - part1: {result1}<br />
			Theses are the crates on top of each stack - part2: {result2}
		</p>
	{/if}
</div>

<style>
textarea {
	width: 100%;
	height: 200px;
}
</style>
