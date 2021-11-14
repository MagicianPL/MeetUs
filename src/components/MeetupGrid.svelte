<script>
    import { createEventDispatcher } from 'svelte';
    import MeetupItem from '../components/MeetupItem.svelte';
    import MeetupFilter from './MeetupFilter.svelte';
    import Button from '../components/Button.svelte';
    export let meetups;

    const dispatch = createEventDispatcher();
</script>

<section class="controls">
  <MeetupFilter />
<Button
			on:click={() => {
				dispatch("showAddingForm")
			}}>Add Meetup</Button
		>
</section>
<section>
	{#each meetups as meetup}
		<MeetupItem on:toggleFavorite on:showDetails on:edit id={meetup.id} title={meetup.title} description={meetup.description} img={meetup.image} address={meetup.address} email={meetup.email} isFav={meetup.isFavorite} />
	{/each}
</section>

<style>
  .controls {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

    section {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 2.5rem;
}

@media (min-width: 768px) {
  section {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>