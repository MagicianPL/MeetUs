<script>
	import customMeetupsStore, { meetups } from '../store/meetups-store';
	import Header from '../components/Header.svelte';
	import MeetupGrid from '../components/MeetupGrid.svelte';
	import EditMeetup from '../components/EditMeetup.svelte';
	import Button from '../components/Button.svelte';
	import MeetupDetails from '../components/MeetupDetails.svelte';

	let showForm = false;
	let showDetails = false;

	let detailsInfo = {};
	let editedMeetupId = null;

	const showDetailsPage = (e) => {
	
		showDetails = true;
		detailsInfo.id = e.detail;
	};

	const addMeetup = () => {
		showForm = false;
	};

	const toggleFavorite = (e) => {
		const id = e.detail;
		customMeetupsStore.toggleFavorite(id);
	};

	const editMeetup = (e) => {
		editedMeetupId = e.detail;
		showForm = true;
		console.log(e);
	};

</script>

<Header />
<main>
{#if !showDetails}
	<div class="form-control">
		<Button
			on:click={() => {
				showForm = !showForm;
				editedMeetupId = null;
			}}>Add Meetup</Button
		>
	</div>
	{#if showForm}
		<EditMeetup
			id={editedMeetupId}
			on:save={addMeetup}
			on:cancel={() => {
				showForm = false;
			}}
		/>
	{/if}
	<MeetupGrid meetups={$meetups} on:toggleFavorite={toggleFavorite} on:showDetails={showDetailsPage} on:edit={editMeetup} />
{:else}
	<MeetupDetails id={detailsInfo.id} bind:showDetails={showDetails} />
{/if}
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
