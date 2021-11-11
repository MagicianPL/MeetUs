<script>
    import {createEventDispatcher} from 'svelte';
    import TextInput from './TextInput.svelte';
    import Button from './Button.svelte';

    const dispatch = createEventDispatcher();

    let title = "";
	let description = "";
	let imageUrl = "";
	let address = "";
	let email = "";

    const submitForm = () => {
        dispatch('save', {
            title: title,
            description: description,
            imageUrl: imageUrl,
            address: address,
            email: email,
        })
    };
</script>

<form on:submit|preventDefault={submitForm}>
    <TextInput id="title" label="Title" value={title} on:input={e => {title=e.target.value}} />
    <TextInput id="description" label="Description" controlType="textarea" rows="3" value={description} on:input={e => {description=e.target.value}} />
    <TextInput id="image-url" label="Image URL" value={imageUrl} on:input={e => {imageUrl=e.target.value}} />
    <TextInput id="address" label="Address" value={address} on:input={e => {address=e.target.value}} />
    <TextInput id="email" type="email" label="E-mail" value={email} on:input={e => {email=e.target.value}} />
    <Button caption="Save" type="submit" />
</form>

<style>
    form {
		width: 30rem;
		max-width: 90%;
		margin: 0 auto;
	}
</style>