<script>
	import Header from '../components/Header.svelte';
	import MeetupGrid from '../components/MeetupGrid.svelte';
	import TextInput from '../components/TextInput.svelte';
	import Button from '../components/Button.svelte';

	let title = "";
	let description = "";
	let imageUrl = "";
	let address = "";
	let email = "";

	let meetups = [
		{
			id: "m1",
			title: "Learn to write awesome code in just 3 minutes!",
			description: "Amazing, awesome, cool fatest bootcamp in the world! Become Senior in just 3 minutes!",
			image: "https://media.istockphoto.com/photos/computer-programmer-working-on-laptop-picture-id1265176772?b=1&k=20&m=1265176772&s=170667a&w=0&h=IHFnvxa3kvVTuZcEfPpCSGIFA_gNT7dIlGDR7eD2cFI=",
			address: "NYC, 00-000",
			email: "coding@test.com"
		},

		{
			id: "m2",
			title: "Become a Santa!",
			description: "You are the reason of happiness, you are the Santa :)",
			image: "https://images.unsplash.com/photo-1511600173735-a896042389cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FudGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			address: "Florida, 12-345",
			email: "santaclaus@test.com"
		},
	];

	const addMeetup = () => {
		console.log("add meetup")
		const newMeetup = {
			id: Math.random().toString(),
			title: title,
			description: description,
			image: imageUrl,
			address: address,
			email: email,
		};

		meetups = [newMeetup, ...meetups];
	};

</script>

<Header />

<main>
	<form on:submit|preventDefault={addMeetup}>
		<TextInput id="title" label="Title" value={title} on:input={e => {title=e.target.value}} />
		<TextInput id="description" label="Description" controlType="textarea" rows="3" value={description} on:input={e => {description=e.target.value}} />
		<TextInput id="image-url" label="Image URL" value={imageUrl} on:input={e => {imageUrl=e.target.value}} />
		<TextInput id="address" label="Address" value={address} on:input={e => {address=e.target.value}} />
		<TextInput id="email" type="email" label="E-mail" value={email} on:input={e => {email=e.target.value}} />
		<Button caption="Save" type="submit" />
	</form>
	<MeetupGrid {meetups} />
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

	main {
		margin-top: 5rem;
		
	}

	form {
		width: 30rem;
		max-width: 90%;
		margin: 0 auto;
	}
</style>