<script>
	import Header from '../components/Header.svelte';
	import MeetupGrid from '../components/MeetupGrid.svelte';
	import EditMeetup from '../components/EditMeetup.svelte';
	import Button from '../components/Button.svelte';
	
	let showForm = false;

	let meetups = [
		{
			id: "m1",
			title: "Learn to write awesome code in just 3 minutes!",
			description: "Amazing, awesome, cool fatest bootcamp in the world! Become Senior in just 3 minutes!",
			image: "https://media.istockphoto.com/photos/computer-programmer-working-on-laptop-picture-id1265176772?b=1&k=20&m=1265176772&s=170667a&w=0&h=IHFnvxa3kvVTuZcEfPpCSGIFA_gNT7dIlGDR7eD2cFI=",
			address: "NYC, 00-000",
			email: "coding@test.com",
			isFavorite: false,
		},

		{
			id: "m2",
			title: "Become a Santa!",
			description: "You are the reason of happiness, you are the Santa :)",
			image: "https://images.unsplash.com/photo-1511600173735-a896042389cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FudGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			address: "Florida, 12-345",
			email: "santaclaus@test.com",
			isFavorite: false,
		},
	];

	const addMeetup = (e) => {
		const newMeetup = {
			id: Math.random().toString(),
			title: e.detail.title,
			description: e.detail.description,
			image: e.detail.imageUrl,
			address: e.detail.address,
			email: e.detail.email,
		};
		meetups = [newMeetup, ...meetups];
		showForm = false;
	};

	const toggleFavorite = (e) => {
		const id = e.detail;
		//I'm cloning choosed meetup
		const updatedMeetup = { ...meetups.find(obj => obj.id === id) } ;
		updatedMeetup.isFavorite = !updatedMeetup.isFavorite;

		const meetupIndex = meetups.findIndex(obj => obj.id === id);
		//I'm cloning array
		const updatedArrMeetups = [...meetups];
		//changing old meetup to new one;
		updatedArrMeetups[meetupIndex] = updatedMeetup;
		//updating array;
		meetups = updatedArrMeetups;
	};

</script>

<Header />
<main>
	<div class="form-control">
	<Button on:click={()=>{showForm = !showForm}}>Add Meetup</Button>
	</div>
	{#if showForm}
	<EditMeetup on:save={addMeetup} />
	{/if}
	<MeetupGrid {meetups} on:toggleFavorite={toggleFavorite} />
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