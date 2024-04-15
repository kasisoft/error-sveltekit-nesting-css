<script lang="ts">
    import PM from '$lib/components/PM.svelte';
</script>

<section>
    <PM title="Yellow" />
    <PM title="Green" />
</section>

<style lang="postcss">

    section {

        > div:first-of-type {
            background-color: yellow;
        }

        > div:last-of-type {
            background-color: green;
        }

    }

</style>