<script>
import {createEventDispatcher} from 'svelte';
import customMeetupsStore from '../store/meetups-store';
import Button from './Button.svelte';
import Badge from './Badge.svelte';

const dispatch = createEventDispatcher();

    export let id;
    export let title;
    export let description;
    export let img;
    export let address;
   
    export let isFav;

    const toggleFavorite = () => {
        customMeetupsStore.toggleFavorite(id);
    };

    const deleteMeetup = () => {
        customMeetupsStore.deleteMeetup(id);
    };
</script>

<div class="meetup">
    <header>
        <h1>
            {title}
            {#if isFav}
            <Badge>FAVORITE</Badge>
            {/if}
        </h1>
    </header>
    <div class="image">
        <img src="{img}" alt="meetup" />
    </div>
    <div class="content">
        <p class="desc">{description}</p>
        <p>{address}</p>
    </div>
    <footer>
        <Button on:click={()=>{dispatch("edit", id)}}>Edit</Button>
        <Button color={isFav ? null : 'success'} mode="outline" type="button" on:click={toggleFavorite}>{isFav ? 'Unfavorite' : 'Favorite'}</Button>
        <Button type="button" on:click={()=>{dispatch("showDetails", id)}}>Show details</Button>
       <div class="delete">
        <Button on:click={deleteMeetup} type="button" mode="outline">Delete</Button>
       </div> 
    </footer>
</div>

<style>
    .meetup {
        width: 90%;
        max-width: 1000px;
        background-color: rgb(248, 246, 242);
        margin: 0 auto 3rem auto;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 5px;
    }

    @media (max-width: 767px) {
        .meetup {
            max-width: 500px;
        }
    }

    .meetup * {
        text-align: center;
    }

    .meetup h1 {
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        color: #88083d;
        margin-bottom: 1.5rem;
        height: 85px;
        padding: 20px 8px 0 8px;
    }

    @media (max-width: 500px) {
        .meetup h1 {
            font-size: 26px;
        }
    }

    .image {
        width: 100%;
       /* height: 250px; */
        overflow: hidden;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
    }

    .content {
        padding: 0 8px;
        height: 9rem;
    }

    .desc {
        color: rgb(48, 45, 45);
        font-size: 25px;
        margin-bottom: 12px;
    }

    .delete {
        margin-top: 1rem;
    }

    footer {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
    }
</style>