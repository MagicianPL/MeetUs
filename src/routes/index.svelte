<script>
	import Header from '../components/Header.svelte';
	import MeetupItem from '../components/MeetupItem.svelte';

	const meetups = [
		{
			id: "m1",
			title: "Learn to write awesome code in just 3 minutes!",
			description: "Amazing, awesome, cool fatest bootcamp in the world! Become Senior in just 3 minutes!",
			image: "https://media.istockphoto.com/photos/computer-programmer-working-on-laptop-picture-id1265176772?b=1&k=20&m=1265176772&s=170667a&w=0&h=IHFnvxa3kvVTuZcEfPpCSGIFA_gNT7dIlGDR7eD2cFI=",
			adress: "NYC, 00-000",
		},

		{
			id: "m2",
			title: "Become a Santa!",
			description: "You are the reason of happiness, you are the Santa :)",
			image: "https://images.unsplash.com/photo-1511600173735-a896042389cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FudGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			adress: "Florida, 12-345",
		},
	];
</script>

<Header />

<section>
	{#each meetups as meetup}
		<MeetupItem />
	{/each}
</section>

<style>
	section {
		margin-top: 5rem;
	}
</style>