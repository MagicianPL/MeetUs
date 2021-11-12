import { writable } from 'svelte/store';

const meetups = writable([
	{
		id: 'm1',
		title: 'Learn to write awesome code in just 3 minutes!',
		description:
			'Amazing, awesome, cool fatest bootcamp in the world! Become Senior in just 3 minutes!',
		image:
			'https://media.istockphoto.com/photos/computer-programmer-working-on-laptop-picture-id1265176772?b=1&k=20&m=1265176772&s=170667a&w=0&h=IHFnvxa3kvVTuZcEfPpCSGIFA_gNT7dIlGDR7eD2cFI=',
		address: 'NYC, 00-000',
		email: 'coding@test.com',
		isFavorite: false
	},

	{
		id: 'm2',
		title: 'Become a Santa!',
		description: 'You are the reason of happiness, you are the Santa :)',
		image:
			'https://images.unsplash.com/photo-1511600173735-a896042389cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FudGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		address: 'Florida, 12-345',
		email: 'santaclaus@test.com',
		isFavorite: false
	}
]);

export default meetups;