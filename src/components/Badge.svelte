<script>
    import { fade } from 'svelte/transition';
</script>

<span transition:fade><slot /></span>

<style>
    span {
        display: inline-block;
        background-color: #cf0056;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        font-size: 20px;
        padding: 5px 8px;
    }
</style>