<script>
    export let title;
    export let description;
    export let img;
    export let address;
    export let email;
</script>

<div class="meetup">
    <header>
        <h1>{title}</h1>
    </header>
    <div class="image">
        <img src="{img}" alt="meetup" />
    </div>
    <p class="desc">{description}</p>
    <p>{address}</p>
    <footer>
        <p>{email}</p>
        <button>Show details</button>
        <button>Favorite</button>
    </footer>
</div>

<style>
    .meetup {
        width: 90%;
        max-width: 1000px;
        padding: 1.5rem;
        background-color: rgb(248, 246, 242);
        margin: 0 auto 3rem auto;
    }

    .meetup * {
        text-align: center;
    }

    h1 {
        text-align: center;
        font: bold;
        font-size: 40px;
        color: #88083d;
    }

    .desc {
        color: rgb(48, 45, 45);
        font-size: 30px;
    }
</style>