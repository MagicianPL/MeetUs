<script>
    import {createEventDispatcher} from 'svelte';
    import TextInput from './TextInput.svelte';
    import Button from './Button.svelte';
    import Modal from './Modal.svelte';

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

<Modal on:cancel title="Edit Meetup Data">
<form on:submit|preventDefault={submitForm}>
    <TextInput id="title" label="Title" value={title} valid={true} validityMessage="Please enter a valid title" on:input={e => {title=e.target.value}} />
    <TextInput id="description" label="Description" controlType="textarea" rows="3" value={description} on:input={e => {description=e.target.value}} />
    <TextInput id="image-url" label="Image URL" value={imageUrl} on:input={e => {imageUrl=e.target.value}} />
    <TextInput id="address" label="Address" value={address} on:input={e => {address=e.target.value}} />
    <TextInput id="email" type="email" label="E-mail" value={email} on:input={e => {email=e.target.value}} />
    <!--<Button type="submit">Save</Button>-->
</form>
<div slot="footer">
    <Button type="button" mode="outline" on:click={()=>{dispatch("cancel")}}>Cancel</Button>
    <Button type="button" on:click={submitForm}>Save</Button>
</div>
</Modal>

<style>
    form {
		width: 100%;
	}
</style>