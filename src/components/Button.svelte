<script>
    export let caption;
    export let type;
</script>

<button type={type}>{caption}</button>

<style>
    button {
        padding: 0.7rem;
        font-weight: bold;
        color: white;
        background-color: #cf0056;
        transition: all 0.3s;
        cursor: hover;
    }

    button:hover {
        color: rgb(241, 238, 238);
        background-color: #cf1764;
    }
</style>