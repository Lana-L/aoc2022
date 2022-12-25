<script lang="ts">
	let value = 'Enter the puzzle input';
	let visible = false;
	let fullOverlapCount = 0;
	let partialOverlapCount = 0;

	function checkResults() {
		fullOverlapCount = 0; // re-initialise these to handle multiple button presses
		partialOverlapCount = 0;

		let lines = value.split('\n'); //read each line of the input

		for (const line of lines) {
			//for each line that is read
			const firstDash = line.indexOf('-'); //find where the dash is in the line
			const secondDash = line.indexOf('-', firstDash + 1); //second dash is the first dash after we start from the first dash
			const comma = line.indexOf(',');

			const start1 = line.substring(0, firstDash);
			const end1 = line.substring(firstDash + 1, comma);
			const start2 = line.substring(comma + 1, secondDash);
			const end2 = line.substring(secondDash + 1);

			if (
				(parseInt(start1, 10) >= parseInt(start2, 10) &&
					parseInt(end1, 10) <= parseInt(end2, 10)) ||
				(parseInt(start2, 10) >= parseInt(start1, 10) && parseInt(end2, 10) <= parseInt(end1, 10))
			)
				fullOverlapCount += 1;

			if (
				(parseInt(end1, 10) >= parseInt(start2, 10) &&
					parseInt(start1, 10) <= parseInt(start2, 10)) ||
				(parseInt(end2, 10) >= parseInt(start1, 10) && parseInt(start2, 10) <= parseInt(start1, 10))
			)
				partialOverlapCount += 1;
		}
	}

	function toggleVisible() {
		checkResults();
		visible = true;
	}
</script>

<svelte:head>
	<title>Day4</title>
	<meta name="description" content="Day 4: Camp Cleanup" />
</svelte:head>

<div class="text-column">
	<h1>--- Day 4: Camp Cleanup ---</h1>

	<textarea bind:value />
	<p />
	<button on:click={toggleVisible}> Process the Data </button>

	<!-- hide text until the button is pressed -->
	{#if visible}
		<p>
			There are {fullOverlapCount} full overlaps.<br />
			There are {partialOverlapCount} partial overlaps.
		</p>
	{/if}
</div>

<style>
	textarea {
		width: 100%;
		height: 200px;
	}
</style>
