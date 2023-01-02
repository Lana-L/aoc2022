<script>
import { page } from "$app/stores";
</script>

<svelte:head>
	<title>Advent of Code</title>
	<meta name="description" content="Advent of Code exercises" />
</svelte:head>

<div class="text-column">
	<h1>Advent of Code 2022</h1>

	<p>
		This is a <a href="https://adventofcode.com/2022">Advent of Code</a> results tab.
	</p>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === "/day1" ? "page" : undefined}>
				<a href="/day1">Day 1</a>
			</li>
			<li aria-current={$page.url.pathname === "/day2" ? "page" : undefined}>
				<a href="/day2">Day 2</a>
			</li>
			<li aria-current={$page.url.pathname === "/day3" ? "page" : undefined}>
				<a href="/day3">Day 3</a>
			</li>
			<li aria-current={$page.url.pathname === "/day4" ? "page" : undefined}>
				<a href="/day4">Day 4</a>
			</li>
			<li aria-current={$page.url.pathname === "/day5" ? "page" : undefined}>
				<a href="/day5">Day 5</a>
			</li>
			<li aria-current={$page.url.pathname === "/day6" ? "page" : undefined}>
				<a href="/day6">Day 6</a>
			</li>
		</ul>
	</nav>
</div>
