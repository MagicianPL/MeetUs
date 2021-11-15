<script>
  import {scale} from 'svelte/transition';
import {flip} from 'svelte/animate';
    import { createEventDispatcher } from 'svelte';
    import customMeetupsStore from '../store/meetups-store';
    import MeetupItem from '../components/MeetupItem.svelte';
    import MeetupFilter from './MeetupFilter.svelte';
    import Button from '../components/Button.svelte';
    
    export let meetups;

    let allIsActive = true;

    const dispatch = createEventDispatcher();
    let showFav = false;
    $: filteredMeetups = showFav ? meetups.filter(i => i.isFavorite) : meetups;

    const filterMeetups = (e) => {
      showFav = e.detail === 1;
      if (showFav) {
        allIsActive = false;
      } else {
        allIsActive = true;
      }
    };
</script>

<section class="controls">
<MeetupFilter on:select={filterMeetups} allIsActive={allIsActive} />
<Button
			on:click={() => {
				dispatch("showAddingForm")
			}}>Add Meetup</Button
		>
</section>
<section>
	{#each filteredMeetups as meetup (meetup.id)}
    <div transition:scale animate:flip={{duration: 300}}>
		<MeetupItem on:toggleFavorite on:showDetails on:edit id={meetup.id} title={meetup.title} description={meetup.description} img={meetup.image} address={meetup.address} email={meetup.email} isFav={meetup.isFavorite} />
	  </div>
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