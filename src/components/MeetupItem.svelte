<script>
import {createEventDispatcher} from 'svelte';
import Button from './Button.svelte';

const dispatch = createEventDispatcher();

    export let id;
    export let title;
    export let description;
    export let img;
    export let address;
    export let email;
    export let isFav;
</script>

<div class="meetup">
    <header>
        <h1>{title}</h1>
    </header>
    <div class="image">
        <img src="{img}" alt="meetup" />
    </div>
    <div class="content">
        <p class="desc">{description}</p>
        <p>{address}</p>
    </div>
    <footer>
        <Button href="mailto:{email}" caption="Contact" />
        <Button caption="{isFav ? 'Unfavorite' : 'Favorite'}" mode="outline" type="button" on:click={()=>{dispatch('toggleFavorite', id)}} />
        <Button caption="Show Details" type="button" />
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

    .meetup * {
        text-align: center;
    }

    h1 {
        text-align: center;
        font: bold;
        font-size: 30px;
        color: #88083d;
        margin-bottom: 1.5rem;
        height: 70px;
        padding: 20px 8px 0 8px;
    }

    .image {
        width: 100%;
        height: 250px;
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

    footer {
        margin-bottom: 2rem;
    }
</style>