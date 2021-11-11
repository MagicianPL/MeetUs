<script>
    import {createEventDispatcher} from 'svelte';
    import TextInput from './TextInput.svelte';
    import Button from './Button.svelte';
    import Modal from './Modal.svelte';
    import {isEmpty, emailIsValid} from '../helpers/validation.js';

    const dispatch = createEventDispatcher();

    let title = "";
    let validTitle = false;
	let description = "";
    let validDesc = false;
	let imageUrl = "";
    let validUrl = false;
	let address = "";
    let validAddress = false;
	let email = "";
    let validEmail = false;

    $: validTitle = !isEmpty(title);
    $: validDesc = !isEmpty(description);
    $: validUrl = !isEmpty(imageUrl);
    $: validAddress = !isEmpty(address);
    $: validEmail = emailIsValid(email);

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
    <TextInput id="title" label="Title" value={title} valid={validTitle} validityMessage="Please enter a valid title" on:input={e => {title=e.target.value}} />
    <TextInput id="description" label="Description" controlType="textarea" rows="3" value={description} valid={validDesc} validityMessage="Please enter a valid description" on:input={e => {description=e.target.value}} />
    <TextInput id="image-url" label="Image URL" value={imageUrl} valid={validUrl} validityMessage="Please enter a valid URL" on:input={e => {imageUrl=e.target.value}} />
    <TextInput id="address" label="Address" value={address} valid={validAddress} validityMessage="Please enter a valid address" on:input={e => {address=e.target.value}} />
    <TextInput id="email" type="email" label="E-mail" value={email} valid={validEmail} validityMessage="Please enter a valid e-mail address" on:input={e => {email=e.target.value}} />
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