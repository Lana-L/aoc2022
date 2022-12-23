<script>
async function getJsonData() {
    let response = await fetch("https://pogoapi.net/api/v1/pokemon_names.json");
    let data = await response.json();
    return data;
}

const promise = getJsonData();
</script>

{#await promise}
    <p>Loading ...</p>
{:then data}
    {#each Object.values(data) as result}
        <div class="user">
            <p>
                {result.id} - {result.name}
            </p>
        </div>
    {/each}
{/await}

<svelte:head>
    <title>JSON tutorial</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<style>
.user {
    display: flex;
    align-items: center;
    margin: 20px;
}
</style>
