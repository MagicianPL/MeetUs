<script>
    import MeetupItem from '../components/MeetupItem.svelte';

    export let meetups;
</script>

<section>
	{#each meetups as meetup}
		<MeetupItem on:toggleFavorite id={meetup.id} title={meetup.title} description={meetup.description} img={meetup.image} address={meetup.address} email={meetup.email} isFav={meetup.isFavorite} />
	{/each}
</section>

<style>
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