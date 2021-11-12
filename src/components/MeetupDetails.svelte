<script>
    import {meetups} from '../store/meetups-store';
    import {onDestroy} from 'svelte';
    import {createEventDispatcher} from 'svelte';
    import Button from './Button.svelte';

    const dispatch = createEventDispatcher();

    export let id = "m1";
    export let showDetails;
    let choosedMeetup = {};

    const unsubscribe = meetups.subscribe(items => {
        choosedMeetup = items.find(item => item.id === id);
    });

    onDestroy(()=>{
        unsubscribe();
    });

    const closeDetailsPage = () => {
        dispatch("exitDetails");
        showDetails = !showDetails;
    };
</script>

<section>
    <div class="image">
        <img src="{choosedMeetup.image}" alt="{choosedMeetup.title}" />
    </div>
    <p class="title">{choosedMeetup.title}</p>
    <p class="desc">{choosedMeetup.description}</p>
    <p class="contact">{choosedMeetup.email}</p>
    <Button on:click={closeDetailsPage}>Close</Button>
</section>