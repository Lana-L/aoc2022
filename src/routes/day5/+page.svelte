<script lang="ts">
let value = "Enter the puzzle input";
let visible = false;
let result1 = "";
let result2 = "";

function checkResults() {
	let crates = value.slice(0, value.indexOf("move")); //creates a separate string for crates
	let moves = value.slice(value.indexOf("move")); //creates a separate string for moves

	const crateLines = crates.split("\n");
	const columns1 = {
		"1": [],
		"2": [],
		"3": [],
		"4": [],
		"5": [],
		"6": [],
		"7": [],
		"8": [],
		"9": [],
	};

	const columns2 = {
		"1": [],
		"2": [],
		"3": [],
		"4": [],
		"5": [],
		"6": [],
		"7": [],
		"8": [],
		"9": [],
	};

	function getStringIndexForColumn(column: number): number {
		return column * 4 - 3;
	}

	for (const row of crateLines) {
		//for each line that is read
		for (let i = 1; i < 10; i++) {
			const stringIndex = getStringIndexForColumn(i);
			if (row[stringIndex] !== " ") {
				columns1[i].unshift(row[stringIndex]);
				columns2[i].unshift(row[stringIndex]);
			}
		}
	}

	const moveLines = moves.split("\n");

	for (const row of moveLines) {
		const moveArray = row
			.split(" ")
			.filter((element) => !isNaN(Number(element)))
			.map(Number);
		const numMoves = moveArray[0];
		const fromColumn = moveArray[1];
		const toColumn = moveArray[2];
		//for each line that is read
		for (let i = 0; i < numMoves; i++) {
			let item = columns1[fromColumn].pop();
			columns1[toColumn].push(item);
		}
		let stack = columns2[fromColumn];
		let removedCrates = stack.splice(stack.length - numMoves, numMoves);
		columns2[toColumn].push(...removedCrates);
		console.log(stack);
	}

	for (let column in columns1) {
		let stack = columns1[column];
		const topCrate = stack[stack.length - 1];
		result1 += topCrate;
	}

	for (let column in columns2) {
		let stack = columns2[column];
		const topCrate = stack[stack.length - 1];
		console.log(topCrate);
		result2 += topCrate;
	}
}

function toggleVisible() {
	checkResults();
	visible = true;
}
</script>

<svelte:head>
	<title>Day5</title>
	<meta name="description" content="Day 5: Supply Stacks" />
</svelte:head>

<div class="text-column">
	<h1>--- Day 5: Supply Stacks ---</h1>

	<textarea bind:value />
	<p />
	<button on:click={toggleVisible}> Process the Data </button>

	<!-- hide text until the button is pressed -->
	{#if visible}
		<p>
			Theses are the crates on top of each stack - part1: {result1}<br />
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
