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
            <li aria-current={$page.url.pathname === "/adventofcode/day1" ? "page" : undefined}>
                <a href="/adventofcode/day1">Day 1</a>
            </li>
            <li aria-current={$page.url.pathname === "/adventofcode/day2" ? "page" : undefined}>
                <a href="/adventofcode/day2">Day 2</a>
            </li>
            <li aria-current={$page.url.pathname === "/adventofcode/day3" ? "page" : undefined}>
                <a href="/adventofcode/day3">Day 3</a>
            </li>
        </ul>
    </nav>
</div>
