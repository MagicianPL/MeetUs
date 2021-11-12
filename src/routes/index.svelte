<script>
	import customMeetupsStore, {meetups} from '../store/meetups-store';
	import Header from '../components/Header.svelte';
	import MeetupGrid from '../components/MeetupGrid.svelte';
	import EditMeetup from '../components/EditMeetup.svelte';
	import Button from '../components/Button.svelte';
	
	let showForm = false;

	const addMeetup = (e) => {
		const newMeetup = {
			id: Math.random().toString(),
			title: e.detail.title,
			description: e.detail.description,
			image: e.detail.imageUrl,
			address: e.detail.address,
			email: e.detail.email,
		};
		customMeetupsStore.addMeetup(newMeetup);
		showForm = false;
	};

	const toggleFavorite = (e) => {
		const id = e.detail;
		customMeetupsStore.toggleFavorite(id);
	};

</script>

<Header />
<main>
	<div class="form-control">
	<Button on:click={()=>{showForm = !showForm}}>Add Meetup</Button>
	</div>
	{#if showForm}
	<EditMeetup on:save={addMeetup} on:cancel={()=>{showForm = false}} />
	{/if}
	<MeetupGrid meetups={$meetups} on:toggleFavorite={toggleFavorite} />
</main>

<style>
	:global(*) {
		margin: 0;
    padding: 0;
    box-sizing: border-box;
	}

	:global(body) {
		background-color: rgb(240, 238, 233);
	}

	.form-control {
		margin: 1rem;
	}

	main {
		margin-top: 5rem;
		
	}

	
</style>