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

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 3rem;
    }

    .image {
        width: 60%;
        height: 25rem;
        max-width: 1000px;
        margin-bottom: 1.4rem;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .title {
        font-size: 2.5rem;
        font-weight: bold;
        color: #cf0056;
        text-shadow: 0px 3px 0px #b2a98f,
                 0px 14px 10px rgba(0,0,0,0.15),
                 0px 24px 2px rgba(0,0,0,0.1),
                 0px 34px 30px rgba(0,0,0,0.1);
        margin-bottom: 1.5rem;
    }

    .desc {
        font-size: 2rem;
        margin-bottom: 1.2rem;
    }

    .contact {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }

</style>